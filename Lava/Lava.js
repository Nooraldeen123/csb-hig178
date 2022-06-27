/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Lava extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./Lava/costumes/costume2.svg", { x: 0, y: 0 }),
      new Costume("costume6", "./Lava/costumes/costume6.svg", { x: 0, y: 0 }),
      new Costume("costume7", "./Lava/costumes/costume7.svg", { x: 0, y: 0 }),
      new Costume("costume3", "./Lava/costumes/costume3.svg", {
        x: 17,
        y: -40.91517500000003
      }),
      new Costume("costume9", "./Lava/costumes/costume9.svg", {
        x: 139,
        y: -63.915175000000005
      }),
      new Costume("costume4", "./Lava/costumes/costume4.svg", { x: 0, y: 0 }),
      new Costume("costume8", "./Lava/costumes/costume8.svg", { x: 0, y: 0 }),
      new Costume("costume5", "./Lava/costumes/costume5.svg", {
        x: 141,
        y: -114.91519500000004
      }),
      new Costume("costume10", "./Lava/costumes/costume10.svg", {
        x: 18.000000000000057,
        y: -18.62420146690124
      }),
      new Costume("costume11", "./Lava/costumes/costume11.svg", { x: 0, y: 0 }),
      new Costume("costume12", "./Lava/costumes/costume12.svg", { x: 0, y: 0 }),
      new Costume("costume13", "./Lava/costumes/costume13.svg", { x: 0, y: 0 }),
      new Costume("costume14", "./Lava/costumes/costume14.svg", {
        x: 192.5692215172414,
        y: -147.24508513793074
      }),
      new Costume("costume15", "./Lava/costumes/costume15.svg", { x: 0, y: 0 }),
      new Costume("costume16", "./Lava/costumes/costume16.svg", {
        x: 167.7686544827585,
        y: -74.82743368965527
      })
    ];

    this.sounds = [new Sound("pop", "./Lava/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 15);
    while (true) {
      this.costume = this.stage.vars.level;
      yield;
    }
  }

  *whenGreenFlagClicked2() {
    while (true) {
      this.y = Math.sin(this.scratchToRad(this.timer * 50)) * 10 - 0;
      yield;
    }
  }
}
