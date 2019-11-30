"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CuteHelenaSup_1 = require("./CuteHelenaSup");
class GurumeDevice extends CuteHelenaSup_1.default {
    constructor() {
        super();
    }
    isMobile() {
        // return (super.Android() || super.BlackBerry()
        // || super.IOS() || super.Opera() || super.Windows());
    }
}
exports.default = GurumeDevice;
