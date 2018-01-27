class Rect extends Geometry {
  constructor(x, y, width, height) {
    super();
    this.x        = x;
    this.y        = y;
    this.width    = width;
    this.height   = height;
  }

  render() {
    ctx.rect(this.x, this.y, this.width, this.height);
  }
}

class Circle extends Geometry {
  constructor(cx, cy, r, sA = 0, eA = 2 * Math.PI) {
    super();
    this.x  = cx;
    this.y  = cy;
    this.r  = r;
    this.sA = sA;
    this.eA = eA;

    this.width  = 0;
    this.height = 0;
  }

  render() {
    ctx.arc(this.x, this.y, this.r, this.sA, this.eA);
  }
}

class Line extends Geometry {
  constructor(x1, y1, x2, y2) {
    super();
    this.x      = x1;
    this.y      = y1;
    this.x2     = x2;
    this.y2     = y2;
    this.width  = x2 - x1;
    this.height = y2 - y1;
  }

  render() {
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.width, this.y + this.height);
  }
}

class Text extends Geometry {
  constructor(text, x, y) {
    super();
    this.text   = text;
    this.x      = x;
    this.y      = y;
    this.width  = 0;
    this.height = 0;
  }

  render() {
    ctx.textBaseline = 'hanging';
    ctx.fillText(this.text, this.x, this.y);
  }
}
