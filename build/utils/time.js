"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeInUtc = void 0;
function getTimeInUtc() {
    const currentUTCTime = Date.now();
    const targetTime = currentUTCTime - 2000;
    const actualTime = Date.now();
    if (actualTime >= targetTime && actualTime <= currentUTCTime) {
        const formattedTime = new Date(actualTime).toISOString();
        return formattedTime;
    }
    else {
        return "Current time is outside the +/-2 seconds range.";
    }
}
exports.getTimeInUtc = getTimeInUtc;
