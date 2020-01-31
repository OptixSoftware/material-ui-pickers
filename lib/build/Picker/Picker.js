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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var clsx_1 = __importDefault(require("clsx"));
var useViews_1 = require("../_shared/hooks/useViews");
var styles_1 = require("@material-ui/core/styles");
var CalendarView_1 = require("../views/Calendar/CalendarView");
var useIsLandscape_1 = require("../_shared/hooks/useIsLandscape");
var dimensions_1 = require("../constants/dimensions");
var ClockView_1 = require("../views/Clock/ClockView");
var WrapperVariantContext_1 = require("../wrappers/WrapperVariantContext");
var MobileKeyboardInputView_1 = require("../views/MobileKeyboardInputView");
exports.useStyles = styles_1.makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    containerLandscape: {
        flexDirection: 'row',
    },
    pickerView: {
        overflowX: 'hidden',
        width: dimensions_1.DIALOG_WIDTH,
        maxHeight: dimensions_1.VIEW_HEIGHT,
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto',
    },
    pickerViewLandscape: {
        padding: '0 8px',
    },
}, { name: 'MuiPickersBasePicker' });
function Picker(_a) {
    var _b, _c;
    var date = _a.date, _d = _a.openTo, openTo = _d === void 0 ? 'date' : _d, _e = _a.views, views = _e === void 0 ? ['year', 'month', 'date', 'hours', 'minutes', 'seconds'] : _e, title = _a.title, showToolbar = _a.showToolbar, onDateChange = _a.onDateChange, ToolbarComponent = _a.ToolbarComponent, orientation = _a.orientation, DateInputProps = _a.DateInputProps, isMobileKeyboardViewOpen = _a.isMobileKeyboardViewOpen, toggleMobileKeyboardView = _a.toggleMobileKeyboardView, other = __rest(_a, ["date", "openTo", "views", "title", "showToolbar", "onDateChange", "ToolbarComponent", "orientation", "DateInputProps", "isMobileKeyboardViewOpen", "toggleMobileKeyboardView"]);
    var classes = exports.useStyles();
    var isLandscape = useIsLandscape_1.useIsLandscape(views, orientation);
    var wrapperVariant = React.useContext(WrapperVariantContext_1.WrapperVariantContext);
    var onChange = React.useCallback(function (date, isFinish) {
        onDateChange(date, wrapperVariant, isFinish);
    }, [onDateChange, wrapperVariant]);
    var toShowToolbar = typeof showToolbar === 'undefined' ? wrapperVariant !== 'desktop' : showToolbar;
    var _f = useViews_1.useViews({
        views: views,
        openTo: openTo,
        onChange: onChange,
        isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
        toggleMobileKeyboardView: toggleMobileKeyboardView,
    }), openView = _f.openView, setOpenView = _f.setOpenView, handleChangeAndOpenNext = _f.handleChangeAndOpenNext;
    return (React.createElement("div", { className: clsx_1.default(classes.container, (_b = {},
            _b[classes.containerLandscape] = isLandscape,
            _b)) },
        toShowToolbar && (React.createElement(ToolbarComponent, __assign({}, other, { views: views, isLandscape: isLandscape, date: date, onChange: onChange, setOpenView: setOpenView, openView: openView, title: title, ampmInClock: other.ampmInClock, isMobileKeyboardViewOpen: isMobileKeyboardViewOpen, toggleMobileKeyboardView: toggleMobileKeyboardView }))),
        React.createElement("div", { className: clsx_1.default(classes.pickerView, (_c = {},
                _c[classes.pickerViewLandscape] = isLandscape,
                _c)) }, isMobileKeyboardViewOpen ? (React.createElement(MobileKeyboardInputView_1.MobileKeyboardInputView, __assign({}, DateInputProps))) : (React.createElement(React.Fragment, null,
            (openView === 'year' || openView === 'month' || openView === 'date') && (React.createElement(CalendarView_1.CalendarView, __assign({ date: date, changeView: setOpenView, 
                // @ts-ignore
                views: views, onChange: handleChangeAndOpenNext, view: openView }, other))),
            (openView === 'hours' || openView === 'minutes' || openView === 'seconds') && (React.createElement(ClockView_1.ClockView, __assign({}, other, { date: date, type: openView, onDateChange: onChange, onHourChange: handleChangeAndOpenNext, onMinutesChange: handleChangeAndOpenNext, onSecondsChange: handleChangeAndOpenNext }))))))));
}
exports.Picker = Picker;
Picker.displayName = 'Picker';
