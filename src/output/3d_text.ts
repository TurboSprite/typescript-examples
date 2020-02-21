import {Scene} from 'spritejs';
import {Plane, shaders, Layer3d} from 'sprite-extend-3d';
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  displayRatio: 2,
});
const layer = scene.layer3d('fglayer', {
  camera: {
    fov: 35,
  },
}) as Layer3d;

layer.camera.attributes.pos = [2, 2, 3];
layer.camera.lookAt([0, 1.5, 0]);

const texture = layer.createText('你好 SpriteJS 3D', {
  font: '48px Arial',
  fillColor: 'red',
});

const program = layer.createProgram({
  ...shaders.NORMAL_TEXTURE,
  texture,
  cullFace: null,
});
const label = new Plane(program, {
  width: 1,
  height: texture.image.height / texture.image.width,
});
label.animate([
  {rotateY: 0},
  {rotateY: 360},
], {
  duration: 20000,
  iterations: Infinity,
});
layer.append(label);
layer.setOrbit();