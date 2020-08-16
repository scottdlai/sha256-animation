"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parse2Comp_1 = __importDefault(require("../utilities/parse2Comp"));
const to32bits_1 = __importDefault(require("../utilities/to32bits"));
function rightRotate(s, n) {
    if (n > 32) {
        throw new Error('INVALID AMOUNT OF ROTATION');
    }
    const number = parse2Comp_1.default(s);
    return to32bits_1.default((number >>> n) | (number << (32 - n)));
}
exports.default = rightRotate;
