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
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var styles_1 = require("@material-ui/core/styles");
var WrapperVariantContext_1 = require("../../wrappers/WrapperVariantContext");
exports.useStyles = styles_1.makeStyles(function (theme) { return ({
    yearContainer: {
        flexBasis: '33.3%',
        display: 'flex',
        justifyContent: 'center',
        padding: '8px 0',
    },
    yearContainerDesktop: {
        flexBasis: '25%',
    },
    yearLabel: {
        height: 36,
        width: 72,
        borderRadius: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        outline: 'none',
        '&:focus': {
            backgroundColor: styles_1.fade(theme.palette.action.active, theme.palette.action.hoverOpacity),
        },
    },
    yearSelected: {
        color: theme.palette.getContrastText(theme.palette.primary.main),
        backgroundColor: theme.palette.primary.main,
        '&:focus': {
            backgroundColor: theme.palette.primary.light,
        },
    },
    yearDisabled: {
        pointerEvents: 'none',
        color: theme.palette.text.hint,
    },
}); }, { name: 'MuiPickersYear' });
exports.Year = function (_a) {
    var _b, _c;
    var onSelect = _a.onSelect, forwardedRef = _a.forwardedRef, value = _a.value, selected = _a.selected, disabled = _a.disabled, children = _a.children, other = __rest(_a, ["onSelect", "forwardedRef", "value", "selected", "disabled", "children"]);
    var classes = exports.useStyles();
    var wrapperVariant = React.useContext(WrapperVariantContext_1.WrapperVariantContext);
    var handleClick = React.useCallback(function () { return onSelect(value); }, [onSelect, value]);
    return (React.createElement("div", { role: "button", onClick: handleClick, className: clsx_1.default(classes.yearContainer, (_b = {},
            _b[classes.yearContainerDesktop] = wrapperVariant === 'desktop',
            _b)) },
        React.createElement(Typography_1.default, __assign({ variant: "subtitle1", tabIndex: disabled ? -1 : 0, onKeyPress: handleClick, color: selected ? 'primary' : undefined, children: children, ref: forwardedRef, className: clsx_1.default(classes.yearLabel, (_c = {},
                _c[classes.yearSelected] = selected,
                _c[classes.yearDisabled] = disabled,
                _c)) }, other))));
};
exports.Year.displayName = 'Year';
exports.default = React.forwardRef(function (props, ref) { return (React.createElement(exports.Year, __assign({}, props, { forwardedRef: ref }))); });
