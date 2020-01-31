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
var PropTypes = __importStar(require("prop-types"));
var clsx_1 = __importDefault(require("clsx"));
var core_1 = require("@material-ui/core");
var styles_1 = require("@material-ui/core/styles");
exports.useStyles = styles_1.makeStyles(function (theme) { return ({
    day: {
        margin: '1px 2px',
        width: 36,
        height: 36,
        borderRadius: '50%',
        padding: 0,
        color: theme.palette.text.primary,
        fontSize: theme.typography.caption.fontSize,
        fontWeight: theme.typography.fontWeightMedium,
        '&:focus': {
            backgroundColor: styles_1.fade(theme.palette.action.active, theme.palette.action.hoverOpacity),
        },
        '&:hover': {
            backgroundColor: styles_1.fade(theme.palette.action.active, theme.palette.action.hoverOpacity),
        },
    },
    hidden: {
        opacity: 0,
        pointerEvents: 'none',
    },
    current: {
        '&:not($daySelected)': {
            border: "1px solid " + theme.palette.text.hint,
        },
    },
    daySelected: {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium,
        transition: theme.transitions.create('background-color', {
            duration: theme.transitions.duration.short,
        }),
        '&:hover': {
            willChange: 'background-color',
            backgroundColor: theme.palette.primary.light,
        },
        '&:focus': {
            willChange: 'background-color',
            backgroundColor: theme.palette.primary.light,
        },
    },
    dayDisabled: {
        pointerEvents: 'none',
        color: theme.palette.text.hint,
    },
    dayLabel: {
    // need for overrides
    },
}); }, { name: 'MuiPickersDay' });
exports.Day = function (_a) {
    var _b;
    var children = _a.children, disabled = _a.disabled, hidden = _a.hidden, current = _a.current, selected = _a.selected, other = __rest(_a, ["children", "disabled", "hidden", "current", "selected"]);
    var classes = exports.useStyles();
    var className = clsx_1.default(classes.day, (_b = {},
        _b[classes.hidden] = hidden,
        _b[classes.current] = current,
        _b[classes.daySelected] = selected,
        _b[classes.dayDisabled] = disabled,
        _b));
    return (React.createElement(core_1.ButtonBase, __assign({ "data-mui-test": "day", centerRipple: true, className: className, tabIndex: hidden || disabled ? -1 : 0 }, other),
        React.createElement("span", { className: classes.dayLabel }, children)));
};
exports.Day.displayName = 'Day';
exports.Day.propTypes = {
    current: PropTypes.bool,
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
    selected: PropTypes.bool,
};
exports.Day.defaultProps = {
    disabled: false,
    hidden: false,
    current: false,
    selected: false,
};
exports.default = exports.Day;
