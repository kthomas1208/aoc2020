function processor(input1, input2) {
  const wire1 = input1.split(",");
  const wire2 = input2.split(",");

  let wire1Path = [];
  let wire2Path = [];

  var traceWire = function(input, wirePath) {
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
  };

  traceWire(wire1, wire1Path);
  traceWire(wire2, wire2Path);
  // console.log(wire1Path);
  // console.log(wire2Path);

  let intersections = wire1Path.filter(a =>
    wire2Path.some(b => a.x === b.x && a.y === b.y)
  );
  let min = Number.MAX_VALUE;
  intersections.forEach(intersection => {
    min = Math.min(Math.abs(intersection.x) + Math.abs(intersection.y), min);
  });
  //console.log(min);
  return min;
}

module.exports = processor;
