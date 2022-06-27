/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Sprite1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Sprite1/costumes/costume1.svg", {
        x: 422.91865214623385,
        y: 241
      }),
      new Costume("costume2", "./Sprite1/costumes/costume2.svg", { x: 0, y: 0 })
    ];

    this.sounds = [new Sound("pop", "./Sprite1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.effects.ghost = 100;
      this.goto(0, 0);
      /* TODO: Implement looks_gotofrontback */ null;
      this.visible = true;
      yield;
    }
  }
}
