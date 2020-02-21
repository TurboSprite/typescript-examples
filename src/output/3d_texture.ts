import {Scene} from 'spritejs';
import {Mesh3d, shaders, Layer3d} from 'sprite-extend-3d';
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  displayRatio: 2,
});
const layer = scene.layer3d('fglayer', {
  camera: {
    fov: 45,
    pos: [-2, 2, 2],
  },
  directionalLight: [0.5, 1.0, -0.3, 0.15],
}) as Layer3d;

const texture = layer.createTexture('https://p1.ssl.qhimg.com/t01b4bd0e2fb9f47550.jpg');
const program = layer.createProgram({
  ...shaders.NORMAL_TEXTURE,
  texture,
});

const model = layer.loadModel('https://s2.ssl.qhres.com/static/bf607b5f64a91492.json');
const macow = new Mesh3d(program, {model});
layer.append(macow);
layer.setOrbit({target: [0, 0.7, 0]});