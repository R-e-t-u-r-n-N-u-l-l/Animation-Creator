var canvas, ctx;

onload = function() {
  canvas = document.getElementsByTagName("canvas")[0];
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx = canvas.getContext("2d");

  strokeColor("white");
  fillColor("white");
}
