"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parse2Comp_1 = __importDefault(require("../utilities/parse2Comp"));
const to32bits_1 = __importDefault(require("../utilities/to32bits"));
/**
 * Returns a new binary string based on number of bits of x, y, and z. i.e. if
 * the majority of bit is 1 then choose 1; else 0.
 *
 * @param x binary string
 * @param y binary string
 * @param z binary string
 */
function majority(x, y, z) {
    const a = parse2Comp_1.default(x);
    const b = parse2Comp_1.default(y);
    const c = parse2Comp_1.default(z);
    return to32bits_1.default(a & b | a & c | b & c);
}
exports.default = majority;
