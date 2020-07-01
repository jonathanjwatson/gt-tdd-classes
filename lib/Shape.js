class Shape{
    constructor(area, perimeter){
        this.area = area;
        this.perimeter = perimeter;
    }
    printInfo(){
        console.log("Area: ", this.area);
        console.log("Perimeter: ", this.perimeter);
    }
    generateText(){
        return `Area of the shape is ${this.area},
        While the perimeter is ${this.perimeter}`
    }
}
// Cannot use if we want to extend

// function Shape(area, perimeter) {
//   this.area = area;
//   this.perimeter = perimeter;
//   this.printInfo = function () {
//     console.log(this.area);
//     console.log(this.perimeter);
//   };
// }

module.exports = Shape;
