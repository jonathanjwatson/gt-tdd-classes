const inquirer = require("inquirer");
const fs = require("fs");
const Shape = require("./lib/Shape");

inquirer
  .prompt([
    {
      type: "input",
      name: "area",
      message: "What is the area of your shape?",
    },
    {
      type: "input",
      name: "perimeter",
      message: "What is the perimeter of your shape?",
    },
  ])
  .then((answers) => {
    // console.log(answers);
    const myShape = new Shape(answers.area, answers.perimeter);
    myShape.printInfo();
    // const text = myShape.generateText();
    // fs.writeFile("shape.txt", text, "utf8", (err) => {
    //   if (err) throw new Error(err);
    // });
  })
  .catch((err) => {
    console.log(err);
  });
