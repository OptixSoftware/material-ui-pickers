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
var usePickerState_1 = require("../_shared/hooks/usePickerState");
var Picker_1 = require("./Picker");
function makePickerWithStateAndWrapper(Wrapper, _a) {
    var useDefaultProps = _a.useDefaultProps, DefaultToolbarComponent = _a.DefaultToolbarComponent;
    function PickerWithState(props) {
        var defaultProps = useDefaultProps(props);
        var allProps = __assign(__assign({}, defaultProps), props);
        var allowKeyboardControl = allProps.allowKeyboardControl, ampm = allProps.ampm, ampmInClock = allProps.ampmInClock, autoOk = allProps.autoOk, dateRangeIcon = allProps.dateRangeIcon, disableFuture = allProps.disableFuture, disablePast = allProps.disablePast, showToolbar = allProps.showToolbar, format = allProps.format, hideTabs = allProps.hideTabs, initialFocusedDate = allProps.initialFocusedDate, leftArrowButtonProps = allProps.leftArrowButtonProps, leftArrowIcon = allProps.leftArrowIcon, loadingIndicator = allProps.loadingIndicator, maxDate = allProps.maxDate, minDate = allProps.minDate, minutesStep = allProps.minutesStep, onAccept = allProps.onAccept, onChange = allProps.onChange, onClose = allProps.onClose, onMonthChange = allProps.onMonthChange, onOpen = allProps.onOpen, onYearChange = allProps.onYearChange, openTo = allProps.openTo, orientation = allProps.orientation, renderDay = allProps.renderDay, rightArrowButtonProps = allProps.rightArrowButtonProps, rightArrowIcon = allProps.rightArrowIcon, shouldDisableDate = allProps.shouldDisableDate, showLeftArrowButton = allProps.showLeftArrowButton, showRightArrowButton = allProps.showRightArrowButton, strictCompareDates = allProps.strictCompareDates, timeIcon = allProps.timeIcon, _a = allProps.ToolbarComponent, ToolbarComponent = _a === void 0 ? DefaultToolbarComponent : _a, value = allProps.value, views = allProps.views, title = allProps.title, invalidDateMessage = allProps.invalidDateMessage, minDateMessage = allProps.minDateMessage, maxDateMessage = allProps.maxDateMessage, 
        // WrapperProps
        clearable = allProps.clearable, clearLabel = allProps.clearLabel, DialogProps = allProps.DialogProps, PopoverProps = allProps.PopoverProps, okLabel = allProps.okLabel, cancelLabel = allProps.cancelLabel, todayLabel = allProps.todayLabel, restPropsForTextField = __rest(allProps, ["allowKeyboardControl", "ampm", "ampmInClock", "autoOk", "dateRangeIcon", "disableFuture", "disablePast", "showToolbar", "format", "hideTabs", "initialFocusedDate", "leftArrowButtonProps", "leftArrowIcon", "loadingIndicator", "maxDate", "minDate", "minutesStep", "onAccept", "onChange", "onClose", "onMonthChange", "onOpen", "onYearChange", "openTo", "orientation", "renderDay", "rightArrowButtonProps", "rightArrowIcon", "shouldDisableDate", "showLeftArrowButton", "showRightArrowButton", "strictCompareDates", "timeIcon", "ToolbarComponent", "value", "views", "title", "invalidDateMessage", "minDateMessage", "maxDateMessage", "clearable", "clearLabel", "DialogProps", "PopoverProps", "okLabel", "cancelLabel", "todayLabel"]);
        var _b = usePickerState_1.usePickerState(allProps), pickerProps = _b.pickerProps, inputProps = _b.inputProps, wrapperProps = _b.wrapperProps;
        var WrapperComponent = Wrapper;
        return (React.createElement(WrapperComponent, __assign({ clearable: clearable, clearLabel: clearLabel, DialogProps: DialogProps, okLabel: okLabel, todayLabel: todayLabel, cancelLabel: cancelLabel, DateInputProps: inputProps }, wrapperProps, restPropsForTextField),
            React.createElement(Picker_1.Picker, __assign({}, pickerProps, { DateInputProps: __assign(__assign({}, inputProps), restPropsForTextField), title: title, allowKeyboardControl: allowKeyboardControl, ampm: ampm, ampmInClock: ampmInClock, dateRangeIcon: dateRangeIcon, disableFuture: disableFuture, disablePast: disablePast, showToolbar: showToolbar, hideTabs: hideTabs, leftArrowButtonProps: leftArrowButtonProps, leftArrowIcon: leftArrowIcon, loadingIndicator: loadingIndicator, maxDate: maxDate, minDate: minDate, minutesStep: minutesStep, onMonthChange: onMonthChange, onYearChange: onYearChange, openTo: openTo, orientation: orientation, renderDay: renderDay, rightArrowButtonProps: rightArrowButtonProps, rightArrowIcon: rightArrowIcon, shouldDisableDate: shouldDisableDate, showLeftArrowButton: showLeftArrowButton, showRightArrowButton: showRightArrowButton, strictCompareDates: strictCompareDates, timeIcon: timeIcon, ToolbarComponent: ToolbarComponent, views: views }))));
    }
    return PickerWithState;
}
exports.makePickerWithStateAndWrapper = makePickerWithStateAndWrapper;
