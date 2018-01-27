async function animate() {
  strokeWidth(4);
  strokeColor("#55a");
  fillColor("white");

  await delay(200);

  for(var i = 0; i < 10; i++) {
    await delay(50);
    fillCircle(window.innerWidth / 4, window.innerHeight / 2 - 80 * 5 + 80 * i - 15, 30);
    strokeCircle(window.innerWidth / 4, window.innerHeight / 2 - 80 * 5 + 80 * i - 15, 30);
  }

  await delay(200);

  for(var j = 0; j < 5; j++) {
      await delay(50);
      fillCircle(window.innerWidth / 4 * 2, window.innerHeight / 2 - 80 * 2.5 + 80 * j - 15, 30);
      strokeCircle(window.innerWidth / 4 * 2, window.innerHeight / 2 - 80 * 2.5 + 80 * j - 15, 30);
  }

  await delay(200);

  fillCircle(window.innerWidth / 4 * 3, window.innerHeight / 2 - 15, 30);
  strokeCircle(window.innerWidth / 4 * 3, window.innerHeight / 2 - 15, 30);

  await delay(200);

  for(var j = 0; j < 5; j++) {
      await delay(60);
      strokeColor("#a00");
      line(window.innerWidth / 4 * 2, window.innerHeight / 2 - 80 * 2.5 + 80 * j - 15, window.innerWidth / 4 * 3, window.innerHeight / 2 - 15);
      strokeColor("#55a");
      fillCircle(window.innerWidth / 4 * 3, window.innerHeight / 2 - 15, 30);
      strokeCircle(window.innerWidth / 4 * 3, window.innerHeight / 2 - 15, 30);
      fillCircle(window.innerWidth / 4 * 2, window.innerHeight / 2 - 80 * 2.5 + 80 * j - 15, 30);
      strokeCircle(window.innerWidth / 4 * 2, window.innerHeight / 2 - 80 * 2.5 + 80 * j - 15, 30);
  }

  for(var i = 0; i < 10; i++) {
    await delay(100);
    for(var j = 0; j < 5; j++) {
      await delay(40);
      strokeColor("#a00");
      line(window.innerWidth / 4, window.innerHeight / 2 - 80 * 5 + 80 * i - 15, window.innerWidth / 4 * 2, window.innerHeight / 2 - 80 * 2.5 + 80 * j - 15);

      strokeColor("#55a");
      fillCircle(window.innerWidth / 4, window.innerHeight / 2 - 80 * 5 + 80 * i - 15, 30);
      strokeCircle(window.innerWidth / 4, window.innerHeight / 2 - 80 * 5 + 80 * i - 15, 30);
      fillCircle(window.innerWidth / 4 * 2, window.innerHeight / 2 - 80 * 2.5 + 80 * j - 15, 30);
      strokeCircle(window.innerWidth / 4 * 2, window.innerHeight / 2 - 80 * 2.5 + 80 * j - 15, 30);
    }
  }
}
