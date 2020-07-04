import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Player from "./Player/Player.js";
import Wall from "./Wall/Wall.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Player: new Player({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Wall: new Wall({
    x: -200,
    y: 184,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;

/*function() {
    var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d');

    // Event handler to resize the canvas when the document view is changed
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

    // Redraw everything after resizing the window
    drawStuff(); 
}
resizeCanvas();*/