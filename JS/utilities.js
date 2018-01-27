function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function fillColor(color) {
  ctx.fillStyle = color;
}

function strokeColor(color) {
  ctx.strokeStyle = color;
}

function strokeWidth(strokeWidth) {
  ctx.lineWidth = strokeWidth;
}

function lerp(from, to, percentage) {
  return (1 - percentage) * from + percentage * to;
}
