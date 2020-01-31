import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import { createElement, useMemo, useRef, useState, useCallback, useEffect, useDebugValue } from 'react';
import { oneOfType, object, string, number, instanceOf, oneOf, node, bool, func } from 'prop-types';
import { u as useUtils } from './utils-8f701c09.js';
import clsx from 'clsx';
import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import { D as DIALOG_WIDTH, a as DIALOG_WIDTH_WIDER, W as WrapperVariantContext } from './WrapperVariantContext-974ae6a0.js';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import { g as getDisplayDate, K as KeyboardDateInput, v as validate, P as Picker } from './Picker-cb6f1659.js';
import { a as useKeyDownHandler } from './useKeyDown-2d987085.js';
import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';
import Popover from '@material-ui/core/Popover';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var date = oneOfType([object, string, number, instanceOf(Date)]);
var datePickerView = oneOf(['year', 'month', 'day']);
/* eslint-disable @typescript-eslint/no-object-literal-type-assertion */

var timePickerDefaultProps = {
  ampm: false,
  invalidDateMessage: 'Invalid Time Format'
};
var datePickerDefaultProps = {
  minDate: new Date('1900-01-01'),
  maxDate: new Date('2100-01-01'),
  invalidDateMessage: 'Invalid Date Format',
  minDateMessage: 'Date should not be before minimal date',
  maxDateMessage: 'Date should not be after maximal date',
  allowKeyboardControl: true,
  showLeftArrowButton: true,
  showRightArrowButton: true
};
var dateTimePickerDefaultProps = _objectSpread({}, timePickerDefaultProps, {}, datePickerDefaultProps, {
  showTabs: true
});

