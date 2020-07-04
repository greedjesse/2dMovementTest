import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Wall extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Wall/costumes/costume1.svg", {
        x: 19.985714999999942,
        y: 19.985704999999996
      })
    ];

    this.sounds = [new Sound("pop", "./Wall/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];

    this.vars.index = 49;
    this.vars.x3 = [
      -240,
      -200,
      -160,
      -120,
      -80,
      -40,
      0,
      40,
      80,
      120,
      160,
      200,
      240,
      240,
      240,
      240,
      240,
      240,
      240,
      240,
      240,
      200,
      160,
      120,
      80,
      40,
      0,
      -40,
      -80,
      -120,
      -160,
      -200,
      -240,
      -240,
      -240,
      -240,
      -240,
      -240,
      -240,
      -240,
      -200,
      -120,
      -120,
      -160,
      40,
      80,
      120,
      160,
      0
    ];
    this.vars.y3 = [
      160,
      160,
      160,
      160,
      160,
      160,
      160,
      160,
      160,
      160,
      160,
      160,
      160,
      120,
      80,
      40,
      0,
      -40,
      -80,
      -120,
      -160,
      -160,
      -160,
      -160,
      -160,
      -160,
      -160,
      -160,
      -160,
      -160,
      -160,
      -160,
      -160,
      -120,
      -80,
      -40,
      0,
      40,
      80,
      120,
      120,
      40,
      0,
      -80,
      -120,
      120,
      80,
      -80,
      80
    ];
  }

  *whenGreenFlagClicked() {
    yield* this.createLevel();
  }

  *startAsClone() {
    this.visible = true;
    this.size = 100;
    this.goto(
      this.vars.x3[this.vars.index - 1],
      this.vars.y3[this.vars.index - 1]
    );
  }

  *createLevel() {
    this.vars.index = 0;
    for (let i = 0; i < this.vars.x3.length; i++) {
      this.vars.index += 1;
      this.createClone();
    }
  }
}
