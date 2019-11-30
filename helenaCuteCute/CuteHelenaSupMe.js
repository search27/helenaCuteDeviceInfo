"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RRRNavi = {
    havingSexInfo: {
        withHelena: 'helenaCuteSound',
        withHeera: 'heeraGreatSatisfaction',
        withHelenaTypeA: 'withHelenaTypeA',
        withHelenaTypeB: 'withHelenaTypeB',
        withHelenaTypeC: 'withHelenaTypeC',
        withHelenaTypeD: 'withHelenaTypeD',
        withHelenaTypeSRank: 'withHelenaTypeSRank',
        withHelenaTypeSSRank: 'withHelenaTypeSSRank',
    },
    secretWithGirls: {
        cuteSound: Symbol(this.withHelena),
        greatSatisfaction: Symbol(this.withHeera),
        canNotSayThis: Symbol(this.withHelenaTypeA),
        wowSoGreat: Symbol(this.withHelenaTypeB),
        sheSoundsGood: Symbol(this.withHelenaTypeC),
        holyCow: Symbol(this.withHelenaTypeD),
        holyShif: Symbol(this.withHelenaTypeSRank),
        greateHelenaHeap: Symbol(this.withHelenaTypeSSRank),
    },
    HelenaSoundTypeA: {
        Android: /Android/i,
        BlackBerry: /BlackBerry/i,
        IOS: /iPhone|iPad|iPod/i,
        Opera: /Opera Mini/i,
        Windows: /IEMobile/i
    }
};
var RRRBigDig = navigator;
var GurumeDeviceIntro = (function () {
    function GurumeDeviceIntro() {
        this.DeviceData = RRRNavi.HelenaSoundTypeA;
        this.exec = window;
    }
    GurumeDeviceIntro.prototype.isAndroid = function () { };
    ;
    GurumeDeviceIntro.prototype.isBlackBerry = function () { };
    ;
    GurumeDeviceIntro.prototype.isIOS = function () { };
    ;
    GurumeDeviceIntro.prototype.isOpera = function () { };
    ;
    GurumeDeviceIntro.prototype.isWindows = function () { };
    ;
    GurumeDeviceIntro.prototype.isMobile = function () { };
    ;
    GurumeDeviceIntro.prototype.isPC = function () { };
    ;
    GurumeDeviceIntro.prototype.getPlatform = function () { };
    ;
    GurumeDeviceIntro.prototype.getAppVersion = function () { };
    ;
    GurumeDeviceIntro.prototype.getAppName = function () { };
    ;
    GurumeDeviceIntro.prototype.getAppCodeName = function () { };
    ;
    GurumeDeviceIntro.prototype.getMemory = function () { };
    ;
    GurumeDeviceIntro.prototype.getNetworkInfo = function () { };
    ;
    GurumeDeviceIntro.prototype.getHardwareConcurrency = function () { };
    ;
    GurumeDeviceIntro.prototype.getBrowserInfo = function () { };
    ;
    return GurumeDeviceIntro;
}());
exports.GurumeDeviceIntro = GurumeDeviceIntro;
var cuteNavi = (function () {
    function cuteNavi() {
        this.RRR_Great_Dig = 10000;
        this.HelenaCute = 'CuteHelena';
        this.HeeraOfMine = 'HeeraOfMine';
        this.greatMoments = {
            useTongue: 'useTongue',
            isSheVirgin: true,
            speedForPump: 100,
            doesNeedHerSound: true
        };
        this.girlsSatisfactionCount = [20, 40, 60, 80, 100];
    }
    cuteNavi.prototype.changeProperty = function (_str) {
        this.HelenaCute = _str;
    };
    cuteNavi.prototype.getHerSound = function (_index) {
        return this.girlsSatisfactionCount[_index];
    };
    cuteNavi.prototype[RRRNavi.secretWithGirls.greatSatisfaction] = function () {
        var SexKindWithHelena = RRRBigDig.platform;
        return SexKindWithHelena;
    };
    ;
    cuteNavi.prototype[RRRNavi.secretWithGirls.cuteSound] = function (_secret_sound) {
        var SexMoment = RRRBigDig.userAgent;
        return this.getSexWithHelenaInTheBed(SexMoment, _secret_sound);
    };
    ;
    cuteNavi.prototype[RRRNavi.secretWithGirls.canNotSayThis] = function () {
        var SexMoment = RRRBigDig.appVersion;
        return SexMoment;
    };
    ;
    cuteNavi.prototype[RRRNavi.secretWithGirls.wowSoGreat] = function () {
        var SexMoment = RRRBigDig.appName;
        return SexMoment;
    };
    ;
    cuteNavi.prototype[RRRNavi.secretWithGirls.sheSoundsGood] = function () {
        var SexMoment = RRRBigDig.appCodeName;
        return SexMoment;
    };
    ;
    cuteNavi.prototype[RRRNavi.secretWithGirls.holyCow] = function () {
        var SexMoment = RRRBigDig['deviceMemory'];
        return SexMoment;
    };
    ;
    cuteNavi.prototype[RRRNavi.secretWithGirls.holyShif] = function () {
        var SexMoment = RRRBigDig['connection'];
        return SexMoment;
    };
    ;
    cuteNavi.prototype[RRRNavi.secretWithGirls.holyShif] = function () {
        var SexMoment = RRRBigDig['hardwareConcurrency'];
        return SexMoment;
    };
    ;
    cuteNavi.prototype.getSexWithHelenaInTheBed = function (SexMoment, _use_tongue_for_her) {
        if (_use_tongue_for_her === 20 && this.greatMoments.useTongue === 'useTongue' && this.greatMoments.speedForPump === 100) {
            return SexMoment.match(RRRNavi.HelenaSoundTypeA.Android) == null ? false : true;
        }
        else if (_use_tongue_for_her === 40 && this.greatMoments.isSheVirgin && this.greatMoments.speedForPump === 100) {
            return SexMoment.match(RRRNavi.HelenaSoundTypeA.BlackBerry) == null ? false : true;
        }
        else if (_use_tongue_for_her === 60 && this.greatMoments.doesNeedHerSound && this.greatMoments.speedForPump === 100) {
            return SexMoment.match(RRRNavi.HelenaSoundTypeA.IOS) == null ? false : true;
        }
        else if (_use_tongue_for_her === 80 && this.greatMoments.useTongue === 'useTongue' && this.greatMoments.speedForPump === 100) {
            return;
        }
        else if (_use_tongue_for_her === 100 && this.greatMoments.speedForPump === 100 && this.greatMoments.useTongue === 'useTongue') {
            return SexMoment.match(RRRNavi.HelenaSoundTypeA.Opera) == null ? false : true;
        }
        else if (_use_tongue_for_her === 100 && this.greatMoments.speedForPump === 120) {
            return SexMoment.match(RRRNavi.HelenaSoundTypeA.Windows) == null ? false : true;
        }
        else {
            return SexMoment.match(RRRNavi.HelenaSoundTypeA.Windows) == null ? false : true;
        }
    };
    return cuteNavi;
}());
var CuteHelenaSupMe = (function (_super) {
    __extends(CuteHelenaSupMe, _super);
    function CuteHelenaSupMe() {
        return _super.call(this) || this;
    }
    CuteHelenaSupMe.prototype.Android = function () {
        return _super.prototype[RRRNavi.secretWithGirls.cuteSound].call(this, _super.prototype.getHerSound.call(this, 0));
    };
    ;
    CuteHelenaSupMe.prototype.BlackBerry = function () {
        return _super.prototype[RRRNavi.secretWithGirls.cuteSound].call(this, _super.prototype.getHerSound.call(this, 1));
    };
    ;
    CuteHelenaSupMe.prototype.IOS = function () {
        return _super.prototype[RRRNavi.secretWithGirls.cuteSound].call(this, _super.prototype.getHerSound.call(this, 2));
    };
    CuteHelenaSupMe.prototype.Opera = function () {
        return _super.prototype[RRRNavi.secretWithGirls.cuteSound].call(this, _super.prototype.getHerSound.call(this, 3));
    };
    CuteHelenaSupMe.prototype.Windows = function () {
        return _super.prototype[RRRNavi.secretWithGirls.cuteSound].call(this, _super.prototype.getHerSound.call(this, 4));
    };
    CuteHelenaSupMe.prototype.getPlatform = function () {
        return _super.prototype[RRRNavi.secretWithGirls.greatSatisfaction].call(this);
    };
    CuteHelenaSupMe.prototype.getAppVersion = function () {
        return _super.prototype[RRRNavi.secretWithGirls.canNotSayThis].call(this);
    };
    CuteHelenaSupMe.prototype.getAppName = function () {
        return _super.prototype[RRRNavi.secretWithGirls.wowSoGreat].call(this);
    };
    CuteHelenaSupMe.prototype.getAppCodeName = function () {
        return _super.prototype[RRRNavi.secretWithGirls.sheSoundsGood].call(this);
    };
    CuteHelenaSupMe.prototype.getMemory = function () {
        return _super.prototype[RRRNavi.secretWithGirls.holyCow].call(this);
    };
    CuteHelenaSupMe.prototype.getNetworkInfo = function () {
        return _super.prototype[RRRNavi.secretWithGirls.holyShif].call(this);
    };
    CuteHelenaSupMe.prototype.getHardwareConcurrency = function () {
        return _super.prototype[RRRNavi.secretWithGirls.greateHelenaHeap].call(this);
    };
    CuteHelenaSupMe.prototype.getBrowserInfo = function () {
        return null;
    };
    CuteHelenaSupMe.prototype.changeProperty = function () {
        return _super.prototype.changeProperty.call(this, 'cuteCuteHelenaSound');
    };
    return CuteHelenaSupMe;
}(cuteNavi));
exports.default = CuteHelenaSupMe;
