"use strict";
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
var PropTypes = __importStar(require("prop-types"));
var clsx_1 = __importDefault(require("clsx"));
var ClockPointer_1 = __importDefault(require("./ClockPointer"));
var dimensions_1 = require("../../constants/dimensions");
var time_utils_1 = require("../../_helpers/time-utils");
var TimePickerToolbar_1 = require("../../TimePicker/TimePickerToolbar");
var core_1 = require("@material-ui/core");
var WrapperVariantContext_1 = require("../../wrappers/WrapperVariantContext");
exports.useStyles = core_1.makeStyles(function (theme) { return ({
    container: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        minHeight: dimensions_1.VIEW_HEIGHT,
        alignItems: 'center',
    },
    clock: {
        backgroundColor: 'rgba(0,0,0,.07)',
        borderRadius: '50%',
        height: 260,
        width: 260,
        position: 'relative',
        pointerEvents: 'none',
    },
    squareMask: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        pointerEvents: 'auto',
        outline: 'none',
        touchActions: 'none',
        userSelect: 'none',
        '&:active': {
            cursor: 'move',
        },
    },
    pin: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        backgroundColor: theme.palette.primary.main,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    amButton: {
        zIndex: 1,
        left: 8,
        position: 'absolute',
        bottom: 8,
    },
    pmButton: {
        zIndex: 1,
        position: 'absolute',
        bottom: 8,
        right: 8,
    },
    meridiemButtonSelected: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
    },
}); }, {
    name: 'MuiPickersClock',
});
exports.Clock = function (_a) {
    var _b, _c;
    var date = _a.date, onDateChange = _a.onDateChange, _d = _a.ampmInClock, ampmInClock = _d === void 0 ? false : _d, value = _a.value, numbersElementsArray = _a.children, type = _a.type, ampm = _a.ampm, minutesStep = _a.minutesStep, onChange = _a.onChange;
    var classes = exports.useStyles();
    var wrapperVariant = React.useContext(WrapperVariantContext_1.WrapperVariantContext);
    var isMoving = React.useRef(false);
    var _e = TimePickerToolbar_1.useMeridiemMode(date, ampm, onDateChange), meridiemMode = _e.meridiemMode, handleMeridiemChange = _e.handleMeridiemChange;
    var isPointerInner = !ampm && type === 'hours' && (value < 1 || value > 12);
    var setTime = function (e, isFinish) {
        if (isFinish === void 0) { isFinish = false; }
        var offsetX = e.offsetX, offsetY = e.offsetY;
        if (typeof offsetX === 'undefined') {
            var rect = e.target.getBoundingClientRect();
            offsetX = e.changedTouches[0].clientX - rect.left;
            offsetY = e.changedTouches[0].clientY - rect.top;
        }
        var value = type === 'seconds' || type === 'minutes'
            ? time_utils_1.getMinutes(offsetX, offsetY, minutesStep)
            : time_utils_1.getHours(offsetX, offsetY, Boolean(ampm));
        onChange(value, isFinish);
    };
    var handleTouchMove = function (e) {
        isMoving.current = true;
        setTime(e);
    };
    var handleTouchEnd = function (e) {
        if (isMoving.current) {
            setTime(e, true);
            isMoving.current = false;
        }
    };
    var handleMouseMove = function (e) {
        e.preventDefault();
        e.stopPropagation();
        // MouseEvent.which is deprecated, but MouseEvent.buttons is not supported in Safari
        var isButtonPressed = typeof e.buttons === 'undefined' ? e.nativeEvent.which === 1 : e.buttons === 1;
        if (isButtonPressed) {
            setTime(e.nativeEvent, false);
        }
    };
    var handleMouseUp = function (e) {
        if (isMoving.current) {
            isMoving.current = false;
        }
        setTime(e.nativeEvent, true);
    };
    var hasSelected = React.useMemo(function () {
        if (type === 'hours') {
            return true;
        }
        return value % 5 === 0;
    }, [type, value]);
    return (React.createElement("div", { className: classes.container },
        React.createElement("div", { className: classes.clock },
            React.createElement("div", { role: "menu", tabIndex: -1, className: classes.squareMask, onTouchMove: handleTouchMove, onTouchEnd: handleTouchEnd, onMouseUp: handleMouseUp, onMouseMove: handleMouseMove }),
            React.createElement("div", { className: classes.pin }),
            React.createElement(ClockPointer_1.default, { type: type, value: value, isInner: isPointerInner, hasSelected: hasSelected }),
            numbersElementsArray),
        ampm && (wrapperVariant === 'desktop' || ampmInClock) && (React.createElement(React.Fragment, null,
            React.createElement(core_1.IconButton, { "data-mui-test": "in-clock-am-btn", onClick: function () { return handleMeridiemChange('am'); }, className: clsx_1.default(classes.amButton, (_b = {},
                    _b[classes.meridiemButtonSelected] = meridiemMode === 'am',
                    _b)) },
                React.createElement(core_1.Typography, { variant: "caption" }, "AM")),
            React.createElement(core_1.IconButton, { "data-mui-test": "in-clock-pm-btn", onClick: function () { return handleMeridiemChange('pm'); }, className: clsx_1.default(classes.pmButton, (_c = {},
                    _c[classes.meridiemButtonSelected] = meridiemMode === 'pm',
                    _c)) },
                React.createElement(core_1.Typography, { variant: "caption" }, "PM"))))));
};
// @ts-ignore
exports.Clock.defaultProps = {
    ampm: PropTypes.bool,
    minutesStep: PropTypes.number,
};
exports.Clock.displayName = 'Clock';
exports.default = exports.Clock;
