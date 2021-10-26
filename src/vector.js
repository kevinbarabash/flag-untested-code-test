class Vector {
    constructor(x, y) {
        Object.assign(this, {x, y});
    }

    add(other) {
        return new Vector(this.x + other.x, this.y + other.y);
    }

    get length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    toString() {
        return `(${this.x}, ${this.y})`;
    }
}

module.exports = Vector;
