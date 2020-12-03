function arrays() {
  let wirePath = [];
  let x = 0;
  let y = 0;

  wirePath.push([x, y].toString());
  x++;
  wirePath.push([x, y].toString());
  y++;
  wirePath.push([x, y].toString());
  wirePath.push([x, y].toString());

  console.log(wirePath);

  let wireSet = new Set(wirePath);
  console.log(wireSet);
}

arrays();
