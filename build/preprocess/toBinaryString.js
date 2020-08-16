"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBinaryStringAnimation = void 0;
const process_1 = require("process");
const ansi_escapes_1 = require("ansi-escapes");
const sleep_1 = __importDefault(require("../utilities/sleep"));
const speed_1 = __importDefault(require("../utilities/speed"));
const title_1 = __importDefault(require("../utilities/title"));
const chalk_1 = require("chalk");
/**
 * Convert the message string to binary string.
 *
 * @param message message to be converted
 */
function toBinaryString(message) {
    const byteArray = toByteArray(message);
    return byteArray
        .map((byte) => byte.toString(2).padStart(8, '0'))
        .join('');
}
exports.default = toBinaryString;
async function toBinaryStringAnimation(message) {
    const binaryString = toBinaryString(message);
    process_1.stdout.write(ansi_escapes_1.clearTerminal);
    await sleep_1.default(speed_1.default.normal);
    process_1.stdout.write(title_1.default('convert message'));
    await sleep_1.default(speed_1.default.normal);
    process_1.stdout.write('message: ');
    await sleep_1.default(speed_1.default.normal);
    process_1.stdout.write(chalk_1.yellow(message) + '\n');
    await sleep_1.default(speed_1.default.normal);
    process_1.stdout.write('bits:    ');
    await sleep_1.default(speed_1.default.normal);
    process_1.stdout.write(binaryString);
    return binaryString;
}
exports.toBinaryStringAnimation = toBinaryStringAnimation;
/**
 * Returns the byte array of the specified message.
 *
 * @param message message to be converted
 */
function toByteArray(message) {
    return message
        .split('')
        .map((character) => character.charCodeAt(0));
}