var useStyles = makeStyles({
  dialogRoot: {
    minWidth: DIALOG_WIDTH
  },
  dialogRootWider: {
    minWidth: DIALOG_WIDTH_WIDER
  },
  dialog: {
    '&:first-child': {
      padding: 0
    }
  },
  withAdditionalAction: {
    // set justifyContent to default value to fix IE11 layout bug
    // see https://github.com/dmtrKovalenko/material-ui-pickers/pull/267
    justifyContent: 'flex-start',
    '& > *:first-child': {
      marginRight: 'auto'
    }
  }
}, {
  name: 'MuiPickersModal'
});
var ModalDialog = function ModalDialog(_ref) {
  var children = _ref.children,
      onAccept = _ref.onAccept,
      onDismiss = _ref.onDismiss,
      onClear = _ref.onClear,
      onSetToday = _ref.onSetToday,
      okLabel = _ref.okLabel,
      cancelLabel = _ref.cancelLabel,
      clearLabel = _ref.clearLabel,
      todayLabel = _ref.todayLabel,
      clearable = _ref.clearable,
      showTodayButton = _ref.showTodayButton,
      showTabs = _ref.showTabs,
      wider = _ref.wider,
      other = _objectWithoutProperties(_ref, ["children", "onAccept", "onDismiss", "onClear", "onSetToday", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "clearable", "showTodayButton", "showTabs", "wider"]);

  var classes = useStyles();
  return createElement(Dialog, _extends({
    onClose: onDismiss,
    classes: {
      paper: clsx(classes.dialogRoot, wider && classes.dialogRootWider)
    }
  }, other), createElement(DialogContent, {
    children: children,
    className: classes.dialog
  }), createElement(DialogActions, {
    className: clsx((clearable || showTodayButton) && classes.withAdditionalAction)
  }, clearable && createElement(Button, {
    color: "primary",
    onClick: onClear
  }, clearLabel), showTodayButton && createElement(Button, {
    color: "primary",
    onClick: onSetToday
  }, todayLabel), cancelLabel && createElement(Button, {
    color: "primary",
    onClick: onDismiss
  }, cancelLabel), okLabel && createElement(Button, {
    color: "primary",
    onClick: onAccept
  }, okLabel)));
};
ModalDialog.displayName = 'ModalDialog';

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var PureDateInput = function PureDateInput(_ref) {
  var onChange = _ref.onChange,
      format = _ref.format,
      rifmFormatter = _ref.rifmFormatter,
      refuse = _ref.refuse,
      mask = _ref.mask,
      rawValue = _ref.rawValue,
      maskChar = _ref.maskChar,
      validationError = _ref.validationError,
      InputProps = _ref.InputProps,
      onOpen = _ref.openPicker,
      _ref$TextFieldCompone = _ref.TextFieldComponent,
      TextFieldComponent = _ref$TextFieldCompone === void 0 ? TextField : _ref$TextFieldCompone,
      variant = _ref.variant,
      emptyLabel = _ref.emptyLabel,
      invalidLabel = _ref.invalidLabel,
      labelFunc = _ref.labelFunc,
      hideOpenPickerButton = _ref.hideOpenPickerButton,
      ignoreInvalidInputs = _ref.ignoreInvalidInputs,
      KeyboardButtonProps = _ref.KeyboardButtonProps,
      other = _objectWithoutProperties(_ref, ["onChange", "format", "rifmFormatter", "refuse", "mask", "rawValue", "maskChar", "validationError", "InputProps", "openPicker", "TextFieldComponent", "variant", "emptyLabel", "invalidLabel", "labelFunc", "hideOpenPickerButton", "ignoreInvalidInputs", "KeyboardButtonProps"]);

  var utils = useUtils();
  var PureDateInputProps = useMemo(function () {
    return _objectSpread$1({}, InputProps, {
      readOnly: true
    });
  }, [InputProps]);
  var inputValue = getDisplayDate(rawValue, utils, {
    format: format,
    emptyLabel: emptyLabel,
    invalidLabel: invalidLabel,
    labelFunc: labelFunc
  });
  return createElement(TextFieldComponent, _extends({
    variant: variant,
    error: Boolean(validationError),
    helperText: validationError
  }, other, {
    // do not overridable
    onClick: onOpen,
    value: inputValue,
    InputProps: PureDateInputProps,
    onKeyDown: function onKeyDown(e) {
      // space
      if (e.keyCode === 32) {
        e.stopPropagation();
        onOpen();
      }
    }
  }));
};
PureDateInput.displayName = 'PureDateInput';

var MobileWrapper = function MobileWrapper(_ref) {
  var open = _ref.open,
      children = _ref.children,
      okLabel = _ref.okLabel,
      cancelLabel = _ref.cancelLabel,
      clearLabel = _ref.clearLabel,
      todayLabel = _ref.todayLabel,
      showTodayButton = _ref.showTodayButton,
      clearable = _ref.clearable,
      DialogProps = _ref.DialogProps,
      showTabs = _ref.showTabs,
      wider = _ref.wider,
      DateInputProps = _ref.DateInputProps,
      onClear = _ref.onClear,
      onAccept = _ref.onAccept,
      onDismiss = _ref.onDismiss,
      onSetToday = _ref.onSetToday,
      PopoverProps = _ref.PopoverProps,
      other = _objectWithoutProperties(_ref, ["open", "children", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "showTodayButton", "clearable", "DialogProps", "showTabs", "wider", "DateInputProps", "onClear", "onAccept", "onDismiss", "onSetToday", "PopoverProps"]);

  var handleKeyDown = useKeyDownHandler(open, {
    13: onAccept // Enter

  });
  return createElement(WrapperVariantContext.Provider, {
    value: "mobile"
  }, createElement(PureDateInput, _extends({}, other, DateInputProps)), createElement(ModalDialog, _extends({
    onKeyDown: handleKeyDown,
    wider: wider,
    showTabs: showTabs,
    open: open,
    onClear: onClear,
    onAccept: onAccept,
    onDismiss: onDismiss,
    onSetToday: onSetToday,
    clearLabel: clearLabel,
    todayLabel: todayLabel,
    okLabel: okLabel,
    cancelLabel: cancelLabel,
    clearable: clearable,
    showTodayButton: showTodayButton,
    children: children,
    "data-mui-test": "mobile-wrapper-dialog"
  }, DialogProps)));
};
process.env.NODE_ENV !== "production" ? MobileWrapper.propTypes = {
  okLabel: node,
  cancelLabel: node,
  clearLabel: node,
  clearable: bool,
  todayLabel: node,
  showTodayButton: bool,
  DialogProps: object
} : void 0;
MobileWrapper.defaultProps = {
  okLabel: 'OK',
  cancelLabel: 'Cancel',
  clearLabel: 'Clear',
  todayLabel: 'Today',
  clearable: false,
  showTodayButton: false
};

