function animate() {
  strokeWidth(4);
  strokeColor("#a00");
  fillColor("white");

  for(var i = 0; i < 10; i++) {
    for(var j = 0; j < 5; j++) {
      line(window.innerWidth / 4, window.innerHeight / 2 - 80 * 5 + 80 * i - 15, window.innerWidth / 4 * 2, window.innerHeight / 2 - 80 * 2.5 + 80 * j - 15);
      if(i == 0)
        line(window.innerWidth / 4 * 2, window.innerHeight / 2 - 80 * 2.5 + 80 * j - 15, window.innerWidth / 4 * 3, window.innerHeight / 2 - 15);
    }
  }

  strokeColor("#55a");

  for(var i = 0; i < 10; i++) {
    fillCircle(window.innerWidth / 4, window.innerHeight / 2 - 80 * 5 + 80 * i - 15, 30);
    strokeCircle(window.innerWidth / 4, window.innerHeight / 2 - 80 * 5 + 80 * i - 15, 30);
  }

  for(var i = 0; i < 5; i++) {
    fillCircle(window.innerWidth / 4 * 2, window.innerHeight / 2 - 80 * 2.5 + 80 * i - 15, 30);
    strokeCircle(window.innerWidth / 4 * 2, window.innerHeight / 2 - 80 * 2.5 + 80 * i - 15, 30);
  }

  fillCircle(window.innerWidth / 4 * 3, window.innerHeight / 2 - 15, 30);
  strokeCircle(window.innerWidth / 4 * 3, window.innerHeight / 2 - 15, 30);
}
