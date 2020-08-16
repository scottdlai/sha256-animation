"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rightRoate_1 = __importDefault(require("../operations/rightRoate"));
const rightShift_1 = __importDefault(require("../operations/rightShift"));
const xor_1 = __importDefault(require("../operations/xor"));
/**
 * Returns the sigma1 of the specified binary string.
 *
 * @param s binary string
 */
function sigma1(s) {
    const rightRotate17 = rightRoate_1.default(s, 17);
    const rightRoate19 = rightRoate_1.default(s, 19);
    const rightShift10 = rightShift_1.default(s, 10);
    return xor_1.default(rightRotate17, rightRoate19, rightShift10);
}
exports.default = sigma1;
