"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Stops the execution of the program for the specified number of milisecond.
 *
 * @param {number} ms number of miliseconds to stop
 */
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
exports.default = sleep;
