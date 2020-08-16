"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns if a string is binary string of length 32.
 *
 * @param s string to check
 */
function is32Bits(s) {
    return s.match(/^[0-1]{32}$/g) !== null;
}
exports.default = is32Bits;
