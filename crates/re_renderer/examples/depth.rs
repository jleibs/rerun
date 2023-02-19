use ecolor::Hsva;
use glam::{UVec3, Vec2, Vec3};
use image::{DynamicImage, GenericImageView};
use itertools::Itertools;
use macaw::IsoTransform;
use rand::Rng;
use re_renderer::{
    renderer::{
        GenericSkyboxDrawData, LineStripFlags, RectangleDrawData, TextureFilterMag,
        TextureFilterMin, TexturedRect, Volume, VolumeDrawData,
    },
    resource_managers::{GpuTexture2DHandle, Texture2DCreationDesc},
    view_builder::{self, Projection, TargetConfiguration, ViewBuilder},
    Color32, LineStripSeriesBuilder, PointCloudBuilder, Size,
};
use winit::event::{ElementState, VirtualKeyCode};

mod framework;

enum CameraControl {
    RotateAroundCenter,

    // TODO(andreas): Only pauses rotation right now. Add camera controller.
    Manual,
}

struct RenderVolumetric {
    checkerboard: Vec<u8>,
    checkerboard_size: Vec3,
    checkerboard_dimensions: UVec3,

    camera_control: CameraControl,
    camera_position: glam::Vec3,
}

impl framework::Example for RenderVolumetric {
    fn title() -> &'static str {
        "Volumetric Rendering"
    }

    fn new(re_ctx: &mut re_renderer::RenderContext) -> Self {
        re_log::info!("Stop camera movement by pressing 'Space'");

        let img = image::open("/tmp/teardown_depth.png").unwrap();
        dbg!(img.width(), img.height());
        let img = img.resize_exact(640, 480, image::imageops::Nearest);
        let albedo = image::open("/tmp/teardown_albedo.png").unwrap();
        let albedo = albedo.resize_exact(640, 480, image::imageops::Nearest);

        // let img = image::open("/tmp/nyud_depth.png").unwrap();
        // dbg!(img.width(), img.height());
        // let img = img.resize_exact(640, 480, image::imageops::Nearest);
        // let albedo = image::open("/tmp/nyud_albedo.png").unwrap();
        // let albedo = albedo.resize_exact(640, 480, image::imageops::Nearest);

        // TODO: Z is arbitrary I guess?
        let img_size = Vec3::new(img.width() as f32, img.height() as f32, 640.0 / 4.0);

        let vol_size = Vec3::new(img.width() as f32, img.height() as f32, 640.0 / 1.0) * 0.15;
        // TODO: shouldnt have to be cubic
        let vol_dimensions = UVec3::new(640, 640, 640) / 4;

        dbg!(img_size);
        dbg!(vol_size);
        dbg!(vol_dimensions);

        let mut faked =
            vec![0u8; (vol_dimensions.x * vol_dimensions.y * vol_dimensions.z * 4) as usize];

        let uv_center = Vec2::new(img_size.x as f32 * 0.5, img_size.y as f32 * 0.5);

        let focal_length = vol_dimensions.x as f32 * 0.7;
        // let intrinsics = glam::Mat3::from_cols(
        //     glam::vec3(focal_length, 0.0, uv_center.x),
        //     glam::vec3(0.0, focal_length, uv_center.y),
        //     glam::vec3(0.0, 0.0, 1.0),
        // )
        // .inverse();
        let zmax = img
            .pixels()
            .max_by(|p1, p2| p1.2 .0[0].cmp(&p2.2 .0[0]))
            .unwrap();
        dbg!(zmax);
        let mut pixels_set = 0;
        for (x, y, p) in img.pixels() {
            let z = p.0[0] as f32 / 255.0 * (img_size.z as f32 - 1.0);
            // let texcoords = Vec3::new(x as f32, y as f32, z) / img_size;
            // let xy = dbg!((texcoords - uv_center.extend(0.0)) * z / focal_length)
            //     + vol_dimensions.as_vec3() * 0.5;
            // let pos = Vec3::new(xy.x, xy.y, z);
            // // dbg!(((x, y), pos));
            // let pos = pos.as_uvec3();
            // let z = (p.0[0] as f32 / 295.0 * (dimensions.z as f32 - 1.0)) as u32;
            // let z = linearize(p.0[0]) as u32;
            // let z = 0;
            // dbg!(z);
            // for z in 0..dimensions.z {

            let texcoords = Vec3::new(x as f32, y as f32, z) / img_size;
            let pos = texcoords * (vol_dimensions.as_vec3() - 1.0);
            let mut pos = pos.as_uvec3();
            pos.x = vol_dimensions.x - pos.x;
            pos.y = vol_dimensions.y - pos.y;

            let idx = (pos.x
                + pos.y * vol_dimensions.x
                + pos.z * vol_dimensions.x * vol_dimensions.y) as usize;
            let idx = idx * 4;

            faked[idx..idx + 4].copy_from_slice(&albedo.get_pixel(x, y).0);
            pixels_set += 1;
            // }
        }

        dbg!(pixels_set);
        // if let DynamicImage::ImageRgb8(img) = img {
        //     img.enumerate_pixels
        // }

        RenderVolumetric {
            checkerboard: faked,
            checkerboard_size: vol_size,
            checkerboard_dimensions: vol_dimensions,

            camera_control: CameraControl::RotateAroundCenter,
            camera_position: glam::Vec3::ZERO,
        }
    }

    fn draw(
        &mut self,
        re_ctx: &mut re_renderer::RenderContext,
        resolution: [u32; 2],
        time: &framework::Time,
        pixels_from_point: f32,
    ) -> Vec<framework::ViewDrawResult> {
        // let seconds_since_startup = 0f32;
        let seconds_since_startup = time.seconds_since_startup();
        if matches!(self.camera_control, CameraControl::RotateAroundCenter) {
            self.camera_position = Vec3::new(
                seconds_since_startup.sin(),
                0.5,
                seconds_since_startup.cos(),
            ) * 100.0;
        }

        let splits = framework::split_resolution(resolution, 1, 1).collect::<Vec<_>>();

        let volume_instances = vec![{
            let scale = glam::Mat4::from_scale(self.checkerboard_size);

            let rotation = glam::Mat4::IDENTITY;

            let translation_center =
                glam::Mat4::from_translation(-glam::Vec3::splat(0.5) * self.checkerboard_size);

            let world_from_model = rotation * translation_center * scale;
            let model_from_world = world_from_model.inverse();

            Volume {
                world_from_model,
                model_from_world,
                size: self.checkerboard_size,
                dimensions: self.checkerboard_dimensions,
                data: self.checkerboard.clone(),
            }
        }];

        let volume_draw_data = VolumeDrawData::new(re_ctx, &volume_instances).unwrap();

        vec![
            {
                let mut view_builder = ViewBuilder::default();
                view_builder
                    .setup_view(
                        re_ctx,
                        view_builder::TargetConfiguration {
                            name: "3D".into(),
                            resolution_in_pixel: splits[0].resolution_in_pixel,
                            view_from_world: IsoTransform::look_at_rh(
                                self.camera_position,
                                Vec3::ZERO, // TODO
                                Vec3::Y,
                            )
                            .unwrap(),
                            projection_from_view: Projection::Perspective {
                                vertical_fov: 70.0 * std::f32::consts::TAU / 360.0,
                                near_plane_distance: 0.01,
                            },
                            pixels_from_point,
                            ..Default::default()
                        },
                    )
                    .unwrap();
                let command_buffer = view_builder
                    .queue_draw(&GenericSkyboxDrawData::new(re_ctx))
                    .queue_draw(&volume_draw_data)
                    .draw(re_ctx, ecolor::Rgba::TRANSPARENT)
                    .unwrap();
                framework::ViewDrawResult {
                    view_builder,
                    command_buffer,
                    target_location: splits[0].target_location,
                }
            }, //
        ]
    }

    fn on_keyboard_input(&mut self, input: winit::event::KeyboardInput) {
        match (input.state, input.virtual_keycode) {
            (ElementState::Pressed, Some(VirtualKeyCode::Space)) => {
                self.camera_control = match self.camera_control {
                    CameraControl::RotateAroundCenter => CameraControl::Manual,
                    CameraControl::Manual => CameraControl::RotateAroundCenter,
                };
            }

            _ => {}
        }
    }
}

fn main() {
    framework::start::<RenderVolumetric>();
}