var DesktopWrapper = function DesktopWrapper(_ref) {
  var open = _ref.open,
      wider = _ref.wider,
      children = _ref.children,
      PopoverProps = _ref.PopoverProps,
      onClear = _ref.onClear,
      onDismiss = _ref.onDismiss,
      onSetToday = _ref.onSetToday,
      onAccept = _ref.onAccept,
      showTabs = _ref.showTabs,
      DateInputProps = _ref.DateInputProps,
      okLabel = _ref.okLabel,
      cancelLabel = _ref.cancelLabel,
      clearLabel = _ref.clearLabel,
      todayLabel = _ref.todayLabel,
      showTodayButton = _ref.showTodayButton,
      clearable = _ref.clearable,
      DialogProps = _ref.DialogProps,
      other = _objectWithoutProperties(_ref, ["open", "wider", "children", "PopoverProps", "onClear", "onDismiss", "onSetToday", "onAccept", "showTabs", "DateInputProps", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "showTodayButton", "clearable", "DialogProps"]);

  var ref = useRef();
  var handleKeydown = useKeyDownHandler(open, {
    13: onAccept // Enter

  });
  return createElement(WrapperVariantContext.Provider, {
    value: "desktop"
  }, createElement(KeyboardDateInput, _extends({}, other, DateInputProps, {
    inputRef: ref
  })), createElement(Popover, _extends({
    open: open,
    onClose: onDismiss,
    anchorEl: ref.current,
    onEscapeKeyDown: handleKeydown,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    children: children
  }, PopoverProps)));
};
process.env.NODE_ENV !== "production" ? DesktopWrapper.propTypes = {
  onOpen: func,
  onClose: func,
  PopoverProps: object
} : void 0;

var ResponsiveWrapper = function ResponsiveWrapper(_ref) {
  var _ref$desktopModeBreak = _ref.desktopModeBreakpoint,
      desktopModeBreakpoint = _ref$desktopModeBreak === void 0 ? 'sm' : _ref$desktopModeBreak,
      okLabel = _ref.okLabel,
      cancelLabel = _ref.cancelLabel,
      clearLabel = _ref.clearLabel,
      todayLabel = _ref.todayLabel,
      showTodayButton = _ref.showTodayButton,
      clearable = _ref.clearable,
      DialogProps = _ref.DialogProps,
      PopoverProps = _ref.PopoverProps,
      other = _objectWithoutProperties(_ref, ["desktopModeBreakpoint", "okLabel", "cancelLabel", "clearLabel", "todayLabel", "showTodayButton", "clearable", "DialogProps", "PopoverProps"]);

  var isDesktop = useMediaQuery(function (theme) {
    return theme.breakpoints.up(desktopModeBreakpoint);
  });
  return isDesktop ? createElement(DesktopWrapper, _extends({
    PopoverProps: PopoverProps
  }, other)) : createElement(MobileWrapper, _extends({
    okLabel: okLabel,
    cancelLabel: cancelLabel,
    clearLabel: clearLabel,
    todayLabel: todayLabel,
    showTodayButton: showTodayButton,
    clearable: clearable,
    DialogProps: DialogProps
  }, other));
};

