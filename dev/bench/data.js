window.BENCHMARK_DATA = {
  "lastUpdate": 1677860649869,
  "repoUrl": "https://github.com/rerun-io/rerun",
  "entries": {
    "Rust Benchmark": [
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35b3d4a7576deeb4e6203072a87ba33592537309",
          "message": "Use different artifact names for wasm/js in debug builds (#1428)\n\n* Create re_build_web_viewer\r\n\r\n* Add a re_build_web_viewer binary\r\n\r\n* Clean up re_build_web_viewer\r\n\r\n* Clean up the build script\r\n\r\n* Remove build_web.sh script\r\n\r\n* Simplify build-script\r\n\r\n* re_web_server binary: print out where we are hosting\r\n\r\n* Use different .wasm and .js names for debug builds\r\n\r\n* Fix\r\n\r\n* add back warning\r\n\r\n* Add crate-level docs\r\n\r\n* Improve docstring\r\n\r\n* Rename re_web_server to re_web_viewer_server\r\n\r\n* Rename WebServer to WebViewerServer",
          "timestamp": "2023-02-28T15:48:46+01:00",
          "tree_id": "27c0df0b4562f366ec446fde8828ccb56d0f8422",
          "url": "https://github.com/rerun-io/rerun/commit/35b3d4a7576deeb4e6203072a87ba33592537309"
        },
        "date": 1677596313835,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 602341,
            "range": "± 15644",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1821,
            "range": "± 46",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 356,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 424,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 157647,
            "range": "± 1073",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 51333323,
            "range": "± 1402109",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138353721,
            "range": "± 1565303",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165456383,
            "range": "± 976845",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 358552668,
            "range": "± 2041388",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187941385,
            "range": "± 1412350",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 76407838,
            "range": "± 1336833",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 262219176,
            "range": "± 3232511",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 326796,
            "range": "± 3500",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6151,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 407831,
            "range": "± 4130",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 751947,
            "range": "± 6383",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 382303,
            "range": "± 2295",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2047,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 382138,
            "range": "± 2381",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7139338124,
            "range": "± 21137070",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1814813,
            "range": "± 35410",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2791955,
            "range": "± 22235",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17632,
            "range": "± 134",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 41,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "92247831cc15c0c528a2e0ac712ac75811fd6cd5",
          "message": "heuristic for camera frustum length is now based on scene size (#1433)\n\nIntroduces `EditableAutoValue` and per-frame heuristic updates on properties. In the future we can build more properties on top of this and update them in a central place like done here",
          "timestamp": "2023-02-28T16:26:27+01:00",
          "tree_id": "78393cd37e93ad55e65646f0490db9960075d2d7",
          "url": "https://github.com/rerun-io/rerun/commit/92247831cc15c0c528a2e0ac712ac75811fd6cd5"
        },
        "date": 1677598577669,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 550577,
            "range": "± 4953",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1805,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 358,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 418,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 151452,
            "range": "± 1899",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46668135,
            "range": "± 2038823",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135532022,
            "range": "± 1730848",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163573065,
            "range": "± 1536846",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 350723069,
            "range": "± 2935515",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 186655516,
            "range": "± 1841571",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 74658108,
            "range": "± 1062782",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 252337801,
            "range": "± 3185540",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 329762,
            "range": "± 3463",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6084,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 351130,
            "range": "± 3523",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 705067,
            "range": "± 9322",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347728,
            "range": "± 2732",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1992,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 357518,
            "range": "± 2964",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7056235608,
            "range": "± 26103414",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1737227,
            "range": "± 18825",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2702377,
            "range": "± 70971",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17558,
            "range": "± 154",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6be85c030f451ccecba51ee0a9e07bd30d7ffba7",
          "message": "Fix: don't create a dummy LogDb when opening the Rerun Menu (#1440)\n\n* Fix: don't create a dummy LogDb when opening the Rerun Menu\r\n\r\n* Add explanatory docstring",
          "timestamp": "2023-02-28T17:40:17+01:00",
          "tree_id": "94e4d80ea4521564625131463bb33e21936d2f59",
          "url": "https://github.com/rerun-io/rerun/commit/6be85c030f451ccecba51ee0a9e07bd30d7ffba7"
        },
        "date": 1677604415473,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 554445,
            "range": "± 1992",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1835,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 356,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 425,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152743,
            "range": "± 634",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 51783651,
            "range": "± 961527",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138039450,
            "range": "± 2010763",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166925473,
            "range": "± 2195985",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 358085797,
            "range": "± 1987665",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 186764021,
            "range": "± 1577474",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 74871661,
            "range": "± 1004334",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 256482272,
            "range": "± 1879406",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 333103,
            "range": "± 1002",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6235,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 358383,
            "range": "± 1762",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 721998,
            "range": "± 2642",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 352479,
            "range": "± 1235",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2060,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353770,
            "range": "± 1347",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6951746375,
            "range": "± 30499253",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1759417,
            "range": "± 25501",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2658971,
            "range": "± 36380",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17632,
            "range": "± 18",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 45,
            "range": "± 1",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d49d497f6288f08367b3a4b4f5f2be9e960ae3f8",
          "message": "Labels for 3D objects have now a color can now be selected & hovered (#1438)\n\nOverall they behave just like the labels for 2D objects because it's finally the exact same code \\o/\r\nFixes  #429",
          "timestamp": "2023-02-28T19:22:45+01:00",
          "tree_id": "95229bcbc5eca96575703e7b7d0cf529365afe85",
          "url": "https://github.com/rerun-io/rerun/commit/d49d497f6288f08367b3a4b4f5f2be9e960ae3f8"
        },
        "date": 1677609124669,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 537107,
            "range": "± 5889",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1787,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 348,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 426,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 149453,
            "range": "± 1783",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44626339,
            "range": "± 996814",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 122502032,
            "range": "± 1257084",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 151498213,
            "range": "± 1364572",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 325801151,
            "range": "± 2680920",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 172175925,
            "range": "± 1531099",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 62936640,
            "range": "± 767077",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 234335768,
            "range": "± 2303149",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 324135,
            "range": "± 3675",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6118,
            "range": "± 77",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 352587,
            "range": "± 2894",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 701931,
            "range": "± 5896",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 345868,
            "range": "± 2445",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1997,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351766,
            "range": "± 2960",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 5963914061,
            "range": "± 16387428",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1708319,
            "range": "± 19333",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2609044,
            "range": "± 32920",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17196,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4513eb13808b6a7f5e4562c8e4cfac87fd65a414",
          "message": "Speed up convesions for color arrays (#1454)",
          "timestamp": "2023-02-28T21:14:41+01:00",
          "tree_id": "0f11244283ce298b08d699e3976d70e8c405438f",
          "url": "https://github.com/rerun-io/rerun/commit/4513eb13808b6a7f5e4562c8e4cfac87fd65a414"
        },
        "date": 1677615855712,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 561150,
            "range": "± 10501",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1827,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 355,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 423,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152313,
            "range": "± 263",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47434804,
            "range": "± 674091",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125335129,
            "range": "± 1051515",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 155785572,
            "range": "± 925223",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 331002420,
            "range": "± 2134229",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 176991938,
            "range": "± 868134",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 65311491,
            "range": "± 1197167",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 241068518,
            "range": "± 1757154",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 333093,
            "range": "± 567",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6239,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 355356,
            "range": "± 1474",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 721202,
            "range": "± 2513",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349223,
            "range": "± 1510",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2072,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352390,
            "range": "± 881",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6106074331,
            "range": "± 28807256",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1732761,
            "range": "± 18166",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2675030,
            "range": "± 14677",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17666,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "22d293392c7afa77db8827fd408c850fe2e7a07b",
          "message": "Remove the python job path filters (#1452)",
          "timestamp": "2023-02-28T22:28:32+01:00",
          "tree_id": "bf40883e7e5968fd16263a7b5dd0300e0d21fd7d",
          "url": "https://github.com/rerun-io/rerun/commit/22d293392c7afa77db8827fd408c850fe2e7a07b"
        },
        "date": 1677620293483,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 561224,
            "range": "± 3393",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1808,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 355,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 425,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 153509,
            "range": "± 144",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49057592,
            "range": "± 451123",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 126258636,
            "range": "± 1110947",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 160300514,
            "range": "± 1503238",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 335908634,
            "range": "± 3944654",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 179111801,
            "range": "± 1724081",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 66237559,
            "range": "± 766356",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 240825550,
            "range": "± 1405790",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 333061,
            "range": "± 854",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6193,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 356587,
            "range": "± 1978",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 723416,
            "range": "± 2454",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 352234,
            "range": "± 1725",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2079,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 360489,
            "range": "± 2268",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6159944691,
            "range": "± 21248035",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1744756,
            "range": "± 21616",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2748562,
            "range": "± 39606",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17716,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 36,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb1783bbf9295c0b8ed3af057978829096f29a11",
          "message": "Improve the docs of `connect` and `serve` (#1450)\n\n* Improve the docs of `connect` and `serve`\r\n\r\n* Fix doctest",
          "timestamp": "2023-03-01T09:43:47+01:00",
          "tree_id": "d8b460f7b7ef2fc8b118dc9242a811eb2e7f8c90",
          "url": "https://github.com/rerun-io/rerun/commit/cb1783bbf9295c0b8ed3af057978829096f29a11"
        },
        "date": 1677660807331,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 537220,
            "range": "± 19353",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1743,
            "range": "± 25",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 344,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 408,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 146707,
            "range": "± 1732",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44698006,
            "range": "± 1165970",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 132761896,
            "range": "± 1834953",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164429504,
            "range": "± 1307931",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 344972798,
            "range": "± 2488450",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 180321929,
            "range": "± 1854326",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70036243,
            "range": "± 1475520",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 248830965,
            "range": "± 2955044",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 320945,
            "range": "± 4653",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6012,
            "range": "± 88",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 350148,
            "range": "± 2491",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 683589,
            "range": "± 5872",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 341917,
            "range": "± 3074",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2024,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 347441,
            "range": "± 3079",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6744343365,
            "range": "± 18982185",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1678376,
            "range": "± 19327",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2546167,
            "range": "± 23141",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17169,
            "range": "± 395",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8dc3e46acb5e0dd2101a2476836e3e0a7de8e46c",
          "message": "Simplify bind group allocation call by passing pool collection object. (#1459)\n\nGot tired of all these parameters and since `BindGroupPool::alloc` recently became non-mut, this can be easily simplified.",
          "timestamp": "2023-03-01T15:56:50+01:00",
          "tree_id": "e15f9fbf050b34d0ed3e7c24b1a760c98b618211",
          "url": "https://github.com/rerun-io/rerun/commit/8dc3e46acb5e0dd2101a2476836e3e0a7de8e46c"
        },
        "date": 1677683299358,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 546884,
            "range": "± 1797",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1831,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 356,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 426,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 155012,
            "range": "± 593",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47762281,
            "range": "± 1312329",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138430517,
            "range": "± 1344508",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165552042,
            "range": "± 559602",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 358603187,
            "range": "± 2325877",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187663885,
            "range": "± 1101542",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 74420508,
            "range": "± 1233925",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 256789361,
            "range": "± 1978684",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 332935,
            "range": "± 2638",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6274,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 359501,
            "range": "± 1134",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 709109,
            "range": "± 2453",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346502,
            "range": "± 871",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2057,
            "range": "± 13",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 359068,
            "range": "± 1272",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7151725441,
            "range": "± 20536898",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1709144,
            "range": "± 9761",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2616679,
            "range": "± 9551",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17644,
            "range": "± 67",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "92d08db37f14b22e791ed1540214a45a0e03e418",
          "message": "Remove unnecessary ordered-float (#1461)",
          "timestamp": "2023-03-01T17:26:48+01:00",
          "tree_id": "781bc19fd269ac61cf9c661370f675863507f805",
          "url": "https://github.com/rerun-io/rerun/commit/92d08db37f14b22e791ed1540214a45a0e03e418"
        },
        "date": 1677688601948,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 565590,
            "range": "± 3160",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1819,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 355,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 424,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 153611,
            "range": "± 819",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46975075,
            "range": "± 1549554",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137348044,
            "range": "± 1515453",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 163579271,
            "range": "± 619404",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 354524564,
            "range": "± 2022974",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 186203921,
            "range": "± 1173369",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 73494342,
            "range": "± 1656911",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 255436305,
            "range": "± 2076627",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 333800,
            "range": "± 629",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6166,
            "range": "± 55",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 360170,
            "range": "± 1521",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 716384,
            "range": "± 3348",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351143,
            "range": "± 1105",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2079,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 352459,
            "range": "± 1490",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7136331896,
            "range": "± 38966448",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1687315,
            "range": "± 7694",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2700296,
            "range": "± 10304",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17507,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a3d10ee5366a5d872cfaae36a666d112852bab3b",
          "message": "Direct conversion to dynamic image from the non-classic Tensor (#1455)\n\n* Direct conversion to dynamic image from the non-classic Tensor",
          "timestamp": "2023-03-01T19:02:23+01:00",
          "tree_id": "74b3102c54251cc7f606e83d6931959f909c0eff",
          "url": "https://github.com/rerun-io/rerun/commit/a3d10ee5366a5d872cfaae36a666d112852bab3b"
        },
        "date": 1677694315427,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 553267,
            "range": "± 4443",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1823,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 355,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 422,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 151761,
            "range": "± 533",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47096666,
            "range": "± 828479",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125943959,
            "range": "± 1109786",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 154486864,
            "range": "± 922349",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 327088770,
            "range": "± 1633352",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177667377,
            "range": "± 1042238",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 65155445,
            "range": "± 1047841",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 239611758,
            "range": "± 1764209",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 332128,
            "range": "± 2246",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6214,
            "range": "± 41",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 349882,
            "range": "± 2322",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 718562,
            "range": "± 3867",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351651,
            "range": "± 2022",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2070,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356191,
            "range": "± 1253",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6092660403,
            "range": "± 16751890",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1736966,
            "range": "± 12473",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2675562,
            "range": "± 15064",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17282,
            "range": "± 118",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "630daca480b68119f6c8bb8c9c64c94cdda71cb3",
          "message": "Delete ClassicTensor and cleanup (#1456)\n\n* Delete ClassicTensor and cleanup",
          "timestamp": "2023-03-01T19:50:19+01:00",
          "tree_id": "4ca3cf848dff26f6a789e34b7fef72109fe8846f",
          "url": "https://github.com/rerun-io/rerun/commit/630daca480b68119f6c8bb8c9c64c94cdda71cb3"
        },
        "date": 1677697254865,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 572708,
            "range": "± 1987",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1850,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 355,
            "range": "± 28",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 425,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 153350,
            "range": "± 434",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48074443,
            "range": "± 1178733",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137081493,
            "range": "± 1274333",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 164257482,
            "range": "± 1114394",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 356788150,
            "range": "± 2084168",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 183310874,
            "range": "± 1372764",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 73090958,
            "range": "± 794819",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 253774441,
            "range": "± 1892722",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 335670,
            "range": "± 572",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6256,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 363526,
            "range": "± 1195",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 726451,
            "range": "± 1716",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 344645,
            "range": "± 762",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2085,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353934,
            "range": "± 665",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7042378969,
            "range": "± 24329913",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1776533,
            "range": "± 24285",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2650707,
            "range": "± 10575",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17511,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b07149139450f37c584d5fedfd7022f9724461e4",
          "message": "EditableAutoValue needs serde (#1465)",
          "timestamp": "2023-03-01T21:15:13+01:00",
          "tree_id": "89f246c3ced321292630737de625cf33a3992156",
          "url": "https://github.com/rerun-io/rerun/commit/b07149139450f37c584d5fedfd7022f9724461e4"
        },
        "date": 1677702298805,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 559372,
            "range": "± 3186",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1837,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 356,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 425,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 151882,
            "range": "± 813",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49958959,
            "range": "± 859138",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 138434696,
            "range": "± 1297570",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 167076786,
            "range": "± 778230",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 358858469,
            "range": "± 1805178",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 189709653,
            "range": "± 1020173",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 75171676,
            "range": "± 1020993",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 260809841,
            "range": "± 1829083",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 336727,
            "range": "± 1406",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6287,
            "range": "± 34",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 370981,
            "range": "± 2105",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 724438,
            "range": "± 3262",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348879,
            "range": "± 2057",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2048,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356092,
            "range": "± 2129",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7046426269,
            "range": "± 20820189",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1751181,
            "range": "± 20960",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2650225,
            "range": "± 15555",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17539,
            "range": "± 155",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d35000d1b7967cc43d60e6178ef4fdb354c3606a",
          "message": "Switch pre-release action to ncipollo/release-action (#1466)",
          "timestamp": "2023-03-01T23:04:50+01:00",
          "tree_id": "c71d7235d7d015982384cacbc0998cd4bdc894d9",
          "url": "https://github.com/rerun-io/rerun/commit/d35000d1b7967cc43d60e6178ef4fdb354c3606a"
        },
        "date": 1677709016325,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 565810,
            "range": "± 1802",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1845,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 358,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 438,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 151578,
            "range": "± 626",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46703004,
            "range": "± 641023",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125123697,
            "range": "± 1094275",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 154550229,
            "range": "± 1377313",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 331488948,
            "range": "± 1535008",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 178751267,
            "range": "± 893046",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 65563832,
            "range": "± 715139",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 242265009,
            "range": "± 1370627",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 340048,
            "range": "± 1100",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6237,
            "range": "± 42",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 376618,
            "range": "± 1265",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 733693,
            "range": "± 2431",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348465,
            "range": "± 1658",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2050,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354056,
            "range": "± 1058",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6028081825,
            "range": "± 22001071",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1751056,
            "range": "± 16249",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2628583,
            "range": "± 15142",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17568,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "83d2a3518d9a8e9b66f66d65ad4ff4c23ea799dd",
          "message": "Use correct version of ncipollo/release-action (#1468)",
          "timestamp": "2023-03-01T18:18:54-05:00",
          "tree_id": "4c3a6985a18b31d7a4bf85f9839b75fec3dda349",
          "url": "https://github.com/rerun-io/rerun/commit/83d2a3518d9a8e9b66f66d65ad4ff4c23ea799dd"
        },
        "date": 1677713449974,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 550839,
            "range": "± 1525",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1836,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 355,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 425,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152389,
            "range": "± 373",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47372515,
            "range": "± 630596",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 124935945,
            "range": "± 1111718",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 155735095,
            "range": "± 830480",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 329452628,
            "range": "± 1403973",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177738848,
            "range": "± 772148",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 65932294,
            "range": "± 868436",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 241526260,
            "range": "± 1777000",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 336025,
            "range": "± 703",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6324,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 366676,
            "range": "± 1674",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 735929,
            "range": "± 2564",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 351146,
            "range": "± 4186",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2060,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 357323,
            "range": "± 1056",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6053105766,
            "range": "± 15291172",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1727372,
            "range": "± 11088",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2644070,
            "range": "± 15560",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17586,
            "range": "± 39",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "63c69837c0d58a3393ef90f1753fb4af4ca503ef",
          "message": "Speed up fixed-sized array iteration (#1050)\n\n* Add bench for vecs (which use FixedSizeVec)\r\n\r\n* Speed up fixed-sized array iteration\r\n\r\n* Cache the len for fastfixedsizelist\r\n\r\n* Use extern C to prevent into_iter from being used",
          "timestamp": "2023-03-02T09:01:37+01:00",
          "tree_id": "32916058ddcfd4a8601fa218dc39a714ef5b61d2",
          "url": "https://github.com/rerun-io/rerun/commit/63c69837c0d58a3393ef90f1753fb4af4ca503ef"
        },
        "date": 1677744851011,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 552316,
            "range": "± 2383",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1822,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 355,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 425,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152972,
            "range": "± 397",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 50439069,
            "range": "± 1406261",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 139364239,
            "range": "± 1352225",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165412326,
            "range": "± 1018263",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 358268137,
            "range": "± 2318907",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187647094,
            "range": "± 1105885",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 76576151,
            "range": "± 1193769",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 259760980,
            "range": "± 1955469",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 336340,
            "range": "± 556",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6326,
            "range": "± 16",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 373754,
            "range": "± 1448",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 730554,
            "range": "± 3057",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 345406,
            "range": "± 1700",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2084,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353760,
            "range": "± 1078",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7025517516,
            "range": "± 25787964",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1737304,
            "range": "± 20350",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2643718,
            "range": "± 6961",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16995,
            "range": "± 51",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42367,
            "range": "± 143",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 389510,
            "range": "± 722",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "faa65b693f40f43eedf3ec00024ef2a1c9c79668",
          "message": "do not silently drop draw phases (#1471)",
          "timestamp": "2023-03-02T09:56:19+01:00",
          "tree_id": "e7dcac91517b0e1b63b950ea71c64fcb746b016d",
          "url": "https://github.com/rerun-io/rerun/commit/faa65b693f40f43eedf3ec00024ef2a1c9c79668"
        },
        "date": 1677747992465,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 546522,
            "range": "± 6016",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1832,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 352,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 418,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152940,
            "range": "± 1060",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 47586294,
            "range": "± 1803936",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137128054,
            "range": "± 1407816",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165156671,
            "range": "± 2311742",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 354006940,
            "range": "± 2222288",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 185638456,
            "range": "± 1447142",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 75275630,
            "range": "± 1408539",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 258767710,
            "range": "± 2696231",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 332934,
            "range": "± 4152",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6259,
            "range": "± 76",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 365917,
            "range": "± 2121",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 721899,
            "range": "± 7037",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348234,
            "range": "± 2047",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2070,
            "range": "± 31",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353169,
            "range": "± 2418",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7095556160,
            "range": "± 28485389",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1687602,
            "range": "± 27587",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2613647,
            "range": "± 26271",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16786,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 41375,
            "range": "± 428",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 383927,
            "range": "± 5003",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "73187e07b88f6edfeb7326eaebad98cd73aa076f",
          "message": "re_renderer: implement depth cloud renderer (#1415)\n\n* implement depth cloud renderer\r\n\r\n* proper rp config\r\n\r\n* self-review\r\n\r\n* handle breaking changes from main\r\n\r\n* upload depth textures through staging belt\r\n\r\n* addressing PR comments part 1 of N\r\n\r\n* work around wgpu d16 web issue\r\n\r\n* addressing PR comments part 2 of N\r\n\r\n* big refactoring of the whole quad spanning story\r\n\r\n* accomodating breaking changes\r\n\r\n* bring back coverage\r\n\r\n* todos\r\n\r\n* procedural example\r\n\r\n* clean\r\n\r\n* fix wasm cranky",
          "timestamp": "2023-03-02T10:26:42+01:00",
          "tree_id": "a9d680661a57740911731108780ae4b8eaaf8a4f",
          "url": "https://github.com/rerun-io/rerun/commit/73187e07b88f6edfeb7326eaebad98cd73aa076f"
        },
        "date": 1677749887700,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 560247,
            "range": "± 2031",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1841,
            "range": "± 22",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 357,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 424,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 153176,
            "range": "± 149",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 51149717,
            "range": "± 835491",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 139577582,
            "range": "± 1569028",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166996309,
            "range": "± 2858912",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 360310936,
            "range": "± 4631474",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 188572611,
            "range": "± 1377545",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 75886037,
            "range": "± 1109843",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 261935766,
            "range": "± 2370954",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 336199,
            "range": "± 640",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6281,
            "range": "± 12",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 368824,
            "range": "± 2325",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 735561,
            "range": "± 4036",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349890,
            "range": "± 2502",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2060,
            "range": "± 92",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355728,
            "range": "± 1423",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7017466910,
            "range": "± 62888571",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1736115,
            "range": "± 13414",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2617350,
            "range": "± 10884",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 17063,
            "range": "± 30",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42561,
            "range": "± 153",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 388846,
            "range": "± 618",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "matthieu.pizenberg@gmail.com",
            "name": "Matthieu Pizenberg",
            "username": "mpizenberg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "27ccf7aa9d20d2216f222465cae57f48cf304057",
          "message": "Get rid of time 0.1.* dependency (#1408)\n\n* Remove chrono default features in depedencies\r\n\r\n* Replace chrono by time in re_log_types\r\n\r\n* Revert Cargo.lock update and remove polars overrid\r\n\r\n* Replace chrono by time in re_viewer\r\n\r\n* Remove unused function format_time\r\n\r\n* Temporary stash cargo config files\r\n\r\n* Restore cargo config files\r\n\r\n* Move time version to workspace config 1/2\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>\r\n\r\n* Move time version to workspace config 2/2\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>\r\n\r\n* Add tests for time formatting\r\n\r\n* clippy fix\r\n\r\n* format toml\r\n\r\n---------\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>",
          "timestamp": "2023-03-02T14:39:12+01:00",
          "tree_id": "5e7c36835e528ee5f4cf9b0fa3dd423a50ce491c",
          "url": "https://github.com/rerun-io/rerun/commit/27ccf7aa9d20d2216f222465cae57f48cf304057"
        },
        "date": 1677765018491,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 572417,
            "range": "± 1705",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1828,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 355,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 423,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 155153,
            "range": "± 672",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52766821,
            "range": "± 817784",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 139830284,
            "range": "± 2734156",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 169841919,
            "range": "± 1755351",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 362276052,
            "range": "± 4933543",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 190618495,
            "range": "± 1308837",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 75180121,
            "range": "± 1014538",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 262049645,
            "range": "± 2780372",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 332257,
            "range": "± 882",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6292,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 358344,
            "range": "± 1937",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 711620,
            "range": "± 3078",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349345,
            "range": "± 2363",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2111,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354342,
            "range": "± 1756",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7026368823,
            "range": "± 33261655",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1758564,
            "range": "± 18768",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2634514,
            "range": "± 12673",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16017,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42367,
            "range": "± 81",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 506169,
            "range": "± 857",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ded471b2e05c6190c3d04fb911c4a769e5da6b67",
          "message": "Use prerelease tag instead of latest and update pointer on prerelease (#1481)\n\n* Tag prereleases with prerelease tag, not latest\r\n\r\n* Update the prerelease tag to the sha where we build the prerelease",
          "timestamp": "2023-03-02T16:13:01+01:00",
          "tree_id": "93aa4018660156431fc09dd4d44fd9d58006d518",
          "url": "https://github.com/rerun-io/rerun/commit/ded471b2e05c6190c3d04fb911c4a769e5da6b67"
        },
        "date": 1677770605143,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 560153,
            "range": "± 2493",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1813,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 358,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 432,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152588,
            "range": "± 690",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49007145,
            "range": "± 428359",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125621023,
            "range": "± 945503",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 154906616,
            "range": "± 3041639",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 331984683,
            "range": "± 3924046",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 178070782,
            "range": "± 826853",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 65504074,
            "range": "± 916827",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 240400412,
            "range": "± 2178358",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 331360,
            "range": "± 534",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6208,
            "range": "± 15",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 358771,
            "range": "± 1082",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 711574,
            "range": "± 5239",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 346432,
            "range": "± 926",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2098,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351904,
            "range": "± 791",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6010499935,
            "range": "± 15452527",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1733052,
            "range": "± 12358",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2622047,
            "range": "± 19730",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16010,
            "range": "± 9",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 41815,
            "range": "± 142",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 505516,
            "range": "± 378",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a0fb0ca70c202d6ab2777ba3ee648de06efc895b",
          "message": "Github Action to prevent large files (#1478)\n\nAdd CI step to check for too-large files and lfs files\r\n\r\n---------\r\n\r\nCo-authored-by: Emil Ernerfeldt <emil.ernerfeldt@gmail.com>",
          "timestamp": "2023-03-02T16:37:06+01:00",
          "tree_id": "88a1fa830f16320c3b91d06fc656edaeef0cf93d",
          "url": "https://github.com/rerun-io/rerun/commit/a0fb0ca70c202d6ab2777ba3ee648de06efc895b"
        },
        "date": 1677772185850,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 564249,
            "range": "± 4210",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1819,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 358,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 425,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 153310,
            "range": "± 706",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 52568854,
            "range": "± 926249",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 137612222,
            "range": "± 1352913",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 167268801,
            "range": "± 1330200",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 356435522,
            "range": "± 1532350",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 190792695,
            "range": "± 1147469",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 74630080,
            "range": "± 1440190",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 264594093,
            "range": "± 1962100",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 334635,
            "range": "± 888",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6321,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 359055,
            "range": "± 2909",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 721966,
            "range": "± 5000",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 348045,
            "range": "± 989",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2106,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356364,
            "range": "± 2581",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7133946785,
            "range": "± 87417295",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1749226,
            "range": "± 36986",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2677925,
            "range": "± 11884",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16002,
            "range": "± 14",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 41883,
            "range": "± 111",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 506006,
            "range": "± 1402",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e269138e9e2b0c4130c37d0356beec2e0f5b3f85",
          "message": "Delete the prerelease before creating the new one (#1485)",
          "timestamp": "2023-03-02T19:53:29+01:00",
          "tree_id": "d89511482ce92e3e7b40eba604e4b7dbb9bb0a81",
          "url": "https://github.com/rerun-io/rerun/commit/e269138e9e2b0c4130c37d0356beec2e0f5b3f85"
        },
        "date": 1677783852816,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 567519,
            "range": "± 2076",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1845,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 356,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 424,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 153413,
            "range": "± 338",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 46588879,
            "range": "± 1693664",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 134835762,
            "range": "± 1239523",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166489423,
            "range": "± 930285",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 352950283,
            "range": "± 1518198",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187049495,
            "range": "± 985910",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70503236,
            "range": "± 1155819",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 255614342,
            "range": "± 1722233",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 332788,
            "range": "± 789",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6212,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 356270,
            "range": "± 2407",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 708418,
            "range": "± 2451",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 344241,
            "range": "± 922",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2078,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 354099,
            "range": "± 897",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6825324787,
            "range": "± 33113322",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1749524,
            "range": "± 11773",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2660679,
            "range": "± 14320",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16057,
            "range": "± 40",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42987,
            "range": "± 465",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 506980,
            "range": "± 1266",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "684a070f232ddc0fe78d814bdf755a24da906b16",
          "message": "Python SDK: Add strict mode (#1477)\n\n* Python SDK: Add a decorator to all out logging function to early-out\r\n\r\nThis replaces explicit checks with a decorator.\r\n\r\nThis decorator declaration preserves type information\r\nin Python 3.8 in my VSCode, which was a problem with previous attempts.\r\n\r\nIn a follow-up PR we can add a try-catch to the decorator to prevent\r\nerrors from bubbling up to the user.\r\n\r\n* Catch and log exceptions in log_decorator\r\n\r\n* Replace a few _send_warning with raise\r\n\r\n* Make strict-mode opt-in\r\n\r\n* Clean up scripts/lint.py\r\n\r\n* emil should learn to type and and spellcheck\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>\r\n\r\n* can we get automated spell checking of docstrings?\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>\r\n\r\n* surely there is a spell checker for python docstrings, right?\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>\r\n\r\n* not misuses - incorrect use\r\n\r\n---------\r\n\r\nCo-authored-by: Andreas Reich <andreas@rerun.io>",
          "timestamp": "2023-03-02T20:07:07+01:00",
          "tree_id": "06120173eaaf3777083387d5c5bd9de06fcc74df",
          "url": "https://github.com/rerun-io/rerun/commit/684a070f232ddc0fe78d814bdf755a24da906b16"
        },
        "date": 1677784656211,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 552596,
            "range": "± 2517",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1850,
            "range": "± 1",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 354,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 424,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 153209,
            "range": "± 344",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48546958,
            "range": "± 509338",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 126227211,
            "range": "± 1150414",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 154022496,
            "range": "± 1350284",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 328148141,
            "range": "± 1574409",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 177923468,
            "range": "± 951081",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 65106130,
            "range": "± 917812",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 241131322,
            "range": "± 2052348",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 332380,
            "range": "± 976",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6285,
            "range": "± 10",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 354912,
            "range": "± 933",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 713272,
            "range": "± 2399",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 345328,
            "range": "± 885",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2088,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355143,
            "range": "± 1540",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6059642661,
            "range": "± 278228563",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1711344,
            "range": "± 11509",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2661300,
            "range": "± 43139",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16032,
            "range": "± 26",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42228,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 506305,
            "range": "± 939",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e6b0093330faf6728a06dd16dca3b33a849c21a7",
          "message": "Include date in pre-release version (#1472)\n\n* Include date in pre-release version\r\n\r\n* format",
          "timestamp": "2023-03-02T23:34:08+01:00",
          "tree_id": "1134f99ce79a8b8d8c138eeef81367636708c23a",
          "url": "https://github.com/rerun-io/rerun/commit/e6b0093330faf6728a06dd16dca3b33a849c21a7"
        },
        "date": 1677797149588,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 551339,
            "range": "± 4401",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1811,
            "range": "± 8",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 354,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 419,
            "range": "± 4",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 149040,
            "range": "± 2277",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48607153,
            "range": "± 1666236",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135563855,
            "range": "± 1681485",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 166230330,
            "range": "± 1257439",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 356341383,
            "range": "± 2474946",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 185271778,
            "range": "± 1792388",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70904496,
            "range": "± 1103813",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 254429693,
            "range": "± 2415708",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 330002,
            "range": "± 3236",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6272,
            "range": "± 72",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 357173,
            "range": "± 2390",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 706366,
            "range": "± 8103",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 347617,
            "range": "± 2123",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2039,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 353375,
            "range": "± 1344",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6881435297,
            "range": "± 19787234",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1698411,
            "range": "± 23128",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2608831,
            "range": "± 24153",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15936,
            "range": "± 166",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 41717,
            "range": "± 295",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 505610,
            "range": "± 4832",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cb48497df6098429f3ccb54f9ec86a550ff2342b",
          "message": "Integrate depth clouds into Rerun (#1421)\n\n* implement depth cloud renderer\r\n\r\n* proper rp config\r\n\r\n* self-review\r\n\r\n* handle breaking changes from main\r\n\r\n* upload depth textures through staging belt\r\n\r\n* addressing PR comments part 1 of N\r\n\r\n* work around wgpu d16 web issue\r\n\r\n* addressing PR comments part 2 of N\r\n\r\n* big refactoring of the whole quad spanning story\r\n\r\n* accomodating breaking changes\r\n\r\n* bring back coverage\r\n\r\n* todos\r\n\r\n* procedural example\r\n\r\n* clean\r\n\r\n* fix wasm cranky\r\n\r\n* set up entity props & selection panel for backprojection\r\n\r\n* integrate depth clouds into rerun\r\n\r\n* last merge conflicts\r\n\r\n* huh, nasty\r\n\r\n* everything working as i want\r\n\r\n* cleanin up\r\n\r\n* self review\r\n\r\n* compute auto heuristics properly\r\n\r\n* gentle radius scale",
          "timestamp": "2023-03-03T11:23:50+01:00",
          "tree_id": "7710ca4a29c89fab0f4aeba36f81b58a30d361b4",
          "url": "https://github.com/rerun-io/rerun/commit/cb48497df6098429f3ccb54f9ec86a550ff2342b"
        },
        "date": 1677839766029,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 551075,
            "range": "± 4665",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1808,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 356,
            "range": "± 2",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 422,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 150240,
            "range": "± 2085",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49053814,
            "range": "± 2443665",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 136929232,
            "range": "± 1351940",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 167189745,
            "range": "± 997675",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 355925554,
            "range": "± 5163442",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187054410,
            "range": "± 1137135",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 71930702,
            "range": "± 1607760",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 266507009,
            "range": "± 3993786",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 334203,
            "range": "± 587",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6249,
            "range": "± 17",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 369439,
            "range": "± 1707",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 724084,
            "range": "± 12310",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 357228,
            "range": "± 1481",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2107,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351783,
            "range": "± 2166",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7256577931,
            "range": "± 40153605",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1777555,
            "range": "± 19146",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2625185,
            "range": "± 12291",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16024,
            "range": "± 157",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 41636,
            "range": "± 305",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 505694,
            "range": "± 828",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "042240e49f8b4bd7823ae0e086a72491fc6c2132",
          "message": "re_renderer: Arrow buffers as (optional) first-class citizen (#1482)\n\n* implement depth cloud renderer\r\n\r\n* proper rp config\r\n\r\n* self-review\r\n\r\n* handle breaking changes from main\r\n\r\n* upload depth textures through staging belt\r\n\r\n* addressing PR comments part 1 of N\r\n\r\n* work around wgpu d16 web issue\r\n\r\n* addressing PR comments part 2 of N\r\n\r\n* big refactoring of the whole quad spanning story\r\n\r\n* accomodating breaking changes\r\n\r\n* bring back coverage\r\n\r\n* todos\r\n\r\n* procedural example\r\n\r\n* clean\r\n\r\n* fix wasm cranky\r\n\r\n* set up entity props & selection panel for backprojection\r\n\r\n* integrate depth clouds into rerun\r\n\r\n* last merge conflicts\r\n\r\n* huh, nasty\r\n\r\n* everything working as i want\r\n\r\n* cleanin up\r\n\r\n* self review\r\n\r\n* arrow as a first-class citizen\r\n\r\n* compute auto heuristics properly\r\n\r\n* gentle radius scale\r\n\r\n* explicitly enable arrow for re_viewer",
          "timestamp": "2023-03-03T11:57:44+01:00",
          "tree_id": "0cf2d77da984a24ea03ebf24d14136fb1ce94bcc",
          "url": "https://github.com/rerun-io/rerun/commit/042240e49f8b4bd7823ae0e086a72491fc6c2132"
        },
        "date": 1677841714729,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 535325,
            "range": "± 8175",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1798,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 346,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 425,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 146994,
            "range": "± 2146",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44338774,
            "range": "± 1578010",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 132149687,
            "range": "± 1917376",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 168587948,
            "range": "± 2309499",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 354260027,
            "range": "± 3645159",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 183555336,
            "range": "± 2600001",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70359425,
            "range": "± 1293964",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 249807350,
            "range": "± 3363403",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 319531,
            "range": "± 4260",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5944,
            "range": "± 82",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 348286,
            "range": "± 3586",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 681749,
            "range": "± 6844",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 345234,
            "range": "± 3423",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 1985,
            "range": "± 32",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 350955,
            "range": "± 3029",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 7019332677,
            "range": "± 20357376",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1652387,
            "range": "± 31493",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2555820,
            "range": "± 25746",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15423,
            "range": "± 182",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 40901,
            "range": "± 434",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 485801,
            "range": "± 8610",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "15b04f76411f528a82bb7f74a5bf28dcac4c1fd5",
          "message": "CPU & GPU color maps (#1484)\n\n* implement depth cloud renderer\r\n\r\n* self-review\r\n\r\n* set up entity props & selection panel for backprojection\r\n\r\n* integrate depth clouds into rerun\r\n\r\n* added matplotlib colormaps\r\n\r\n* added turbo colormap\r\n\r\n* mirror everything\r\n\r\n* remove previous ones (especially LUT based ones)\r\n\r\n* no need for that\r\n\r\n* multiverse shenanigans\r\n\r\n* forgot to push this\r\n\r\n* simd everywhere\r\n\r\n* more docs, and saturation",
          "timestamp": "2023-03-03T12:16:20+01:00",
          "tree_id": "fe089dcf6e12878c2acff7214005c0eb46788253",
          "url": "https://github.com/rerun-io/rerun/commit/15b04f76411f528a82bb7f74a5bf28dcac4c1fd5"
        },
        "date": 1677842827756,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 552675,
            "range": "± 5415",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1791,
            "range": "± 44",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 352,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 414,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 148148,
            "range": "± 2126",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48540804,
            "range": "± 1639182",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 133700897,
            "range": "± 1448998",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165762094,
            "range": "± 665203",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 349625763,
            "range": "± 12697724",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 183407635,
            "range": "± 1894892",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 69609347,
            "range": "± 1265075",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 257745935,
            "range": "± 5186250",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 332244,
            "range": "± 2442",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6176,
            "range": "± 56",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 355780,
            "range": "± 3017",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 714285,
            "range": "± 4300",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 350097,
            "range": "± 1699",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2038,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 356988,
            "range": "± 1520",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6914333583,
            "range": "± 18078496",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1736962,
            "range": "± 19831",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2681488,
            "range": "± 115599",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16002,
            "range": "± 21",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 42002,
            "range": "± 237",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 506297,
            "range": "± 945",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jeremy@rerun.io",
            "name": "Jeremy Leibs",
            "username": "jleibs"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a73bfc8fef62c649662e38c46ee8892550a4bac",
          "message": "Switch release action to ncipollo (#1489)",
          "timestamp": "2023-03-03T14:25:20+01:00",
          "tree_id": "20724f1526efcd3512925b4df4e953177ddedaa2",
          "url": "https://github.com/rerun-io/rerun/commit/2a73bfc8fef62c649662e38c46ee8892550a4bac"
        },
        "date": 1677850654968,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 565168,
            "range": "± 1877",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1804,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 355,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 428,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152456,
            "range": "± 814",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 49064975,
            "range": "± 806644",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 135449236,
            "range": "± 1159893",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 165556376,
            "range": "± 647784",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 353700751,
            "range": "± 1912123",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 187230488,
            "range": "± 976768",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 71706122,
            "range": "± 955326",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 258693886,
            "range": "± 2438180",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 332332,
            "range": "± 558",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6258,
            "range": "± 20",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 357649,
            "range": "± 583",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 712625,
            "range": "± 1627",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 349032,
            "range": "± 504",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2068,
            "range": "± 7",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355541,
            "range": "± 982",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6972401497,
            "range": "± 39579228",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1774283,
            "range": "± 9050",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2680902,
            "range": "± 8792",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16104,
            "range": "± 19",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 41778,
            "range": "± 84",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 506173,
            "range": "± 389",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "cr.rey.clement@gmail.com",
            "name": "Clement Rey",
            "username": "teh-cmc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b64a438476aef4df9dcd735c134a984e6ab9c183",
          "message": "Integrate GPU color maps into depth clouds  (#1486)\n\n* integrate color maps into depth clouds\r\n\r\n* clean mess\r\n\r\n* pad",
          "timestamp": "2023-03-03T15:59:06+01:00",
          "tree_id": "9cd6e01a3e513888bc6953fde504a685251c4a57",
          "url": "https://github.com/rerun-io/rerun/commit/b64a438476aef4df9dcd735c134a984e6ab9c183"
        },
        "date": 1677856193345,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 536865,
            "range": "± 6681",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1753,
            "range": "± 33",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 351,
            "range": "± 3",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 409,
            "range": "± 6",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 147141,
            "range": "± 2044",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44677730,
            "range": "± 2185080",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 132935163,
            "range": "± 2315847",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 157698141,
            "range": "± 2074223",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 340888429,
            "range": "± 15071023",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 178099690,
            "range": "± 1980460",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 69823066,
            "range": "± 1286453",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 250054987,
            "range": "± 4888657",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 330663,
            "range": "± 4384",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6089,
            "range": "± 95",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 351095,
            "range": "± 1957",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 698518,
            "range": "± 4328",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 345064,
            "range": "± 2016",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2026,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 351978,
            "range": "± 3413",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6940741020,
            "range": "± 26143715",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1706588,
            "range": "± 37725",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2623148,
            "range": "± 22440",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15408,
            "range": "± 218",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 41986,
            "range": "± 521",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 505953,
            "range": "± 2479",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "committer": {
            "email": "emil.ernerfeldt@gmail.com",
            "name": "Emil Ernerfeldt",
            "username": "emilk"
          },
          "distinct": true,
          "id": "79046e6af74e8e2048fbdb96292f0b87d126a422",
          "message": "Update and improve the release instructions",
          "timestamp": "2023-03-03T16:18:53+01:00",
          "tree_id": "863ff3e52d1b7ae7cb3091bc29b617b0f68fbe0e",
          "url": "https://github.com/rerun-io/rerun/commit/79046e6af74e8e2048fbdb96292f0b87d126a422"
        },
        "date": 1677857389561,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 556287,
            "range": "± 10867",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1783,
            "range": "± 27",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 345,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 408,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 145590,
            "range": "± 2083",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 44638055,
            "range": "± 1881915",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 133480920,
            "range": "± 1636856",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 161181270,
            "range": "± 1501628",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 340715793,
            "range": "± 2982374",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 179919016,
            "range": "± 2891073",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 70316262,
            "range": "± 1609214",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 247424458,
            "range": "± 3074678",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 316527,
            "range": "± 4570",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 5889,
            "range": "± 65",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 345723,
            "range": "± 2991",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 681417,
            "range": "± 7186",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 341532,
            "range": "± 2782",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2005,
            "range": "± 37",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 346013,
            "range": "± 2933",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6947340465,
            "range": "± 28054229",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1707084,
            "range": "± 31660",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2628468,
            "range": "± 26568",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 15347,
            "range": "± 241",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 41183,
            "range": "± 428",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 482054,
            "range": "± 5900",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 33,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andreas@rerun.io",
            "name": "Andreas Reich",
            "username": "Wumpf"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c8a931c95c528f68a402aabb66b621b0cafba59a",
          "message": "[ci] Separate mac wheels & trigger wheel build from ui (#1499)\n\n* remove need for build wheel tags, use ui trigger instead\r\n\r\n* No more universal wheels for mac\r\n\r\n\r\nCo-authored-by: Jeremy Leibs <jeremy@rerun.io>",
          "timestamp": "2023-03-03T17:12:01+01:00",
          "tree_id": "f5936b8741972010725588a9f0b45d8b0b6e4f04",
          "url": "https://github.com/rerun-io/rerun/commit/c8a931c95c528f68a402aabb66b621b0cafba59a"
        },
        "date": 1677860647948,
        "tool": "cargo",
        "benches": [
          {
            "name": "datastore/insert/batch/rects/insert",
            "value": 565529,
            "range": "± 2189",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/batch/rects/query",
            "value": 1833,
            "range": "± 5",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/primary",
            "value": 356,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/latest_at/missing_components/secondaries",
            "value": 424,
            "range": "± 0",
            "unit": "ns/iter"
          },
          {
            "name": "datastore/range/batch/rects/query",
            "value": 152656,
            "range": "± 627",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_message_bundles",
            "value": 48058250,
            "range": "± 411671",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/generate_messages",
            "value": 125769998,
            "range": "± 1205643",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_log_msg",
            "value": 157362480,
            "range": "± 1417848",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/encode_total",
            "value": 331361125,
            "range": "± 1332894",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_log_msg",
            "value": 178985967,
            "range": "± 865391",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_message_bundles",
            "value": 65595472,
            "range": "± 671586",
            "unit": "ns/iter"
          },
          {
            "name": "mono_points_arrow/decode_total",
            "value": 241102945,
            "range": "± 1554763",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_message_bundles",
            "value": 333078,
            "range": "± 1433",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/generate_messages",
            "value": 6181,
            "range": "± 23",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_log_msg",
            "value": 360606,
            "range": "± 1086",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/encode_total",
            "value": 714040,
            "range": "± 2067",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_log_msg",
            "value": 353200,
            "range": "± 2681",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_message_bundles",
            "value": 2067,
            "range": "± 11",
            "unit": "ns/iter"
          },
          {
            "name": "batch_points_arrow/decode_total",
            "value": 355475,
            "range": "± 1187",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/insert",
            "value": 6061292926,
            "range": "± 21327264",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_mono_points/query",
            "value": 1710435,
            "range": "± 15387",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/insert",
            "value": 2722927,
            "range": "± 21584",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_points/query",
            "value": 16004,
            "range": "± 29",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/insert",
            "value": 41956,
            "range": "± 624",
            "unit": "ns/iter"
          },
          {
            "name": "arrow_batch_vecs/query",
            "value": 505852,
            "range": "± 492",
            "unit": "ns/iter"
          },
          {
            "name": "tuid/Tuid::random",
            "value": 34,
            "range": "± 0",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}