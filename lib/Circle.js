const Shape = require("./Shape");

class Circle extends Shape {
  constructor(radius) {
    let circumference = 2 * 3.14 * radius;
    circumference = circumference.toFixed(2);
    circumference = parseFloat(circumference);

    const area = radius * radius * 3.14;

    super(area, circumference);
    this.radius = radius;
    this.diameter = radius * 2;
    this.circumference = circumference;
  }
}

module.exports = Circle;
