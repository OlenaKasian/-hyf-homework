console.log("inside warmup file");

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getDiameter() {
        return 2 * this.radius;
    }
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
    getArea() {
        return this.radius * this.radius * Math.PI;
    }
}


const circle1 = new Circle(10);
console.log('Circle1 diametr is ' + circle1.getDiameter())
console.log('Circle1 circumference is ' + circle1.getCircumference())
console.log('Circle1 area is ' + circle1.getArea())

const circle2 = new Circle(15);
console.log('Circle2 diametr is ' + circle2.getDiameter());
console.log('Circle2 circumference is ' + circle2.getCircumference())
console.log('Circle1 area is ' + circle2.getArea())
