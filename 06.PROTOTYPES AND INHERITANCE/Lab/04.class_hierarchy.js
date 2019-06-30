function getClasses() {
    class Figure {
        constructor() {
            if (this.constructor === Figure) {
                throw new TypeError('Abstract class "Figure" cannot be instantiated directly.');
            }
        }

        get area() {
            return this._area;
        }

        toString() {
            const props = Object.keys(this);
            let message = [];
            props.forEach(p => {
                message.push(`${p}: ${this[p]}`) 
            });
            return `${this.constructor.name} - ${message.join(', ')}`;
        }
    }

    class Circle extends Figure {
        constructor(radius) {
            super();
            this.radius = radius;
        }

        get area() {
            return Math.PI * this.radius * this.radius;
        }
    }

    class Rectangle extends Figure {
        constructor(width, height) {
            super();
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.height;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}