"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rightRoate_1 = __importDefault(require("../operations/rightRoate"));
const rightShift_1 = __importDefault(require("../operations/rightShift"));
const xor_1 = __importDefault(require("../operations/xor"));
/**
 * Returns the sigma0 of the specified binary string.
 *
 * @param s binary string
 */
function sigma0(s) {
    const rightRoate7 = rightRoate_1.default(s, 7);
    const rightRoate18 = rightRoate_1.default(s, 18);
    const rightShift3 = rightShift_1.default(s, 3);
    return xor_1.default(rightRoate7, rightRoate18, rightShift3);
}
exports.default = sigma0;
