// const createSVG = require('./shapes');
const shapes = require('./shapes')
const Square = shapes.Square;
const Circle = shapes.Circle;
const Triangle = shapes.Triangle;


// your jest test file below
// import SoundPlayer from './sound-player';
// import SoundPlayerConsumer from './sound-player-consumer';
// class Square {
//     constructor(x, y, width, height, text, textColor, shapeColor) {
//         this.x = x
//         this.y = y
//         this.width = width
//         this.height = height
//         this.text = text
//         this.textColor = textColor
//         this.shapeColor = shapeColor
//     }

//     draw() {
//         return `
//         <svg version="1.1" width="300" height="200" style="border: 1px solid black;" xmlns="http://www.w3.org/2000/svg">
//             <rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" stroke="${this.shapeColor}" fill="${this.shapeColor}"/>
//             <text text-anchor="middle" dominant-baseline="middle" x="135" y="100" fill='${this.textColor}' font-size="80px">${this.text}</text>
//         </svg>`
//     }

// }

// jest.mock('./shapes');
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
    // test('draw() is called with arguments', () => {
    //     //Prepare a spy for the square.draw() method
    //     const setRuleSpy = jest.spyOn(square, 'draw');
    //     //create a mock rule for use as a function argument
    //     const trueRule = jest.fn(() => true);
    //     const result = square.draw('true', trueRule)
    //     expect(result).toBeUndefined();
    //     //Check the spy if the method was called correctly.
    //     expect(setRuleSpy).toHaveBeenCalledWith('true', trueRule);
    //     //Restore the mock and revert original implementation
    //     setRuleSpy.mockClear();
    // })

// test('')
// const mySpy = jest.spyOn(Square, 'draw');
// console.log(myMock);
// console.log(jest);
// console.log(Square);
// beforeEach(() => {
//     Square.mockClear();
//     Circle.mockClear();
//     Triangle.mockClear();
// });
// it('check to see if a class constructor was called', () => {
//     expect(Square).toHaveBeenCalledTimes(1);
// });
// it('check to see if a method was called', () => {
//     expect(Square).not.toHaveBeenCalled();
// });
// it('check to see if constructor was called', () => {
//     // const square = new Square();
//     // expect(Square).toHaveBeenCalledTimes(1);
//     const square = new Square(1, 1, 1, 1, 'hey', 'blue', 'red');
//             // const svg = square.draw();
//             console.log(square.draw());
//             expect(square.draw()).toHaveReturnedWith(`
//     <svg version="1.1" width="300" height="200" style="border: 1px solid black;" xmlns="http://www.w3.org/2000/svg">
//         <rect x="1" y="1" width="1" height="1" stroke="red" fill="red"/>
//         <text text-anchor="middle" dominant-baseline="middle" x="135" y="100" fill='blue' font-size="80px">hey</text>
//     </svg>`)
// });


  
   // comment this line if just want to "spy"

// it('player consumer plays music', () => {
//   const player = new SoundPlayerConsumer();
//   player.playSomethingCool();
//   expect(Square).toHaveBeenCalled();
// });
//   describe('Square', ()=> {
//     describe('draw', () => {
//         it('should render a square SVG', () => {
//             const square = new Square(1, 1, 1, 1, 'hey', 'blue', 'red');
//             const svg = square.draw();
//             expect(svg).toEqual(`
//     <svg version="1.1" width="300" height="200" style="border: 1px solid black;" xmlns="http://www.w3.org/2000/svg">
//         <rect x="1" y="1" width="1" height="1" stroke="red" fill="red"/>
//         <text text-anchor="middle" dominant-baseline="middle" x="135" y="100" fill='blue' font-size="80px">hey</text>
//     </svg>`)
//         })
//     })
//   });

//   test('if createSVG is passed an object', () => {
//     const answers = {
//         text: 'SVG',
//         textColor: 'black',
//         shape: 'Square',
//         shapeColor: 'white'
//       }
//     createSVG(answers);
//     expect(answers).not.toBeNull();
//   });

//   test('to see if Square shape is rendered properly', () => {
//     const square = new Square(1, 1, 1, 1, 'hey', 'blue', 'red');
//     const svg = square.draw();
//     expect(svg).toEqual(`
//     <svg version="1.1" width="300" height="200" style="border: 1px solid black;" xmlns="http://www.w3.org/2000/svg">
//         <rect x="1" y="1" width="1" height="1" stroke="red" fill="red"/>
//         <text text-anchor="middle" dominant-baseline="middle" x="135" y="100" fill='blue' font-size="80px">hey</text>
//     </svg>`)
//   })