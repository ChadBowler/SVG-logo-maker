const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./utils/generateSVG');
const fileName = 'logo.svg';

//array of questions for inquirer
const questions = [
    {
        type: 'input',
        message: "Please enter up to 3 characters",
        name: 'text',
        default: 'SVG',
        
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
        name: 'color',
        default: 'black',
    },
];




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
//init();