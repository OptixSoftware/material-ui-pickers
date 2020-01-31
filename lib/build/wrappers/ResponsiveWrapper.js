"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var core_1 = require("@material-ui/core");
var MobileWrapper_1 = require("./MobileWrapper");
var DesktopWrapper_1 = require("./DesktopWrapper");
exports.ResponsiveWrapper = function (_a) {
    var _b = _a.desktopModeBreakpoint, desktopModeBreakpoint = _b === void 0 ? 'sm' : _b, okLabel = _a.okLabel, cancelLabel = _a.cancelLabel, clearLabel = _a.clearLabel, todayLabel = _a.todayLabel, showTodayButton = _a.showTodayButton, clearable = _a.clearable, DialogProps = _a.DialogProps, PopoverProps = _a.PopoverProps, other = __rest(_a, ["desktopModeBreakpoint", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "showTodayButton", "clearable", "DialogProps", "PopoverProps"]);
    var isDesktop = core_1.useMediaQuery(function (theme) { return theme.breakpoints.up(desktopModeBreakpoint); });
    return isDesktop ? (React.createElement(DesktopWrapper_1.DesktopWrapper, __assign({ PopoverProps: PopoverProps }, other))) : (React.createElement(MobileWrapper_1.MobileWrapper, __assign({ okLabel: okLabel, cancelLabel: cancelLabel, clearLabel: clearLabel, todayLabel: todayLabel, showTodayButton: showTodayButton, clearable: clearable, DialogProps: DialogProps }, other)));
};
