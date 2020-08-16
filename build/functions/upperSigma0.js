"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rightRoate_1 = __importDefault(require("../operations/rightRoate"));
const xor_1 = __importDefault(require("../operations/xor"));
/**
 * Returns the Sigma0 of the specified binary string.
 *
 * @param s binary string
 */
function upperSigma0(s) {
    const rightRotate2 = rightRoate_1.default(s, 2);
    const rightRotate13 = rightRoate_1.default(s, 13);
    const rightRoate22 = rightRoate_1.default(s, 22);
    return xor_1.default(rightRotate2, rightRotate13, rightRoate22);
}
exports.default = upperSigma0;
