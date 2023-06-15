const inquirer = require('inquirer');
const fs = require('fs');
const validateColor = require('validate-color').default;
const createSVG = require('./lib/shapes');
const fileName = 'logo.svg';

//array of questions for inquirer
const questions = [
    {
        type: 'input',
        message: "Please enter up to 3 characters",
        name: 'text',
        default: 'SVG',
        validate: function (answer) {
            if (answer.length > 3) {
                return console.log("Only 3 characters please.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What color do you want your text to be?",
        name: 'textColor',
        default: 'black',
        validate: function (answer) {
            if (!validateColor(answer)) {
                return console.log("Please enter a valid color name or hexidecimal color.");
            }
            return true;
        }
    },
    {
        type: 'list',
        message: "Choose a shape.",
        choices: ['Square', 'Circle', 'Triangle'],
        name: 'shape'
    },
    {
        type: 'input',
        message: "What color do you want your shape to be?",
        name: 'shapeColor',
        default: 'black',
        validate: function (answer) {
            if (!validateColor(answer)) {
                return console.log("Please enter a valid color name or hexidecimal color.");
            }
            return true;
        }
    },
];

//Node File System to write new README.md file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, err => {
        err ? console.error(err) : console.log('logo.svg file created!');
    });
};

//initialization
function init() {
    
    inquirer
        .prompt(questions)
        .then((answers) => {
            const svgImage = createSVG(answers);
            writeToFile(fileName, svgImage);
        })
        .catch((error) => {
                console.error(error);
        });
};
//call init function
init();