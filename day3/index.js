function processor(input1, input2) {
  const wire1 = input1.split(',');
  const wire2 = input2.split(',');

  let wire1Path = [];
  let wire2Path = [];

  traceWire(wire1, wire1Path);
  traceWire(wire2, wire2Path);

  let wire2Set = new Set(wire2Path);
  let intersections = wire1Path.filter(a => wire2Set.has(a));

  let min = Number.MAX_VALUE;
  intersections.forEach(intersection => {
    let [x, y] = parsePoint(intersection);
    min = Math.min(Math.abs(x) + Math.abs(y), min);
  });

  return min;
}

function traceWire(input, wirePath) {
  let x = 0;
  let y = 0;
  input.forEach(path => {
    const direction = path.substring(0, 1);
    let distance = path.substring(1);

    if (direction === 'R') {
      for (var i = 0; i < distance; i++) {
        x++;
        wirePath.push([x, y].toString());
      }
    } else if (direction === 'L') {
      for (var i = 0; i < distance; i++) {
        x--;
        wirePath.push([x, y].toString());
      }
    } else if (direction === 'U') {
      for (var i = 0; i < distance; i++) {
        y++;
        wirePath.push([x, y].toString());
      }
    } else if (direction === 'D') {
      for (var i = 0; i < distance; i++) {
        y--;
        wirePath.push([x, y].toString());
      }
    }
  });
}

function processor2(input1, input2) {
  const wire1 = input1.split(',');
  const wire2 = input2.split(',');

  let wire1Path = [];
  let wire2Path = [];

  traceWire(wire1, wire1Path);
  traceWire(wire2, wire2Path);
  let wire2Set = new Set(wire2Path);

  let intersections = wire1Path.filter(a => wire2Set.has(a));

  const [firstx, firsty] = parsePoint(intersections[0]);

  let distance1 = 0;
  let distance2 = 0;
  for (let point of wire1Path) {
    let [x, y] = parsePoint(point);
    distance1++;
    if (x === firstx && y === firsty) {
      break;
    }
  }
  for (let point of wire2Path) {
    let [x, y] = parsePoint(point);
    distance2++;
    if (x === firstx && y === firsty) {
      break;
    }
  }

  return distance1 + distance2;
}

function parsePoint(point) {
  return point.split(',').map(p => Number(p));
}

module.exports = { processor, processor2 };
