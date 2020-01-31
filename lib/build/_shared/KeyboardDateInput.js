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
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var InputAdornment_1 = __importDefault(require("@material-ui/core/InputAdornment"));
var rifm_1 = require("rifm");
var useUtils_1 = require("./hooks/useUtils");
var KeyboardIcon_1 = require("./icons/KeyboardIcon");
var text_field_helper_1 = require("../_helpers/text-field-helper");
exports.KeyboardDateInput = function (_a) {
    var rawValue = _a.rawValue, validationError = _a.validationError, KeyboardButtonProps = _a.KeyboardButtonProps, InputAdornmentProps = _a.InputAdornmentProps, onOpen = _a.openPicker, onChange = _a.onChange, InputProps = _a.InputProps, mask = _a.mask, _b = _a.maskChar, maskChar = _b === void 0 ? '_' : _b, _c = _a.refuse, refuse = _c === void 0 ? /[^\d]+/gi : _c, format = _a.format, disabled = _a.disabled, rifmFormatter = _a.rifmFormatter, _d = _a.TextFieldComponent, TextFieldComponent = _d === void 0 ? TextField_1.default : _d, _e = _a.keyboardIcon, keyboardIcon = _e === void 0 ? React.createElement(KeyboardIcon_1.KeyboardIcon, null) : _e, variant = _a.variant, emptyLabel = _a.emptyLabel, invalidLabel = _a.invalidLabel, labelFunc = _a.labelFunc, hideOpenPickerButton = _a.hideOpenPickerButton, ignoreInvalidInputs = _a.ignoreInvalidInputs, other = __rest(_a, ["rawValue", "validationError", "KeyboardButtonProps", "InputAdornmentProps", "openPicker", "onChange", "InputProps", "mask", "maskChar", "refuse", "format", "disabled", "rifmFormatter", "TextFieldComponent", "keyboardIcon", "variant", "emptyLabel", "invalidLabel", "labelFunc", "hideOpenPickerButton", "ignoreInvalidInputs"]);
    var utils = useUtils_1.useUtils();
    var getInputValue = function () {
        return text_field_helper_1.getDisplayDate(rawValue, utils, {
            format: format,
            emptyLabel: emptyLabel,
            invalidLabel: invalidLabel,
            labelFunc: labelFunc,
        });
    };
    var _f = React.useState(getInputValue()), innerInputValue = _f[0], setInnerInputValue = _f[1];
    var inputMask = mask || text_field_helper_1.makeMaskFromFormat(format, maskChar);
    // prettier-ignore
    var formatter = React.useMemo(function () { return text_field_helper_1.maskedDateFormatter(inputMask, maskChar, refuse); }, [inputMask, maskChar, refuse]);
    React.useEffect(function () {
        if (rawValue === null || utils.isValid(rawValue)) {
            setInnerInputValue(getInputValue());
        }
    }, [rawValue]); // eslint-disable-line
    var position = InputAdornmentProps && InputAdornmentProps.position ? InputAdornmentProps.position : 'end';
    var handleChange = function (text) {
        var finalString = text === '' || text === inputMask ? null : text;
        setInnerInputValue(finalString);
        var date = finalString === null ? null : utils.parse(finalString, format);
        if (ignoreInvalidInputs && !utils.isValid(date)) {
            return;
        }
        onChange(date, finalString || undefined);
    };
    return (React.createElement(rifm_1.Rifm, { key: inputMask, value: innerInputValue || '', onChange: handleChange, refuse: refuse, format: rifmFormatter || formatter }, function (_a) {
        var _b;
        var onChange = _a.onChange, value = _a.value;
        return (React.createElement(TextFieldComponent, __assign({ variant: variant, disabled: disabled, error: Boolean(validationError), helperText: validationError, "data-mui-test": "keyboard-date-input" }, other, { value: value, onChange: onChange, InputProps: __assign(__assign({}, InputProps), (_b = {}, _b[position + "Adornment"] = hideOpenPickerButton ? (undefined) : (React.createElement(InputAdornment_1.default, __assign({ position: position }, InputAdornmentProps),
                React.createElement(IconButton_1.default, __assign({ "data-mui-test": "open-picker-from-keyboard", disabled: disabled }, KeyboardButtonProps, { onClick: onOpen }), keyboardIcon))), _b)) })));
    }));
};
exports.default = exports.KeyboardDateInput;
