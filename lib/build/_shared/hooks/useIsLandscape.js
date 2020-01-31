"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var useKeyDown_1 = require("./useKeyDown");
var utils_1 = require("../../_helpers/utils");
var getOrientation = function () {
    if (typeof window === 'undefined') {
        return 'portrait';
    }
    if (window.screen && window.screen.orientation && window.screen.orientation.angle) {
        return Math.abs(window.screen.orientation.angle) === 90 ? 'landscape' : 'portrait';
    }
    // Support IOS safari
    if (window.orientation) {
        return Math.abs(Number(window.orientation)) === 90 ? 'landscape' : 'portrait';
    }
    return 'portrait';
};
function useIsLandscape(views, customOrientation) {
    var _a = React.useState(getOrientation()), orientation = _a[0], setOrientation = _a[1];
    var eventHandler = React.useCallback(function () { return setOrientation(getOrientation()); }, []);
    useKeyDown_1.useIsomorphicEffect(function () {
        window.addEventListener('orientationchange', eventHandler);
        return function () { return window.removeEventListener('orientationchange', eventHandler); };
    }, [eventHandler]);
    if (utils_1.arrayIncludes(views, ['hours', 'minutes', 'seconds'])) {
        // could not display 13:34:44 in landscape mode
        return false;
    }
    var orientationToUse = customOrientation || orientation;
    return orientationToUse === 'landscape';
}
exports.useIsLandscape = useIsLandscape;
