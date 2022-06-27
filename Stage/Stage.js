/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 255.0372679590456,
        y: 277.2508633984269
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 273,
        y: 274.12691
      }),
      new Costume("backdrop4", "./Stage/costumes/backdrop4.svg", {
        x: 273,
        y: 274.12691
      }),
      new Costume("backdrop3", "./Stage/costumes/backdrop3.svg", {
        x: 273,
        y: 274.12691
      }),
      new Costume("backdrop5", "./Stage/costumes/backdrop5.svg", {
        x: 273,
        y: 274.12691
      }),
      new Costume("backdrop6", "./Stage/costumes/backdrop6.svg", {
        x: 273,
        y: 274.12691
      }),
      new Costume("backdrop7", "./Stage/costumes/backdrop7.svg", {
        x: 273,
        y: 274.1269
      }),
      new Costume("backdrop8", "./Stage/costumes/backdrop8.svg", {
        x: 273,
        y: 274.1269
      }),
      new Costume("backdrop9", "./Stage/costumes/backdrop9.svg", {
        x: 273,
        y: 274.1269
      }),
      new Costume("backdrop10", "./Stage/costumes/backdrop10.svg", {
        x: 273,
        y: 274.1269
      }),
      new Costume("backdrop11", "./Stage/costumes/backdrop11.svg", {
        x: 297.03514800650663,
        y: 274.1269
      }),
      new Costume("backdrop12", "./Stage/costumes/backdrop12.svg", {
        x: 297.03514800650663,
        y: 274.1269
      }),
      new Costume("backdrop13", "./Stage/costumes/backdrop13.svg", {
        x: 297.03515,
        y: 274.1269
      }),
      new Costume("backdrop14", "./Stage/costumes/backdrop14.svg", {
        x: 297.03515,
        y: 274.1269
      }),
      new Costume("backdrop15", "./Stage/costumes/backdrop15.svg", {
        x: 273,
        y: 274.1269
      }),
      new Costume("backdrop16", "./Stage/costumes/backdrop16.svg", {
        x: 273,
        y: 274.1269
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.speedY = 15;
    this.vars.slope = 0;
    this.vars.falling = 0;
    this.vars.speedX = 0;
    this.vars.walljump = 0;
    this.vars.level = 12;
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.costume = this.vars.level;
      yield;
    }
  }
}
