class Geometry {
  constructor() {
    this.rotation = 0;
    this.scaleX   = 1;
    this.scaleY   = 1;
    this.opacity    = 1;
    this.speed    = 0.1;
  }

  // OVERRIDE
  render() {}

  prepRender(style) {
    ctx.save();
    ctx.globalAlpha = this.opacity;
    ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
    ctx.rotate(this.rotation);
    ctx.scale(this.scaleX, this.scaleY);
    ctx.translate(-(this.x + this.width / 2), -(this.y + this.height / 2));
    ctx.beginPath();
    this.render();
    ctx[style]();
    ctx.restore();
  }

  fill() {
    this.prepRender('fill');
  }

  stroke() {
    this.prepRender('stroke');
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }

  rotate(angle) {
    this.rotation += angle / 180 * Math.PI;
  }

  scale(x, y) {
    this.scaleX += x;
    this.scaleY += (y == undefined ? x : y);
  }

  opacify(opacity) {
    this.opacity = opacity;
  }

  moveTo(x, y) {
    this.x = x;
    this.y = y;
  }

  rotateTo(angle) {
    this.rotation = angle / 180 * Math.PI;
  }

  scaleTo(x, y) {
    this.scaleX = x;
    this.scaleY = (y == undefined ? x : y);
  }

  opacifyTo(opacity) {
    this.opacity = opacity;
  }

  moveSmoothlyTo(x, y, speed = this.speed) {
    this.x = lerp(this.x, x, speed);
    this.y = lerp(this.y, y, speed);
  }

  rotateSmoothlyTo(angle, speed = this.speed) {
    this.rotation = lerp(this.rotation, angle / 180 * Math.PI, speed);
  }

  scaleSmoothlyTo(x, y_, speed = this.speed) {
    var y       = (y_ == undefined ? x : y_);

    this.scaleX = lerp(this.scaleX, x, speed);
    this.scaleY = lerp(this.scaleY, y, speed);
  }

  opacifySmoothlyTo(opacity, speed = this.speed) {
    this.opacity = lerp(this.opacity, opacity, speed);
  }
}
