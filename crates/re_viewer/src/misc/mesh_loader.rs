use anyhow::anyhow;
use re_log_types::{EncodedMesh3D, Mesh3D, MeshFormat, RawMesh3D};
use re_renderer::{resource_managers::ResourceLifeTime, RenderContext};

pub struct LoadedMesh {
    name: String,

    // TODO(andreas): We should only have MeshHandles here (which are generated by the MeshManager!)
    // Can't do that right now because it's too hard to pass the render context through.
    pub mesh_instances: Vec<re_renderer::renderer::MeshInstance>,

    bbox: macaw::BoundingBox,
}

impl LoadedMesh {
    pub fn load(
        name: String,
        mesh: &Mesh3D,
        render_ctx: &mut RenderContext,
    ) -> anyhow::Result<Self> {
        // TODO(emilk): load CpuMesh in background thread.
        match mesh {
            // Mesh from some file format. File passed in bytes.
            Mesh3D::Encoded(encoded_mesh) => {
                Self::load_encoded_mesh(name, encoded_mesh, render_ctx)
            }
            // Mesh from user logging some triangles.
            Mesh3D::Raw(raw_mesh) => Ok(Self::load_raw_mesh(name, raw_mesh, render_ctx)?),
        }
    }

    pub fn load_raw(
        name: String,
        format: MeshFormat,
        bytes: &[u8],
        render_ctx: &mut RenderContext,
    ) -> anyhow::Result<Self> {
        crate::profile_function!();

        let mesh_instances = match format {
            MeshFormat::Glb | MeshFormat::Gltf => {
                re_renderer::importer::gltf::load_gltf_from_buffer(
                    &name,
                    bytes,
                    ResourceLifeTime::LongLived,
                    render_ctx,
                )
            }
            // TODO(cmc): support obj
            MeshFormat::Obj => anyhow::bail!(".obj files are not supported yet"),
        }?;
        let bbox = re_renderer::importer::calculate_bounding_box(&mesh_instances);

        Ok(Self {
            name,
            bbox,
            mesh_instances,
        })
    }

    fn load_encoded_mesh(
        name: String,
        encoded_mesh: &EncodedMesh3D,
        render_ctx: &mut RenderContext,
    ) -> anyhow::Result<Self> {
        crate::profile_function!();
        let EncodedMesh3D {
            mesh_id: _,
            format,
            bytes,
            transform,
        } = encoded_mesh;

        let mut slf = Self::load_raw(name, *format, bytes, render_ctx)?;

        // TODO(cmc): Why are we creating the matrix twice here?
        let (scale, rotation, translation) =
            glam::Affine3A::from_cols_array_2d(transform).to_scale_rotation_translation();
        let transform =
            glam::Affine3A::from_scale_rotation_translation(scale, rotation, translation);
        for instance in &mut slf.mesh_instances {
            instance.world_from_mesh = transform * instance.world_from_mesh;
        }
        slf.bbox = re_renderer::importer::calculate_bounding_box(&slf.mesh_instances);

        Ok(slf)
    }

    fn load_raw_mesh(
        name: String,
        raw_mesh: &RawMesh3D,
        render_ctx: &mut RenderContext,
    ) -> anyhow::Result<Self> {
        crate::profile_function!();

        // TODO(cmc): Having to do all of these data conversions, copies and allocations doesn't
        // really make sense when you consider that both the component and the renderer are native
        // Rust. Need to clean all of that up later.

        let RawMesh3D {
            mesh_id: _,
            positions,
            indices,
            normals,
            albedo_factor,
        } = raw_mesh;

        let positions: Vec<glam::Vec3> =
            bytemuck::try_cast_vec(positions.clone()).map_err(|(err, _)| anyhow!(err))?;
        let num_positions = positions.len();

        let indices = if let Some(indices) = indices {
            indices.clone()
        } else {
            (0..positions.len() as u32).collect()
        };
        let num_indices = indices.len();

        let normals = if let Some(normals) = normals {
            normals
                .chunks_exact(3)
                .map(|v| glam::Vec3::from([v[0], v[1], v[2]]))
                .map(|normal| re_renderer::mesh::mesh_vertices::MeshVertexData {
                    normal,
                    texcoord: glam::Vec2::ZERO,
                })
                .collect::<Vec<_>>()
        } else {
            // TODO(andreas): Calculate normals
            // TODO(cmc): support colored and/or textured raw meshes
            std::iter::repeat(re_renderer::mesh::mesh_vertices::MeshVertexData {
                normal: glam::Vec3::ZERO,
                texcoord: glam::Vec2::ZERO,
            })
            .take(num_positions)
            .collect()
        };

        let bbox = macaw::BoundingBox::from_points(positions.iter().copied());

        let mesh_instances = vec![re_renderer::renderer::MeshInstance {
            gpu_mesh: render_ctx.mesh_manager.write().create(
                render_ctx,
                &re_renderer::mesh::Mesh {
                    label: name.clone().into(),
                    indices,
                    vertex_positions: positions,
                    vertex_data: normals,
                    materials: smallvec::smallvec![re_renderer::mesh::Material {
                        label: name.clone().into(),
                        index_range: 0..num_indices as _,
                        albedo: render_ctx.texture_manager_2d.white_texture_handle().clone(),
                        albedo_multiplier: albedo_factor.map_or(re_renderer::Rgba::WHITE, |v| {
                            re_renderer::Rgba::from_rgba_unmultiplied(v.x(), v.y(), v.z(), v.w())
                        }),
                    }],
                },
                ResourceLifeTime::LongLived,
            )?,
            ..Default::default()
        }];

        Ok(Self {
            name,
            bbox,
            mesh_instances,
        })
    }

    #[allow(dead_code)]
    pub fn name(&self) -> &str {
        &self.name
    }

    pub fn bbox(&self) -> &macaw::BoundingBox {
        &self.bbox
    }
}
