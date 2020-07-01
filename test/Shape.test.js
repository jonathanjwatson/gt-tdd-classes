const Shape = require("../lib/Shape");

describe("Shape class", () => {
    describe("Initialization", () => {
        it("should accept area as a parameter", () => {
            // Arrange
            const area = 15;
            const perimeter = 20;
            // Act
            const shape = new Shape(area, perimeter);
            // Assert
            expect(shape.area).toEqual(area);
        })
        it("should accept perimeter as a parameter", () => {
            // Arrange
            const area = 15;
            const perimeter = 20;
            // Act
            const shape = new Shape(area, perimeter);
            // Assert
            expect(shape.perimeter).toEqual(perimeter);
        })
    })
    describe("printInfo", () => {
        it("should call console.log", () => {
            // Arrange
            const mock = jest.spyOn(console, "log");
            mock.mockImplementation(() => {});
            // Act
            const shape = new Shape(7, 7);
            shape.printInfo();
            // Assert
            expect(mock).toHaveBeenCalled();
        })
    })
})