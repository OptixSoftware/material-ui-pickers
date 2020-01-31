"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var useUtils_1 = require("./useUtils");
var useOpenState_1 = require("./useOpenState");
var text_field_helper_1 = require("../../_helpers/text-field-helper");
var react_1 = require("react");
var useValueToDate = function (utils, _a) {
    var value = _a.value, initialFocusedDate = _a.initialFocusedDate;
    var nowRef = react_1.useRef(utils.date());
    var date = utils.date(value || initialFocusedDate || nowRef.current);
    return date && utils.isValid(date) ? date : nowRef.current;
};
function useDateValues(props) {
    var utils = useUtils_1.useUtils();
    var date = useValueToDate(utils, props);
    var format = props.format;
    if (!format) {
        throw new Error('format prop is required');
    }
    return { date: date, format: format };
}
function usePickerState(props) {
    var autoOk = props.autoOk, disabled = props.disabled, readOnly = props.readOnly, onAccept = props.onAccept, onChange = props.onChange, onError = props.onError, value = props.value;
    var utils = useUtils_1.useUtils();
    var _a = useDateValues(props), date = _a.date, format = _a.format;
    var _b = react_1.useState(date), pickerDate = _b[0], setPickerDate = _b[1];
    // Mobile keyboard view is a special case.
    // When it's open picker should work like closed, cause we are just showing text field
    var _c = react_1.useState(false), isMobileKeyboardViewOpen = _c[0], setMobileKeyboardViewOpen = _c[1];
    var _d = useOpenState_1.useOpenState(props), isOpen = _d.isOpen, setIsOpen = _d.setIsOpen;
    react_1.useEffect(function () {
        // if value was changed in closed state or from mobile keyboard view - treat it as accepted
        if ((!isOpen || isMobileKeyboardViewOpen) && !utils.isEqual(pickerDate, date)) {
            setPickerDate(date);
        }
    }, [date, isMobileKeyboardViewOpen, isOpen, pickerDate, utils]);
    var acceptDate = react_1.useCallback(function (acceptedDate) {
        onChange(acceptedDate);
        if (onAccept) {
            onAccept(acceptedDate);
        }
        setIsOpen(false);
    }, [onAccept, onChange, setIsOpen]);
    var wrapperProps = react_1.useMemo(function () { return ({
        format: format,
        open: isOpen,
        onClear: function () { return acceptDate(null); },
        onAccept: function () { return acceptDate(pickerDate); },
        onSetToday: function () { return setPickerDate(utils.date()); },
        onDismiss: function () { return setIsOpen(false); },
    }); }, [acceptDate, format, isOpen, pickerDate, setIsOpen, utils]);
    var pickerProps = react_1.useMemo(function () { return ({
        date: pickerDate,
        isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
        toggleMobileKeyboardView: function () {
            if (!isMobileKeyboardViewOpen) {
                // accept any partial input done by user
                setPickerDate(pickerDate);
            }
            setMobileKeyboardViewOpen(!isMobileKeyboardViewOpen);
        },
        onDateChange: function (newDate, currentVariant, isFinish) {
            if (isFinish === void 0) { isFinish = true; }
            setPickerDate(newDate);
            if (isFinish && autoOk) {
                acceptDate(newDate);
                return;
            }
            // simulate autoOk, but do not close the modal
            if (currentVariant === 'desktop' || currentVariant === 'static') {
                onChange(newDate);
                onAccept && onAccept(newDate);
            }
        },
    }); }, [acceptDate, autoOk, isMobileKeyboardViewOpen, onAccept, onChange, pickerDate]);
    var validationError = text_field_helper_1.validate(value, utils, props);
    react_1.useEffect(function () {
        if (onError) {
            onError(validationError, value);
        }
    }, [onError, validationError, value]);
    var inputProps = react_1.useMemo(function () { return ({
        onChange: onChange,
        format: format,
        rawValue: value,
        validationError: validationError,
        openPicker: function () { return !readOnly && !disabled && setIsOpen(true); },
    }); }, [disabled, format, onChange, readOnly, setIsOpen, validationError, value]);
    var pickerState = { pickerProps: pickerProps, inputProps: inputProps, wrapperProps: wrapperProps };
    react_1.useDebugValue(pickerState, function () { return ({
        MuiPickerState: {
            pickerDate: pickerDate,
            parsedDate: date,
            other: pickerState,
        },
    }); });
    return pickerState;
}
exports.usePickerState = usePickerState;
