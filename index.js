import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Player from "./Player/Player.js";
import Ground from "./Ground/Ground.js";
import Spikes from "./Spikes/Spikes.js";
import Lava from "./Lava/Lava.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Sprite6 from "./Sprite6/Sprite6.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Player: new Player({
    x: -200,
    y: -98,
    direction: 90,
    costumeNumber: 1,
    size: 110.07445002581792,
    visible: true
  }),
  Ground: new Ground({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 12,
    size: 100,
    visible: true
  }),
  Spikes: new Spikes({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 12,
    size: 100,
    visible: true
  }),
  Lava: new Lava({
    x: 0,
    y: -9.953121782,
    direction: 90,
    costumeNumber: 12,
    size: 100,
    visible: true
  }),
  Sprite1: new Sprite1({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true
  }),
  Sprite6: new Sprite6({
    x: 46,
    y: 14,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
