"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns the 32-bit string representation of the specified number.
 *
 * @param n number to be converted
 */
function to32bits(n) {
    return n.toString(2).padStart(2, '0');
}
exports.default = to32bits;
