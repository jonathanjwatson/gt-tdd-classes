const Circle = require("../lib/Circle");

describe("Circle", () => {
  describe("Initialization", () => {
    it("should have a radius", () => {
      // ARRANGE
      const radius = 10;
      // ACT
      const circle = new Circle(radius);
      // ASSERT
      expect(circle.radius).toEqual(radius);
    });
    it("should have a diameter", () => {
      // ARRANGE
      const radius = 10;
      // ACT
      const circle = new Circle(radius);
      // ASSERT
      expect(circle.diameter).toEqual(radius * 2);
    });
    it("should have a circumference", () => {
      // ARRANGE
      const radius = 10;
      const circumference = 62.80;
      // ACT
      const circle = new Circle(radius);
      // ASSERT
      expect(circle.circumference).toEqual(circumference);
    });
    it("should have a perimeter", () => {
      // ARRANGE
      const radius = 10;
      const perimeter = 62.8;
      // ACT
      const circle = new Circle(radius);
      // ASSERT
      expect(circle.perimeter).toEqual(perimeter);
    });
    it("should have matching circumference and perimeter", () => {
      // ARRANGE
      const radius = 10;
      const perimeter = 62.8;
      const circumference = 62.8;
      // ACT
      const circle = new Circle(radius);
      // ASSERT
      expect(circle.perimeter).toEqual(perimeter);
      expect(circle.circumference).toEqual(circumference);
    });
    it("should have an area", () => {
      // ARRANGE
      const radius = 10;
      const area = radius * radius * 3.14;
      // ACT
      const circle = new Circle(radius);
      // ASSERT
      expect(circle.area).toEqual(area);
    });
  });
});
