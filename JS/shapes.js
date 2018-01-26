function strokeRect(x, y, width, height) {
  ctx.strokeRect(x, y, width, height);
}

function fillRect(x, y, width, height) {
  ctx.fillRect(x, y, width, height);
}

function strokeCircle(cx, cy, r, sAngle = 0, eAngle = 2 * Math.PI) {
  ctx.beginPath();
  ctx.arc(cx, cy, r, sAngle, eAngle);
  ctx.stroke();
}

function fillCircle(cx, cy, r, sAngle = 0, eAngle = 2 * Math.PI) {
  ctx.beginPath();
  ctx.arc(cx, cy, r, sAngle, eAngle);
  ctx.fill();
}

function strokeEllipse(cx, cy, rx, ry, angle, sAngle = 0, eAngle = 2 * Math.PI) {
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx, ry, angle, sAngle, eAngle);
  ctx.stroke();
}

function fillEllipse(cx, cy, rx, ry, angle, sAngle = 0, eAngle = 2 * Math.PI) {
  ctx.beginPath();
  ctx.ellipse(cx, cy, rx, ry, angle, sAngle, eAngle);
  ctx.fill();
}

function line(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}
