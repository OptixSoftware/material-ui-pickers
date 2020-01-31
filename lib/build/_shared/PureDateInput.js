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
var TextField_1 = __importDefault(require("@material-ui/core/TextField"));
var useUtils_1 = require("./hooks/useUtils");
var text_field_helper_1 = require("../_helpers/text-field-helper");
exports.PureDateInput = function (_a) {
    var onChange = _a.onChange, format = _a.format, rifmFormatter = _a.rifmFormatter, refuse = _a.refuse, mask = _a.mask, rawValue = _a.rawValue, maskChar = _a.maskChar, validationError = _a.validationError, InputProps = _a.InputProps, onOpen = _a.openPicker, _b = _a.TextFieldComponent, TextFieldComponent = _b === void 0 ? TextField_1.default : _b, variant = _a.variant, emptyLabel = _a.emptyLabel, invalidLabel = _a.invalidLabel, labelFunc = _a.labelFunc, hideOpenPickerButton = _a.hideOpenPickerButton, ignoreInvalidInputs = _a.ignoreInvalidInputs, KeyboardButtonProps = _a.KeyboardButtonProps, other = __rest(_a, ["onChange", "format", "rifmFormatter", "refuse", "mask", "rawValue", "maskChar", "validationError", "InputProps", "openPicker", "TextFieldComponent", "variant", "emptyLabel", "invalidLabel", "labelFunc", "hideOpenPickerButton", "ignoreInvalidInputs", "KeyboardButtonProps"]);
    var utils = useUtils_1.useUtils();
    var PureDateInputProps = React.useMemo(function () { return (__assign(__assign({}, InputProps), { readOnly: true })); }, [InputProps]);
    var inputValue = text_field_helper_1.getDisplayDate(rawValue, utils, {
        format: format,
        emptyLabel: emptyLabel,
        invalidLabel: invalidLabel,
        labelFunc: labelFunc,
    });
    return (React.createElement(TextFieldComponent, __assign({ variant: variant, error: Boolean(validationError), helperText: validationError }, other, { 
        // do not overridable
        onClick: onOpen, value: inputValue, InputProps: PureDateInputProps, onKeyDown: function (e) {
            // space
            if (e.keyCode === 32) {
                e.stopPropagation();
                onOpen();
            }
        } })));
};
exports.PureDateInput.displayName = 'PureDateInput';
