"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parse2Comp_1 = __importDefault(require("../utilities/parse2Comp"));
const to32bits_1 = __importDefault(require("../utilities/to32bits"));
/**
 * Returns the sum of the specified binary strings as a 32-bit binary string.
 *
 * @param binaryStrings 2 or more binary strings to be added
 */
function add(...binaryStrings) {
    if (binaryStrings.length < 2) {
        throw new Error('NOT ENOUGH ARGUMENTS');
    }
    const numbers = binaryStrings.map((binaryString) => parse2Comp_1.default(binaryString));
    const sum = numbers.reduce((acc, cur) => (acc + cur) % 2 ** 32, 0);
    return to32bits_1.default(sum);
}
exports.default = add;
