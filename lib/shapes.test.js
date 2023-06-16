// importing the classes from the shapes.js file
const shapes = require('./shapes')
const Square = shapes.Square;
const Circle = shapes.Circle;
const Triangle = shapes.Triangle;
//tests to check the methods to be functions, and to check that they output correctly. Each class has it's own tests.
describe('Square', () => {
    const square = new Square(1, 1, 1, 1, 'hey', 'blue', 'red');
    test('defines draw()', () => {
        expect(typeof square.draw).toBe('function');
    })
    test('draw() returns correct XML when called', () => { 
        expect(square.draw()).toBe(
            `
        <svg version="1.1" width="300" height="200" style="border: 1px solid black;" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="1" height="1" stroke="red" fill="red"/>
            <text text-anchor="middle" dominant-baseline="middle" x="135" y="100" fill='blue' font-size="80px">hey</text>
        </svg>`
        );
    });

});

describe('Circle', () => {
    const circle = new Circle(1, 1, 1, 'hey', 'blue', 'red');
    test('defines draw()', () => {
        expect(typeof circle.draw).toBe('function');
    })
    test('draw() returns correct XML when called', () => { 
        expect(circle.draw()).toBe(
            `
        <svg version="1.1" width="300" height="200" style="border: 1px solid black;" xmlns="http://www.w3.org/2000/svg">
            <circle cx="1" cy="1" r="1" stroke="red" fill="red"/>
            <text text-anchor="middle" dominant-baseline="middle" x="150" y="100" fill='blue' font-size="70px">hey</text>
        </svg>`
        );
    });

});

describe('Triangle', () => {
    const points = '150, 10 50, 190 250, 190'
    const triangle = new Triangle(points, 'hey', 'blue', 'red');
    test('defines draw()', () => {
        expect(typeof triangle.draw).toBe('function');
    })
    test('draw() returns correct XML when called', () => { 
        expect(triangle.draw()).toBe(
            `
    <svg version="1.1" width="300" height="200" style="border: 1px solid black;" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 10 50, 190 250, 190" stroke="red" fill="red"/>
        <text text-anchor="middle" dominant-baseline="middle" x="150" y="150" stroke='black' fill='blue' font-size="60px">hey</text>
    </svg>`
        );
    });
});