var useStyles$1 = makeStyles(function (theme) {
  return {
    staticWrapperRoot: {
      overflow: 'hidden',
      minWidth: DIALOG_WIDTH,
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.palette.background.paper
    }
  };
}, {
  name: 'MuiPickersStaticWrapper'
});
var StaticWrapper = function StaticWrapper(_ref) {
  var children = _ref.children;
  var classes = useStyles$1();
  return createElement(WrapperVariantContext.Provider, {
    value: "static"
  }, createElement("div", {
    className: classes.staticWrapperRoot,
    children: children
  }));
};

function useOpenState(_ref) {
  var open = _ref.open,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose;
  var setIsOpenState = null;

  if (open === undefined || open === null) {
    // The component is uncontrolled, so we need to give it its own state.
    var _useState = useState(false);

    var _useState2 = _slicedToArray(_useState, 2);

    open = _useState2[0];
    setIsOpenState = _useState2[1];
  } // prettier-ignore


  var setIsOpen = useCallback(function (newIsOpen) {
    setIsOpenState && setIsOpenState(newIsOpen);
    return newIsOpen ? onOpen && onOpen() : onClose && onClose();
  }, [onOpen, onClose, setIsOpenState]);
  return {
    isOpen: open,
    setIsOpen: setIsOpen
  };
}

var useValueToDate = function useValueToDate(utils, _ref) {
  var value = _ref.value,
      initialFocusedDate = _ref.initialFocusedDate;
  var nowRef = useRef(utils.date());
  var date = utils.date(value || initialFocusedDate || nowRef.current);
  return date && utils.isValid(date) ? date : nowRef.current;
};

function useDateValues(props) {
  var utils = useUtils();
  var date = useValueToDate(utils, props);
  var format = props.format;

  if (!format) {
    throw new Error('format prop is required');
  }

  return {
    date: date,
    format: format
  };
}

