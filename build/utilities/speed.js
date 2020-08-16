"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Speed {
    constructor(speed) {
        this.normal = speed;
        this.fast = speed / 10;
        this.slow = speed * 3;
    }
    setSpeed(speed) {
        this.normal = speed;
        this.fast = speed / 10;
        this.slow = speed * 3;
    }
}
exports.default = new Speed(250);
