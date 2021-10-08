//draw a circle on the canvas using js
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

//the canvas to have the same width and height of the screen
const windowHeight = window.innerHeight;
const windowWidht = window.innerWidth;
canvas.height = windowHeight;
canvas.width = windowWidht;
canvas.style.background = 'green';

const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = 50;

context.beginPath();
context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
context.fillStyle = 'blue';
context.fill();
context.lineWidth = 2;
context.strokeStyle = '#003300';
context.stroke();
context.closePath();



class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }

    draw(context) {
        context.beginPath();
        context.lineWidth = 5;
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        context.strokeStyle = this.fillColor;
        context.stroke();
        context.closePath();

    }

    newCircle() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        const randomX = Math.floor(Math.random() * window.screen.width);
        const randomY = Math.floor(Math.random() * window.screen.height);
        const randomRadius = Math.floor(Math.random() * 100);
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let randomColor = 'rgb(' + r + ', ' + g + ',' + b + ')';

        context.beginPath();
        context.lineWidth = 5;
        context.arc(randomX, randomY, randomRadius, 0, 2 * Math.PI, randomColor);
        context.strokeStyle = this.randomColor;
        context.stroke();
        context.closePath();
    }
}

const c4 = new Circle(randomX, randomY, randomRadius, 0, 2 * Math.PI, randomColor);
c4.newCircle(context);

const c1 = new Circle(100, 100, 80, 0, 2 * Math.PI, '#C54B4B');
const c2 = new Circle(100, 50, 30, 0, 2 * Math.PI, 'magenta');
const c3 = new Circle(200, 50, 40, 0, 2 * Math.PI, 'blue');

c1.draw(context);
c2.draw(context);
c3.draw(context);
setInterval(c1.newCircle, 100);
c1.newCircle();








