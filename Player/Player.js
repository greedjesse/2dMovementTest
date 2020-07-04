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
      new Costume(" ", "./Player/costumes/ .svg", {
        x: 19.78571500000001,
        y: 19.785705000000007
      })
    ];

    this.sounds = [new Sound("Meow", "./Player/sounds/Meow.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.xv = 0;
    this.vars.yv = 0;
  }

  *whenGreenFlagClicked() {
    this.effects.clear();
    this.stage.vars.camX = 0;
    this.stage.vars.camY = 0;
    this.stage.vars.x = 0;
    this.stage.vars.y = 0;
    this.vars.xv = 0;
    this.vars.yv = 0;
    while (true) {
      this.effects.color += 1;
      yield* this.playerMovement(5);
      yield* this.goTo(this.stage.vars.x, this.stage.vars.y);
      yield;
    }
  }

  *goTo(x2, y2) {
    this.goto(x2 - this.stage.vars.camX, y2 - this.stage.vars.camY);
  }

  *tryMove(xv2, yv2) {
    yield* this.goTo(this.stage.vars.x + xv2, this.stage.vars.y);
    if (!this.touching(this.sprites["Wall"].andClones())) {
      this.stage.vars.x += xv2;
    }
    yield* this.goTo(this.stage.vars.x, this.stage.vars.y + yv2);
    if (!this.touching(this.sprites["Wall"].andClones())) {
      this.stage.vars.y += yv2;
    }
    yield* this.goTo(this.stage.vars.x, this.stage.vars.y);
    this.vars.xv = 0;
    this.vars.yv = 0;
  }

  *playerMovement(speed) {
    if (this.keyPressed("up arrow")) {
      this.vars.yv = speed;
    }
    if (this.keyPressed("down arrow")) {
      this.vars.yv = 0 - speed;
    }
    if (this.keyPressed("right arrow")) {
      this.vars.xv = speed;
    }
    if (this.keyPressed("left arrow")) {
      this.vars.xv = 0 - speed;
    }
    yield* this.tryMove(this.vars.xv, this.vars.yv);
  }
}
