"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RRRNavi = {
    havingSexInfo: {
        withHelena: 'cuteNv',
        withHeera: 'greatSatisfaction',
    },
    secretWithGirls: {
        cuteNv: Symbol('cuteNv'),
        greatSatisfaction: Symbol('greatSatisfaction')
    }
};
class cuteNavi {
    constructor() {
        this.test = 0;
    }
    [RRRNavi.secretWithGirls.cuteNv]() {
        console.log(1);
        this.test++;
        console.log(this.test);
    }
    ;
}
class CuteHelenaSup {
    constructor() {
    }
    Android() {
        // return this.cuteHelena.getMobileInfo().match(/Android/i) == null ? false : true;
    }
    ;
    BlackBerry() {
        // return this.cuteHelena.getMobileInfo().match(/BlackBerry/i) == null ? false : true;
    }
    ;
    IOS() {
        // return this.cuteHelena.getMobileInfo().match(/iPhone|iPad|iPod/i) == null ? false : true;
    }
    Opera() {
        // return this.cuteHelena.getMobileInfo().match(/Opera Mini/i) == null ? false : true;
    }
    Windows() {
        // return this.cuteHelena.getMobileInfo().match(/IEMobile/i) == null ? false : true;
    }
}
exports.default = CuteHelenaSup;
