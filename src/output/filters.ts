import {Scene, Sprite, Label} from 'spritejs';
(async function () {
  const container = document.getElementById('stage');
  const scene = new Scene({
    container,
    width: 1600,
    height: 1200,
    mode: 'stickyWidth',
    // contextType: '2d',
  });

  const layer = scene.layer();
  (layer.canvas as HTMLCanvasElement).style.backgroundColor = '#f4f2e6';

  await scene.preload([
    'https://p3.ssl.qhimg.com/t010ded517024020e10.png',
    'https://s1.ssl.qhres.com/static/6ead70a354da7aa4.json',
  ]);

  const generateSpriteWithFilter = (filter: string, labelText: string, pos: Array<number>) => {
    const guanguan = new Sprite();
    guanguan.attr({
      size: [270, 340],
      texture: 'guanguan1s.png',
      textureRect: [50, 40, 180, 220],
      filter,
      anchor: 0.5,
      pos,
    });
    layer.append(guanguan);

    const label = new Label(labelText);
    label.attr({
      font: 'bold 30px "Arial"',
      fillColor: '#474534',
      anchor: 0.5,
      pos: [pos[0], pos[1] + 120],
    });
    layer.append(label);
  };

  // same filter as in css3
  generateSpriteWithFilter('drop-shadow(2px, 2px, 10px, #FF6040)', 'dropShadow', [200, 500]);
  generateSpriteWithFilter('blur(4px)', 'blur', [500, 500]);
  generateSpriteWithFilter('brightness(50%)', 'birghtness', [800, 500]);
  generateSpriteWithFilter('contrast(200%)', 'contrast', [1100, 500]);
  generateSpriteWithFilter('grayscale(100%)', 'grayscale', [1400, 500]);
  generateSpriteWithFilter('hue-rotate(90deg)', 'hueRotate', [200, 840]);
  generateSpriteWithFilter('invert(75%)', 'brightness', [500, 840]);
  generateSpriteWithFilter('opacity(0.25)', 'opacity', [800, 840]);
  generateSpriteWithFilter('saturate(30%)', 'saturate', [1100, 840]);
  generateSpriteWithFilter('sepia(100%)', 'sepia', [1400, 840]);
}());