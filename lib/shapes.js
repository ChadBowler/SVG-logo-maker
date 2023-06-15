class Square {
    constructor(x, y, width, height, text, color) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.text = text
        this.color = color
    };

    draw() {
        return `
        <svg version="1.1" width="300" height="200" style="border: 1px solid black;" xmlns="http://www.w3.org/2000/svg">
            <rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" stroke="${this.color}" fill="${this.color}"/>
            <text x="57" y="120" fill='white' font-size="80px">${this.text}</text>
        </svg>`
    }

}

class Circle {
    constructor(cx, cy, r, stroke, fill) {
        this.cx = cx
        this.cy = cy
        this.r = r
        this.stroke = stroke
        this.fill = fill
    }
    draw() {
        return `
        <svg version="1.1" width="300" height="200" style="border: 1px solid black;" xmlns="http://www.w3.org/2000/svg">
            <rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" stroke="${this.color}" fill="${this.color}"/>
            <text x="57" y="120" fill='white' font-size="80px">${this.text}</text>
        </svg>`
    }
}

class Triangle {
    constructor(points, stroke, fill) {
        this.points = points
        this.stroke = stroke
        this.fill = fill
    }
    draw() {
        return `
        <svg version="1.1" width="300" height="200" style="border: 1px solid black;" xmlns="http://www.w3.org/2000/svg">
            <rect x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" stroke="${this.color}" fill="${this.color}"/>
            <text x="57" y="120" fill='white' font-size="80px">${this.text}</text>
        </svg>`
    }
}

function createSVG(answers) {
    console.log(answers);
    switch (answers.shape) {
        case 'Square':
            const svgSquare = new Square(50, 12, 175, 175, answers.text, answers.color);
            return svgSquare.draw();
        case 'Circle':
            console.log('circle');
            break;
        case 'Triangle':
            console.log('triangle');
            break;
        default:
            break;
    }
}

module.exports = createSVG;