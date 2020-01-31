"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StaticWrapper_1 = require("./StaticWrapper");
exports.StaticWrapper = StaticWrapper_1.StaticWrapper;
var MobileWrapper_1 = require("./MobileWrapper");
exports.ModalWrapper = MobileWrapper_1.MobileWrapper;
var DesktopWrapper_1 = require("./DesktopWrapper");
exports.InlineWrapper = DesktopWrapper_1.DesktopWrapper;
function getWrapperVariant(wrapper) {
    if (wrapper === DesktopWrapper_1.DesktopWrapper) {
        return 'desktop';
    }
    else if (wrapper === StaticWrapper_1.StaticWrapper) {
        return 'static';
    }
    else if (wrapper === MobileWrapper_1.MobileWrapper) {
        return 'mobile';
    }
    else {
        return null;
    }
}
exports.getWrapperVariant = getWrapperVariant;
