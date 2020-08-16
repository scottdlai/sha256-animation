"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rightRoate_1 = __importDefault(require("../operations/rightRoate"));
const xor_1 = __importDefault(require("../operations/xor"));
/**
 * Returns the Sigma1 of the specified binary string.
 *
 * @param s binary string
 */
function upperSigma1(s) {
    const rightRotate6 = rightRoate_1.default(s, 6);
    const rightRotate13 = rightRoate_1.default(s, 13);
    const rightRoate25 = rightRoate_1.default(s, 25);
    return xor_1.default(rightRotate6, rightRotate13, rightRoate25);
}
exports.default = upperSigma1;
