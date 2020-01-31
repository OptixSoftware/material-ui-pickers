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
var utils_1 = require("../../_helpers/utils");
function useViews(_a) {
    var views = _a.views, openTo = _a.openTo, onChange = _a.onChange, isMobileKeyboardViewOpen = _a.isMobileKeyboardViewOpen, toggleMobileKeyboardView = _a.toggleMobileKeyboardView;
    var _b = React.useState(openTo && utils_1.arrayIncludes(views, openTo) ? openTo : views[0]), openView = _b[0], _setOpenView = _b[1];
    var setOpenView = React.useCallback(function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (isMobileKeyboardViewOpen) {
            toggleMobileKeyboardView();
        }
        _setOpenView.apply(void 0, args);
    }, [isMobileKeyboardViewOpen, toggleMobileKeyboardView]);
    var nextView = views[views.indexOf(openView) + 1];
    var openNext = React.useCallback(function () {
        if (nextView) {
            setOpenView(nextView);
        }
    }, [nextView, setOpenView]);
    var handleChangeAndOpenNext = React.useCallback(function (date, isFinish) {
        // do not close picker if needs to show next view
        onChange(date, Boolean(isFinish && !nextView));
        if (isFinish) {
            openNext();
        }
    }, [nextView, onChange, openNext]);
    return {
        nextView: nextView,
        openNext: openNext,
        handleChangeAndOpenNext: handleChangeAndOpenNext,
        openView: openView,
        setOpenView: setOpenView,
    };
}
exports.useViews = useViews;
