/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Ground extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume3", "./Ground/costumes/costume3.svg", {
        x: 286.215155,
        y: -60.43183500000001
      }),
      new Costume("costume2", "./Ground/costumes/costume2.svg", {
        x: 313.215155,
        y: -27.431845000000067
      }),
      new Costume("costume5", "./Ground/costumes/costume5.svg", {
        x: 278.215155,
        y: -80.79916887621687
      }),
      new Costume("costume4", "./Ground/costumes/costume4.svg", {
        x: 295.215155,
        y: 17.083706957652993
      }),
      new Costume("costume6", "./Ground/costumes/costume6.svg", {
        x: 282.21513500000003,
        y: 15.749945000000025
      }),
      new Costume("costume7", "./Ground/costumes/costume7.svg", {
        x: 283.215145,
        y: -66.35422937690018
      }),
      new Costume("costume8", "./Ground/costumes/costume8.svg", {
        x: 283.215145,
        y: -86.35423574940614
      }),
      new Costume("costume9", "./Ground/costumes/costume9.svg", {
        x: 414.2151150000001,
        y: -4.794801056759496
      }),
      new Costume("costume10", "./Ground/costumes/costume10.svg", {
        x: 316.72622609196225,
        y: 105.76592262917146
      }),
      new Costume("costume11", "./Ground/costumes/costume11.svg", {
        x: 284.71664650150143,
        y: 289.953544570503
      }),
      new Costume("costume12", "./Ground/costumes/costume12.svg", {
        x: 288.72565400900896,
        y: 297.49562766960275
      }),
      new Costume("costume13", "./Ground/costumes/costume13.svg", {
        x: 288.72565400900896,
        y: 315.49562766960275
      }),
      new Costume("costume14", "./Ground/costumes/costume14.svg", {
        x: 364.215115,
        y: 297.49563
      }),
      new Costume("costume15", "./Ground/costumes/costume15.svg", {
        x: 289.72563500000007,
        y: 297.49563
      }),
      new Costume("costume16", "./Ground/costumes/costume16.svg", {
        x: 319.1918063921828,
        y: -25.79585506864251
      }),
      new Costume("costume17", "./Ground/costumes/costume17.svg", {
        x: 302.67121260321375,
        y: 200.65626043120994
      })
    ];

    this.sounds = [new Sound("pop", "./Ground/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      this.costume = this.stage.vars.level;
      yield;
    }
  }
}
