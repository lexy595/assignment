// Named exports
export const PI = 3.14;

export function add(a, b) {
    return a + b;
}

export class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    area() {
        return PI * this.radius * this.radius;
    }
}
