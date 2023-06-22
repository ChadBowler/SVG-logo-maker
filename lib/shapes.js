//Square class, called if the user selects Square from the command line prompt
class Square {
    constructor(x, y, width, height, text, textColor, shapeColor) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }

    draw() {
        return `
        <svg version="1.1" width="300" height="200" style="border: 1px solid black;" xmlns="http://www.w3.org/2000/svg">
            <rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" stroke="${this.shapeColor}" fill="${this.shapeColor}"/>
            <text text-anchor="middle" dominant-baseline="middle" x="135" y="100" fill='${this.textColor}' font-size="80px">${this.text}</text>
        </svg>`
    }

}
//Circle class, called if the user selects Circle from the command line prompt
class Circle {
    constructor(cx, cy, r, text, textColor, shapeColor) {
        this.cx = cx
        this.cy = cy
        this.r = r
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
    draw() {
        return `
        <svg version="1.1" width="300" height="200" style="border: 1px solid black;" xmlns="http://www.w3.org/2000/svg">
            <circle cx="${this.cx}" cy="${this.cy}" r="${this.r}" stroke="${this.shapeColor}" fill="${this.shapeColor}"/>
            <text text-anchor="middle" dominant-baseline="middle" x="150" y="100" fill='${this.textColor}' font-size="70px">${this.text}</text>
        </svg>`
    }
}
//Triangle class, called if the user selects Triangle from the command line prompt
class Triangle {
    constructor(points, text, textColor, shapeColor) {
        this.points = points
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
    draw() {
        return `
    <svg version="1.1" width="300" height="200" style="border: 1px solid black;" xmlns="http://www.w3.org/2000/svg">
        <polygon points="${this.points}" stroke="${this.shapeColor}" fill="${this.shapeColor}"/>
        <text text-anchor="middle" dominant-baseline="middle" x="150" y="150" stroke='black' fill='${this.textColor}' font-size="60px">${this.text}</text>
    </svg>`
    }
}
//function to grab the answers from the user, and send the answers to the corresponding class function
function createSVG(answers) {
    switch (answers.shape) {
        case 'Square':
            const svgSquare = new Square(50, 12, 175, 175, answers.text, answers.textColor, answers.shapeColor);
            return svgSquare.draw();
        case 'Circle':
            const svgCircle = new Circle(150, 100, 90, answers.text, answers.textColor, answers.shapeColor);
            return svgCircle.draw();
        case 'Triangle':
            const points = '150, 10 50, 190 250, 190'
            const svgTriangle = new Triangle(points, answers.text, answers.textColor, answers.shapeColor);
            return svgTriangle.draw();
        default:
            break;
    }
}
//exports
exports.createSVG = createSVG;
exports.Square = Square;
exports.Circle = Circle;
exports.Triangle = Triangle;