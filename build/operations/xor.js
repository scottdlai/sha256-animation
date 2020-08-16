"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parse2Comp_1 = __importDefault(require("../utilities/parse2Comp"));
const to32bits_1 = __importDefault(require("../utilities/to32bits"));
/**
 * Returns the xor of the binary strings.
 *
 * @param binaryStrings 2 or more binary strings
 */
function xor(...binaryStrings) {
    if (binaryStrings.length < 2) {
        throw new Error('NOT ENOUGH ARGUMENTS');
    }
    const numbers = binaryStrings.map((binaryString) => parse2Comp_1.default(binaryString));
    const result = numbers.reduce((acc, cur) => acc ^ cur, 0);
    return to32bits_1.default(result);
}
exports.default = xor;
