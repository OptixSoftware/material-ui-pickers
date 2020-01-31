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
var Button_1 = __importDefault(require("@material-ui/core/Button"));
var DialogActions_1 = __importDefault(require("@material-ui/core/DialogActions"));
var DialogContent_1 = __importDefault(require("@material-ui/core/DialogContent"));
var Dialog_1 = __importDefault(require("@material-ui/core/Dialog"));
var styles_1 = require("@material-ui/core/styles");
var dimensions_1 = require("../constants/dimensions");
exports.useStyles = styles_1.makeStyles({
    dialogRoot: {
        minWidth: dimensions_1.DIALOG_WIDTH,
    },
    dialogRootWider: {
        minWidth: dimensions_1.DIALOG_WIDTH_WIDER,
    },
    dialog: {
        '&:first-child': {
            padding: 0,
        },
    },
    withAdditionalAction: {
        // set justifyContent to default value to fix IE11 layout bug
        // see https://github.com/dmtrKovalenko/material-ui-pickers/pull/267
        justifyContent: 'flex-start',
        '& > *:first-child': {
            marginRight: 'auto',
        },
    },
}, { name: 'MuiPickersModal' });
exports.ModalDialog = function (_a) {
    var _b, _c;
    var children = _a.children, onAccept = _a.onAccept, onDismiss = _a.onDismiss, onClear = _a.onClear, onSetToday = _a.onSetToday, okLabel = _a.okLabel, cancelLabel = _a.cancelLabel, clearLabel = _a.clearLabel, todayLabel = _a.todayLabel, clearable = _a.clearable, showTodayButton = _a.showTodayButton, showTabs = _a.showTabs, wider = _a.wider, other = __rest(_a, ["children", "onAccept", "onDismiss", "onClear", "onSetToday", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "clearable", "showTodayButton", "showTabs", "wider"]);
    var classes = exports.useStyles();
    return (React.createElement(Dialog_1.default, __assign({ onClose: onDismiss, classes: {
            paper: clsx_1.default(classes.dialogRoot, (_b = {},
                _b[classes.dialogRootWider] = wider,
                _b)),
        } }, other),
        React.createElement(DialogContent_1.default, { children: children, className: classes.dialog }),
        React.createElement(DialogActions_1.default, { className: clsx_1.default((_c = {},
                _c[classes.withAdditionalAction] = clearable || showTodayButton,
                _c)) },
            clearable && (React.createElement(Button_1.default, { color: "primary", onClick: onClear }, clearLabel)),
            showTodayButton && (React.createElement(Button_1.default, { color: "primary", onClick: onSetToday }, todayLabel)),
            cancelLabel && (React.createElement(Button_1.default, { color: "primary", onClick: onDismiss }, cancelLabel)),
            okLabel && (React.createElement(Button_1.default, { color: "primary", onClick: onAccept }, okLabel)))));
};
exports.ModalDialog.displayName = 'ModalDialog';
exports.default = exports.ModalDialog;
