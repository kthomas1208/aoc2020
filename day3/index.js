function processor(input1, input2) {
  const wire1 = input1.split(",");
  const wire2 = input2.split(",");

  let wire1Path = [];
  let wire2Path = [];

  traceWire(wire1, wire1Path);
  traceWire(wire2, wire2Path);

  let intersections = wire1Path.filter(a =>
    wire2Path.some(b => a.x === b.x && a.y === b.y)
  );
  let min = Number.MAX_VALUE;
  intersections.forEach(intersection => {
    min = Math.min(Math.abs(intersection.x) + Math.abs(intersection.y), min);
  });

  return min;
}

function traceWire(input, wirePath) {
  let x = 0;
  let y = 0;
  input.forEach(path => {
    const direction = path.substring(0, 1);
    let distance = path.substring(1);

    if (direction === "R") {
      for (var i = 0; i < distance; i++) {
        x++;
        wirePath.push({ x, y });
      }
    } else if (direction === "L") {
      for (var i = 0; i < distance; i++) {
        x--;
        wirePath.push({ x, y });
      }
    } else if (direction === "U") {
      for (var i = 0; i < distance; i++) {
        y++;
        wirePath.push({ x, y });
      }
    } else if (direction === "D") {
      for (var i = 0; i < distance; i++) {
        y--;
        wirePath.push({ x, y });
      }
    }
  });
}

function processor2(input1, input2) {
  const wire1 = input1.split(",");
  const wire2 = input2.split(",");

  let wire1Path = [];
  let wire2Path = [];

  traceWire(wire1, wire1Path);
  traceWire(wire2, wire2Path);

  let intersections = wire1Path.filter(a =>
    wire2Path.some(b => a.x === b.x && a.y === b.y)
  );

  console.log(intersections);

  const first = intersections[0];

  let distance1 = 0;
  let distance2 = 0;
  for (let point in wire1Path) {
    if (point.x === first.x && point.y === first.y) {
      console.log(distance1);
      break;
    } else {
      distance1++;
    }
  }
  for (let point in wire2Path) {
    if (point.x === first.x && point.y === first.y) {
      console.log(distance2);
      break;
    } else {
      distance2++;
    }
  }

  return distance1 + distance2;
}

module.exports = { processor, processor2 };