function usePickerState(props) {
  var autoOk = props.autoOk,
      disabled = props.disabled,
      readOnly = props.readOnly,
      onAccept = props.onAccept,
      onChange = props.onChange,
      onError = props.onError,
      value = props.value;
  var utils = useUtils();

  var _useDateValues = useDateValues(props),
      date = _useDateValues.date,
      format = _useDateValues.format;

  var _useState = useState(date),
      _useState2 = _slicedToArray(_useState, 2),
      pickerDate = _useState2[0],
      setPickerDate = _useState2[1]; // Mobile keyboard view is a special case.
  // When it's open picker should work like closed, cause we are just showing text field


  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isMobileKeyboardViewOpen = _useState4[0],
      setMobileKeyboardViewOpen = _useState4[1];

  var _useOpenState = useOpenState(props),
      isOpen = _useOpenState.isOpen,
      setIsOpen = _useOpenState.setIsOpen;

  useEffect(function () {
    // if value was changed in closed state or from mobile keyboard view - treat it as accepted
    if ((!isOpen || isMobileKeyboardViewOpen) && !utils.isEqual(pickerDate, date)) {
      setPickerDate(date);
    }
  }, [date, isMobileKeyboardViewOpen, isOpen, pickerDate, utils]);
  var acceptDate = useCallback(function (acceptedDate) {
    onChange(acceptedDate);

    if (onAccept) {
      onAccept(acceptedDate);
    }

    setIsOpen(false);
  }, [onAccept, onChange, setIsOpen]);
  var wrapperProps = useMemo(function () {
    return {
      format: format,
      open: isOpen,
      onClear: function onClear() {
        return acceptDate(null);
      },
      onAccept: function onAccept() {
        return acceptDate(pickerDate);
      },
      onSetToday: function onSetToday() {
        return setPickerDate(utils.date());
      },
      onDismiss: function onDismiss() {
        return setIsOpen(false);
      }
    };
  }, [acceptDate, format, isOpen, pickerDate, setIsOpen, utils]);
  var pickerProps = useMemo(function () {
    return {
      date: pickerDate,
      isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
      toggleMobileKeyboardView: function toggleMobileKeyboardView() {
        if (!isMobileKeyboardViewOpen) {
          // accept any partial input done by user
          setPickerDate(pickerDate);
        }

        setMobileKeyboardViewOpen(!isMobileKeyboardViewOpen);
      },
      onDateChange: function onDateChange(newDate, currentVariant) {
        var isFinish = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        setPickerDate(newDate);

        if (isFinish && autoOk) {
          acceptDate(newDate);
          return;
        } // simulate autoOk, but do not close the modal


        if (currentVariant === 'desktop' || currentVariant === 'static') {
          onChange(newDate);
          onAccept && onAccept(newDate);
        }
      }
    };
  }, [acceptDate, autoOk, isMobileKeyboardViewOpen, onAccept, onChange, pickerDate]);
  var validationError = validate(value, utils, props);
  useEffect(function () {
    if (onError) {
      onError(validationError, value);
    }
  }, [onError, validationError, value]);
  var inputProps = useMemo(function () {
    return {
      onChange: onChange,
      format: format,
      rawValue: value,
      validationError: validationError,
      openPicker: function openPicker() {
        return !readOnly && !disabled && setIsOpen(true);
      }
    };
  }, [disabled, format, onChange, readOnly, setIsOpen, validationError, value]);
  var pickerState = {
    pickerProps: pickerProps,
    inputProps: inputProps,
    wrapperProps: wrapperProps
  };
  useDebugValue(pickerState, function () {
    return {
      MuiPickerState: {
        pickerDate: pickerDate,
        parsedDate: date,
        other: pickerState
      }
    };
  });
  return pickerState;
}

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function makePickerWithStateAndWrapper(Wrapper, _ref) {
  var useDefaultProps = _ref.useDefaultProps,
      DefaultToolbarComponent = _ref.DefaultToolbarComponent;

  function PickerWithState(props) {
    var defaultProps = useDefaultProps(props);

    var allProps = _objectSpread$2({}, defaultProps, {}, props);

    var allowKeyboardControl = allProps.allowKeyboardControl,
        ampm = allProps.ampm,
        ampmInClock = allProps.ampmInClock,
        autoOk = allProps.autoOk,
        dateRangeIcon = allProps.dateRangeIcon,
        disableFuture = allProps.disableFuture,
        disablePast = allProps.disablePast,
        showToolbar = allProps.showToolbar,
        format = allProps.format,
        hideTabs = allProps.hideTabs,
        initialFocusedDate = allProps.initialFocusedDate,
        leftArrowButtonProps = allProps.leftArrowButtonProps,
        leftArrowIcon = allProps.leftArrowIcon,
        loadingIndicator = allProps.loadingIndicator,
        maxDate = allProps.maxDate,
        minDate = allProps.minDate,
        minutesStep = allProps.minutesStep,
        onAccept = allProps.onAccept,
        onChange = allProps.onChange,
        onClose = allProps.onClose,
        onMonthChange = allProps.onMonthChange,
        onOpen = allProps.onOpen,
        onYearChange = allProps.onYearChange,
        openTo = allProps.openTo,
        orientation = allProps.orientation,
        renderDay = allProps.renderDay,
        rightArrowButtonProps = allProps.rightArrowButtonProps,
        rightArrowIcon = allProps.rightArrowIcon,
        shouldDisableDate = allProps.shouldDisableDate,
        showLeftArrowButton = allProps.showLeftArrowButton,
        showRightArrowButton = allProps.showRightArrowButton,
        strictCompareDates = allProps.strictCompareDates,
        timeIcon = allProps.timeIcon,
        _allProps$ToolbarComp = allProps.ToolbarComponent,
        ToolbarComponent = _allProps$ToolbarComp === void 0 ? DefaultToolbarComponent : _allProps$ToolbarComp,
        value = allProps.value,
        views = allProps.views,
        title = allProps.title,
        invalidDateMessage = allProps.invalidDateMessage,
        minDateMessage = allProps.minDateMessage,
        maxDateMessage = allProps.maxDateMessage,
        clearable = allProps.clearable,
        clearLabel = allProps.clearLabel,
        DialogProps = allProps.DialogProps,
        PopoverProps = allProps.PopoverProps,
        okLabel = allProps.okLabel,
        cancelLabel = allProps.cancelLabel,
        todayLabel = allProps.todayLabel,
        restPropsForTextField = _objectWithoutProperties(allProps, ["allowKeyboardControl", "ampm", "ampmInClock", "autoOk", "dateRangeIcon", "disableFuture", "disablePast", "showToolbar", "format", "hideTabs", "initialFocusedDate", "leftArrowButtonProps", "leftArrowIcon", "loadingIndicator", "maxDate", "minDate", "minutesStep", "onAccept", "onChange", "onClose", "onMonthChange", "onOpen", "onYearChange", "openTo", "orientation", "renderDay", "rightArrowButtonProps", "rightArrowIcon", "shouldDisableDate", "showLeftArrowButton", "showRightArrowButton", "strictCompareDates", "timeIcon", "ToolbarComponent", "value", "views", "title", "invalidDateMessage", "minDateMessage", "maxDateMessage", "clearable", "clearLabel", "DialogProps", "PopoverProps", "okLabel", "cancelLabel", "todayLabel"]);

    var _usePickerState = usePickerState(allProps),
        pickerProps = _usePickerState.pickerProps,
        inputProps = _usePickerState.inputProps,
        wrapperProps = _usePickerState.wrapperProps;

    var WrapperComponent = Wrapper;
    return createElement(WrapperComponent, _extends({
      clearable: clearable,
      clearLabel: clearLabel,
      DialogProps: DialogProps,
      okLabel: okLabel,
      todayLabel: todayLabel,
      cancelLabel: cancelLabel,
      DateInputProps: inputProps
    }, wrapperProps, restPropsForTextField), createElement(Picker, _extends({}, pickerProps, {
      DateInputProps: _objectSpread$2({}, inputProps, {}, restPropsForTextField),
      title: title,
      allowKeyboardControl: allowKeyboardControl,
      ampm: ampm,
      ampmInClock: ampmInClock,
      dateRangeIcon: dateRangeIcon,
      disableFuture: disableFuture,
      disablePast: disablePast,
      showToolbar: showToolbar,
      hideTabs: hideTabs,
      leftArrowButtonProps: leftArrowButtonProps,
      leftArrowIcon: leftArrowIcon,
      loadingIndicator: loadingIndicator,
      maxDate: maxDate,
      minDate: minDate,
      minutesStep: minutesStep,
      onMonthChange: onMonthChange,
      onYearChange: onYearChange,
      openTo: openTo,
      orientation: orientation,
      renderDay: renderDay,
      rightArrowButtonProps: rightArrowButtonProps,
      rightArrowIcon: rightArrowIcon,
      shouldDisableDate: shouldDisableDate,
      showLeftArrowButton: showLeftArrowButton,
      showRightArrowButton: showRightArrowButton,
      strictCompareDates: strictCompareDates,
      timeIcon: timeIcon,
      ToolbarComponent: ToolbarComponent,
      views: views
    })));
  }

  return PickerWithState;
}

export { DesktopWrapper as D, MobileWrapper as M, ResponsiveWrapper as R, StaticWrapper as S, dateTimePickerDefaultProps as a, datePickerDefaultProps as d, makePickerWithStateAndWrapper as m, timePickerDefaultProps as t, usePickerState as u };
//# sourceMappingURL=makePickerWithState-58665a0a.js.map
