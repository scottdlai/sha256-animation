"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parse2Comp_1 = __importDefault(require("../utilities/parse2Comp"));
const to32bits_1 = __importDefault(require("../utilities/to32bits"));
/**
 * Returns a new binary string based on the choice of the x. i.e. if the bit of
 * x is 1 then choose the bit y; else choose the bit of z.
 *
 * @param x binary string
 * @param y binary string
 * @param z binary string
 */
function choice(x, y, z) {
    const a = parse2Comp_1.default(x);
    const b = parse2Comp_1.default(y);
    const c = parse2Comp_1.default(z);
    return to32bits_1.default(a & b | ~a & c);
}
exports.default = choice;
