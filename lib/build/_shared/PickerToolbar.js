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
var Toolbar_1 = __importDefault(require("@material-ui/core/Toolbar"));
var PenIcon_1 = require("../_shared/icons/PenIcon");
var KeyboardIcon_1 = require("./icons/KeyboardIcon");
var styles_1 = require("@material-ui/core/styles");
var core_1 = require("@material-ui/core");
exports.useStyles = styles_1.makeStyles(function (theme) {
    var toolbarBackground = theme.palette.type === 'light'
        ? theme.palette.primary.main
        : theme.palette.background.default;
    return {
        toolbar: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            paddingTop: 16,
            paddingBottom: 16,
            backgroundColor: toolbarBackground,
            color: theme.palette.getContrastText(toolbarBackground),
        },
        toolbarLandscape: {
            height: 'auto',
            maxWidth: 160,
            padding: 16,
            justifyContent: 'flex-start',
            flexWrap: 'wrap',
        },
        dateTitleContainer: {
            flex: 1,
        },
    };
}, { name: 'MuiPickersToolbar' });
var PickerToolbar = function (_a) {
    var _b;
    var children = _a.children, isLandscape = _a.isLandscape, title = _a.title, _c = _a.landscapeDirection, landscapeDirection = _c === void 0 ? 'column' : _c, _d = _a.className, className = _d === void 0 ? null : _d, penIconClassName = _a.penIconClassName, toggleMobileKeyboardView = _a.toggleMobileKeyboardView, isMobileKeyboardViewOpen = _a.isMobileKeyboardViewOpen, other = __rest(_a, ["children", "isLandscape", "title", "landscapeDirection", "className", "penIconClassName", "toggleMobileKeyboardView", "isMobileKeyboardViewOpen"]);
    var classes = exports.useStyles();
    return (React.createElement(Toolbar_1.default, __assign({ "data-mui-test": "picker-toolbar", className: clsx_1.default(classes.toolbar, (_b = {}, _b[classes.toolbarLandscape] = isLandscape, _b), className) }, other),
        React.createElement(core_1.Typography, { color: "inherit", variant: "overline", children: title }),
        React.createElement(core_1.Grid, { container: true, justify: "space-between", className: classes.dateTitleContainer, direction: isLandscape ? landscapeDirection : 'row', alignItems: isLandscape ? 'flex-start' : 'flex-end' },
            children,
            React.createElement(core_1.IconButton, { onClick: toggleMobileKeyboardView, className: penIconClassName, color: "inherit", "data-mui-test": "toggle-mobile-keyboard-view" }, isMobileKeyboardViewOpen ? (React.createElement(KeyboardIcon_1.KeyboardIcon, { color: "inherit" })) : (React.createElement(PenIcon_1.PenIcon, { color: "inherit" }))))));
};
exports.default = PickerToolbar;
