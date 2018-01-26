function delay(ms) {
  cancelAnimationFrame();
  setTimeout(function() {
    requestAnimationFrame(update);
  }, ms);
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
