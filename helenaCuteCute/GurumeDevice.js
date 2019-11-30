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
var CuteHelenaSupMe_1 = require("./CuteHelenaSupMe");
var cuteHelenaSupMe = new CuteHelenaSupMe_1.default();
var GurumeDevice = (function (_super) {
    __extends(GurumeDevice, _super);
    function GurumeDevice() {
        return _super.call(this) || this;
    }
    GurumeDevice.prototype.isAndroid = function () {
        return cuteHelenaSupMe.Android();
    };
    ;
    GurumeDevice.prototype.isBlackBerry = function () {
        return cuteHelenaSupMe.BlackBerry();
    };
    ;
    GurumeDevice.prototype.isIOS = function () {
        return cuteHelenaSupMe.IOS();
    };
    GurumeDevice.prototype.isOpera = function () {
        return cuteHelenaSupMe.Opera();
    };
    GurumeDevice.prototype.isWindows = function () {
        return cuteHelenaSupMe.Windows();
    };
    GurumeDevice.prototype.isMobile = function () {
        return (cuteHelenaSupMe.Android() || cuteHelenaSupMe.BlackBerry() || cuteHelenaSupMe.IOS() || cuteHelenaSupMe.Opera() || cuteHelenaSupMe.Windows());
    };
    GurumeDevice.prototype.isPC = function () {
        return !this.isMobile();
    };
    GurumeDevice.prototype.getPlatform = function () {
        return cuteHelenaSupMe.getPlatform();
    };
    GurumeDevice.prototype.getAppVersion = function () {
        return cuteHelenaSupMe.getAppVersion();
    };
    GurumeDevice.prototype.getAppName = function () {
        return cuteHelenaSupMe.getAppName();
    };
    GurumeDevice.prototype.getAppCodeName = function () {
        return cuteHelenaSupMe.getAppCodeName();
    };
    GurumeDevice.prototype.getMemory = function () {
        return cuteHelenaSupMe.getMemory();
    };
    GurumeDevice.prototype.getNetworkInfo = function () {
        return cuteHelenaSupMe.getNetworkInfo();
    };
    GurumeDevice.prototype.getHardwareConcurrency = function () {
        return cuteHelenaSupMe.getHardwareConcurrency();
    };
    GurumeDevice.prototype.getBrowserInfo = function () {
        var cuteHelena = cuteHelenaSupMe.getBrowserInfo();
        if (cuteHelena === null) {
            var bra = this.getAppVersion();
            var braSize = [];
            if (bra.toLowerCase().indexOf('opr') !== -1) {
                var braRank = bra.substr(bra.toLowerCase().indexOf('opr'), bra.length);
                braSize.push(braRank.replace('OPR', 'Opera'));
            }
            else {
                if (bra.toLowerCase().indexOf('chrome') >= 0) {
                    var redBra = bra.toLowerCase().indexOf('safari');
                    var whiteBra = '';
                    whiteBra = bra.substr(bra.toLowerCase().indexOf('chrome'), bra.length);
                    if (redBra !== -1) {
                        var elf = bra.substr(bra.toLowerCase().indexOf('chrome'), bra.length);
                        var SizeOfThere = ' ';
                        var splt = elf.split(SizeOfThere);
                        whiteBra = splt[0];
                    }
                    braSize.push(whiteBra);
                }
                else {
                    var blueBra = bra.toLowerCase().indexOf('msie');
                    var whiteBra = '';
                    whiteBra = bra.substr(bra.toLowerCase().indexOf('safari'), bra.length);
                    if (blueBra !== -1) {
                        whiteBra = bra.substr(bra.toLowerCase().indexOf('msie'), bra.length);
                    }
                    var colorfulBra = whiteBra.split(' ');
                    braSize.push(colorfulBra[0]);
                }
            }
            return braSize[0];
        }
        return cuteHelena;
    };
    return GurumeDevice;
}(CuteHelenaSupMe_1.GurumeDeviceIntro));
exports.default = GurumeDevice;
