function animate() {
  strokeWidth(4);
  strokeColor("#55a");
  fillColor("white");

  for(var i = 0; i < 10; i++) {
    fillCircle(window.innerWidth / 3, window.innerHeight / 2 - 80 * 5 + 80 * i - 15, 30);
    strokeCircle(window.innerWidth / 3, window.innerHeight / 2 - 80 * 5 + 80 * i - 15, 30);
  }

  for(var i = 0; i < 5; i++) {
    fillCircle(window.innerWidth / 3, window.innerHeight / 2 - 80 * 2.5 + 80 * i - 15, 30);
    strokeCircle(window.innerWidth / 3, window.innerHeight / 2 - 80 * 2.5 + 80 * i - 15, 30);
  }

  fillCircle(window.innerWidth / 3, window.innerHeight / 2 - 15, 30);
  strokeCircle(window.innerWidth / 3, window.innerHeight / 2 - 15, 30);
}
