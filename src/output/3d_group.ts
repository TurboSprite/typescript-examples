import {Scene} from 'spritejs';
import {Cube, Sphere, Group3d, shaders, Layer3d} from 'sprite-extend-3d';

const container = document.getElementById('stage');
const scene = new Scene({
  container,
  displayRatio: 2,
});

const layer = scene.layer3d('fglayer', {
  camera: {
    fov: 35,
    pos: [5, 3, 6],
  },
}) as Layer3d;

layer.camera.lookAt([0, -0.5, 0]);

const program = layer.createProgram({
  ...shaders.NORMAL,
  cullFace: null,
});

const s1 = new Sphere(program, {
  phiLength: Math.PI, // 半球
  x: -1,
  rotateY: -90,
});

const s2 = s1.cloneNode();
s2.attr({
  x: 1,
  rotateY: 90,
});

const c = new Cube(program, {
  rotateY: 45,
  scale: 0.5,
});

const group = new Group3d();

group.append(s1, s2, c);

layer.append(group);

group.animate([
  {rotateY: 0},
  {rotateY: 360},
], {
  duration: 19000,
  iterations: Infinity,
});

c.animate([
  {rotateY: 0},
  {rotateY: 360},
], {
  duration: 11000,
  iterations: Infinity,
});
