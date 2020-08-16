"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const is32bits_1 = __importDefault(require("./is32bits"));
function parse2Comp(s) {
    if (!is32bits_1.default(s)) {
        throw new Error('NOT A BINARY STRING OF LENGTH 32 ' + s);
    }
    return ~~parseInt(s, 2);
}
exports.default = parse2Comp;
