/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./Player/costumes/costume2.svg", {
        x: 24.81524732533049,
        y: 25.904653973253403
      }),
      new Costume("costume3", "./Player/costumes/costume3.svg", {
        x: 24.815247325330517,
        y: 25.904653973253403
      })
    ];

    this.sounds = [new Sound("Meow", "./Player/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
    this.goto(-200, 0);
    this.stage.vars.speedY = 0;
    while (true) {
      this.stage.vars.speedY += -1;
      this.stage.vars.speedX = this.stage.vars.speedX * 0.8;
      this.y += this.stage.vars.speedY;
      yield* this.touchGround(this.stage.vars.speedY > 0);
      if (this.stage.vars.walljump > 0) {
        this.stage.vars.walljump += -1;
      } else {
        if (
          this.keyPressed("d") ||
          this.keyPressed("right arrow") ||
            (this.mouse.down && this.x < this.mouse.x)
        ) {
          this.stage.vars.speedX += 1.5;
          this.costume = "costume2";
        }
        if (
          this.keyPressed("a") ||
          this.keyPressed("left arrow") ||
            (this.mouse.down && this.mouse.x < this.x)
        ) {
          this.stage.vars.speedX += -1.5;
          this.costume = "costume3";
        }
      }
      if (this.stage.vars.falling < 3) {
        if (!this.touching(this.sprites["Lava"].andClones())) {
          if (
            (this.keyPressed("up arrow") ||
              (this.mouse.down && this.y < this.mouse.y)) &&
            6 < this.stage.vars.level
          ) {
            this.stage.vars.speedY = 18;
          } else {
            this.stage.vars.speedY = 15;
          }
        } else {
          null;
        }
      }
      if (this.stage.vars.speedX < -0.5) {
        yield* this.walk(5, this.stage.vars.speedX);
      } else {
        if (0.5 < this.stage.vars.speedX) {
          yield* this.walk(5, this.stage.vars.speedX);
        } else {
          null;
        }
      }
      yield;
    }
  }

  *touchGround(up) {
    this.stage.vars.falling += 1;
    while (!!this.touching(this.sprites["Ground"].andClones())) {
      if (up) {
        this.y += -1;
      } else {
        this.y += 1;
        this.stage.vars.falling = 0;
      }
      this.stage.vars.speedY = 0;
    }
  }

  *walk(x, speed) {
    this.x += speed;
    this.stage.vars.slope = 0;
    while (
      !(
        this.stage.vars.slope == 8 ||
        !this.touching(this.sprites["Ground"].andClones())
      )
    ) {
      this.y += 1;
      this.stage.vars.slope += 1;
    }
    if (this.stage.vars.slope == 8) {
      this.x += 0 - speed;
      this.y += 0 - this.stage.vars.slope;
      if (
        (this.keyPressed("w") ||
          this.keyPressed("up arrow") ||
            (this.mouse.down && this.y < this.mouse.y)) &&
        Math.abs(speed) > 3
      ) {
        if (this.stage.vars.walljump == 0) {
          this.stage.vars.speedX = -2 * speed;
          this.stage.vars.speedY = 11;
          this.stage.vars.falling = 6;
        } else {
          this.stage.vars.speedX = 0;
        }
      }
    }
  }

  *whenGreenFlagClicked2() {
    this.costume = "costume2";
    while (true) {
      if (this.keyPressed("r")) {
        this.stage.vars.falling = 0;
        this.stage.vars.speedY = 0;
        this.stage.vars.speedX = 0;
        this.stage.vars.walljump = 0;
        this.stage.vars.slope = 0;
        this.goto(-200, 0);
      }
      if (
        this.touching(this.sprites["Spikes"].andClones()) ||
        this.touching(this.sprites["Lava"].andClones())
      ) {
        for (let i = 0; i < 10; i++) {
          this.effects.ghost += 10;
          this.size += -5;
          yield;
        }
        this.stage.vars.falling = 0;
        this.stage.vars.speedY = 0;
        this.stage.vars.speedX = 0;
        this.stage.vars.walljump = 0;
        this.stage.vars.slope = 0;
        this.goto(-200, 0);
        for (let i = 0; i < 10; i++) {
          this.effects.ghost += -10;
          this.size += 5;
          yield;
        }
      } else {
        if (230 < this.x) {
          for (let i = 0; i < 10; i++) {
            this.effects.ghost += 10;
            this.size += -5;
            yield;
          }
          this.stage.vars.level += 1;
          this.stage.vars.falling = 0;
          this.stage.vars.speedY = 0;
          this.stage.vars.speedX = 0;
          this.stage.vars.walljump = 0;
          this.stage.vars.slope = 0;
          this.goto(-200, 0);
          for (let i = 0; i < 10; i++) {
            this.effects.ghost += -10;
            this.size += 5;
            yield;
          }
        }
      }
      yield;
    }
  }
}
