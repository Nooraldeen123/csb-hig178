/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Spikes extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./Spikes/costumes/costume2.svg", { x: 0, y: 0 }),
      new Costume("costume6", "./Spikes/costumes/costume6.svg", { x: 0, y: 0 }),
      new Costume("costume3", "./Spikes/costumes/costume3.svg", {
        x: 116.8093252162011,
        y: 5.283213175500464
      }),
      new Costume("costume7", "./Spikes/costumes/costume7.svg", { x: 0, y: 0 }),
      new Costume("costume4", "./Spikes/costumes/costume4.svg", {
        x: -142.44380757298705,
        y: 83.2651363944201
      }),
      new Costume("costume5", "./Spikes/costumes/costume5.svg", {
        x: 175.67360299181468,
        y: 26.28887465594235
      }),
      new Costume("costume9", "./Spikes/costumes/costume9.svg", {
        x: 144.1124312830999,
        y: 71.62133505645454
      }),
      new Costume("costume8", "./Spikes/costumes/costume8.svg", { x: 0, y: 0 }),
      new Costume("costume10", "./Spikes/costumes/costume10.svg", {
        x: 171.27397564389656,
        y: 88.10101945188262
      }),
      new Costume("costume11", "./Spikes/costumes/costume11.svg", {
        x: 0,
        y: 0
      }),
      new Costume("costume12", "./Spikes/costumes/costume12.svg", {
        x: 123.1174164343206,
        y: 147.02698936012047
      }),
      new Costume("costume13", "./Spikes/costumes/costume13.svg", {
        x: 162.6656946264406,
        y: 40.43034475634025
      }),
      new Costume("costume14", "./Spikes/costumes/costume14.svg", {
        x: 0,
        y: 0
      }),
      new Costume("costume15", "./Spikes/costumes/costume15.svg", {
        x: 139.63393140885444,
        y: -42.16219895825719
      })
    ];

    this.sounds = [new Sound("pop", "./Spikes/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.stage.vars.level = 1;
    while (true) {
      this.costume = this.stage.vars.level;
      yield;
    }
  }
}
