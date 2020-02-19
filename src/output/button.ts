import {Scene, Sprite, Label, Group} from 'spritejs';
const container = document.getElementById('stage');
const scene = new Scene({
  container,
  width: 1200,
  height: 1200,
});

const fglayer = scene.layer('fglayer');
const canvas = fglayer.canvas as HTMLCanvasElement;
canvas.style.backgroundColor = '#1EAC61';

const button = new Group();
button.attr({
  anchor: 0.5,
  pos: [600, 600],
});
fglayer.append(button);

const buttonNormal = new Label('Get Started');
buttonNormal.attr({
  anchor: 0.5,
  font: '40px "宋体"',
  fillColor: '#04773B',
  lineHeight: 96,
  textAlign: 'center',
  size: [320, 96],
  border: [4, '#178C4E'],
  borderRadius: 48,
});
button.append(buttonNormal);

const buttonHover = new Sprite();
buttonHover.attr({
  anchor: 0.5,
  bgcolor: '#208B50',
  height: 100,
  width: 96,
  opacity: 0,
  borderRadius: 48,
  zIndex: -1,
});
button.append(buttonHover);

/* eslint-disable no-console */
console.log('Place mouse hover the button...');
/* eslint-enable no-console */

let hoverAnim: spritejs.Animation|null = null;

let touched = false;
// prevent mouseenter on mobile device
// mobile point events: touchstart > (touchmove)+ > touchend > (mouseenter) > mouseover > mousemove > mousedown > mouseup > click
// https://patrickhlauke.github.io/touch/tests/results/
buttonNormal.addEventListener('mouseenter', async () => {
  if(touched) return;
  const canvas = fglayer.canvas as HTMLCanvasElement;
  canvas.style.cursor = 'pointer';
  buttonNormal.attr({
    fillColor: '#fff',
  });
  if(hoverAnim) {
    hoverAnim.cancel();
    hoverAnim = null;
  }
  hoverAnim = buttonHover.animate([
    {width: 96, opacity: 0},
    {width: 324, opacity: 1},
  ], {
    duration: 300,
    fill: 'forwards',
    easing: 'ease-in',
  });
  await hoverAnim.finished;
  hoverAnim = null;
});

buttonNormal.addEventListener('mouseleave', async () => {
  if(touched) return;
  const canvas = fglayer.canvas as HTMLCanvasElement;
  canvas.style.cursor = 'default';
  buttonNormal.attr({
    fillColor: '#04773B',
  });
  if(hoverAnim) {
    hoverAnim.cancel();
    hoverAnim = null;
  }
  hoverAnim = buttonHover.animate([
    {width: 324, opacity: 1},
    {width: 96, opacity: 0},
  ], {
    duration: 500,
    fill: 'forwards',
    easing: 'ease-out',
  });
  await hoverAnim.finished;
  hoverAnim = null;
});

buttonNormal.addEventListener('touchstart', () => {
  touched = true;
  if(hoverAnim) {
    hoverAnim.cancel();
    hoverAnim = null;
  }
  buttonNormal.attr({
    fillColor: '#fff',
  });
  buttonHover.attr({
    width: 324,
  });
});

buttonNormal.addEventListener('touchend', () => {
  if(hoverAnim) {
    hoverAnim.cancel();
    hoverAnim = null;
  }
  buttonNormal.attr({
    fillColor: '#04773B',
  });
  buttonHover.attr({
    width: 0,
  });
});

buttonNormal.addEventListener('mousedown', () => {
  button.attr({
    scale: 0.9,
  });
});

buttonNormal.addEventListener('mouseup', () => {
  button.attr({
    scale: 1.0,
  });
});

buttonNormal.addEventListener('click', () => {
  /* eslint-disable no-console */
  console.log('button clicked');
  /* eslint-enable no-console */
});