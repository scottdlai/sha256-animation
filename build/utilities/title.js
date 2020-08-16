"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
/**
 * Return the title of the string in the form
 * -
 * s
 * -
 * @param s string
 */
function title(s) {
    return (chalk_1.bold `${'-'.repeat(s.length)}\n${s.toUpperCase()}\n${'-'.repeat(s.length)}\n`);
}
exports.default = title;
