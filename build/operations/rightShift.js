"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parse2Comp_1 = __importDefault(require("../utilities/parse2Comp"));
const to32bits_1 = __importDefault(require("../utilities/to32bits"));
/**
 * Returns the right shift by the specified amount of the specified binary
 * string as a binary string of length 32.
 *
 * @param s binary string to be rotated
 * @param n amount of rotation
 */
function rightShift(s, n) {
    if (n > 32) {
        throw new Error('INVALID AMOUNT OF SHIFT');
    }
    if (n == 32) {
        return to32bits_1.default(0);
    }
    const number = parse2Comp_1.default(s);
    return to32bits_1.default(number >>> n);
}
exports.default = rightShift;
