var APP_DATA = {
  "scenes": [
    {
      "id": "0-reception",
      "name": "Reception",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -0.09061975880981876,
        "pitch": 0.0041081840537167125,
        "fov": 1.6227327012180093
      },
      "linkHotspots": [
        {
          "yaw": -0.9637487013513955,
          "pitch": 0.09059427957607724,
          "rotation": 7.0685834705770345,
          "target": "1-aisle"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-aisle",
      "name": "Aisle",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "yaw": -1.2142595126646594,
        "pitch": 0,
        "fov": 1.6227327012180093
      },
      "linkHotspots": [
        {
          "yaw": -0.3588433027053881,
          "pitch": -0.017948304696878026,
          "rotation": 5.497787143782138,
          "target": "0-reception"
        },
        {
          "yaw": 2.8562886197006314,
          "pitch": -0.0980872638685728,
          "rotation": 6.283185307179586,
          "target": "2-employee-only"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6512951051678986,
          "pitch": -0.018348713379930714,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-employee-only",
      "name": "Employee Only",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.11409245907097088,
          "pitch": -0.135109625708278,
          "rotation": 4.71238898038469,
          "target": "0-reception"
        },
        {
          "yaw": -0.2531173474973478,
          "pitch": 0.6087462120177598,
          "rotation": 0,
          "target": "1-aisle"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
