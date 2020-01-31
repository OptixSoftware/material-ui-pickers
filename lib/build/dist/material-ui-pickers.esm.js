import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import React__default, { createContext, useMemo, createElement, useContext, useRef, useCallback, useEffect, useLayoutEffect, useState, useDebugValue, forwardRef, cloneElement, Fragment, useReducer, Component, memo } from 'react';
import { func, oneOfType, object, string, element, arrayOf, number, instanceOf, oneOf, node, bool } from 'prop-types';
import clsx from 'clsx';
import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import Toolbar from '@material-ui/core/Toolbar';
import createSvgIcon from '@material-ui/core/internal/svg-icons/createSvgIcon';
import { makeStyles, fade, useTheme, withStyles, createStyles } from '@material-ui/core/styles';
import { Typography, Grid, IconButton, makeStyles as makeStyles$1, useMediaQuery, Fade, ButtonBase, useTheme as useTheme$1, CircularProgress } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';
import IconButton$1 from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Rifm } from 'rifm';
import Popover from '@material-ui/core/Popover';
import Typography$1 from '@material-ui/core/Typography';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/esm/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/esm/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/esm/inherits';
import { fade as fade$1 } from '@material-ui/core/styles/colorManipulator';
import makeStyles$2 from '@material-ui/styles/makeStyles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';

var MuiPickersContext = createContext(null);
var MuiPickersUtilsProvider = function MuiPickersUtilsProvider(_ref) {
  var Utils = _ref.utils,
      children = _ref.children,
      locale = _ref.locale,
      libInstance = _ref.libInstance;
  var utils = useMemo(function () {
    return new Utils({
      locale: locale,
      instance: libInstance
    });
  }, [Utils, libInstance, locale]);
  return createElement(MuiPickersContext.Provider, {
    value: utils,
    children: children
  });
};
process.env.NODE_ENV !== "production" ? MuiPickersUtilsProvider.propTypes = {
  utils: func.isRequired,
  locale: oneOfType([object, string]),
  children: oneOfType([element.isRequired, arrayOf(element.isRequired)]).isRequired
} : void 0;

var checkUtils = function checkUtils(utils) {
  if (!utils) {
    // tslint:disable-next-line
    throw new Error('Can not find utils in context. You either a) forgot to wrap your component tree in MuiPickersUtilsProvider; or b) mixed named and direct file imports.  Recommendation: use named imports from the module index.');
  }
};
function useUtils() {
  var utils = useContext(MuiPickersContext);
  checkUtils(utils);
  return utils;
}

var PenIcon = createSvgIcon(React__default.createElement("path", {
  d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
}), 'PenIcon');

var KeyboardIcon = createSvgIcon(React__default.createElement(React__default.Fragment, null, React__default.createElement("path", {
  d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
}), React__default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'KeyboardIcon');

var useStyles = makeStyles(function (theme) {
  var toolbarBackground = theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background["default"];
  return {
    toolbar: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      paddingTop: 16,
      paddingBottom: 16,
      backgroundColor: toolbarBackground,
      color: theme.palette.getContrastText(toolbarBackground)
    },
    toolbarLandscape: {
      height: 'auto',
      maxWidth: 160,
      padding: 16,
      justifyContent: 'flex-start',
      flexWrap: 'wrap'
    },
    dateTitleContainer: {
      flex: 1
    }
  };
}, {
  name: 'MuiPickersToolbar'
});

var PickerToolbar = function PickerToolbar(_ref) {
  var children = _ref.children,
      isLandscape = _ref.isLandscape,
      title = _ref.title,
      _ref$landscapeDirecti = _ref.landscapeDirection,
      landscapeDirection = _ref$landscapeDirecti === void 0 ? 'column' : _ref$landscapeDirecti,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className,
      penIconClassName = _ref.penIconClassName,
      toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
      isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
      other = _objectWithoutProperties(_ref, ["children", "isLandscape", "title", "landscapeDirection", "className", "penIconClassName", "toggleMobileKeyboardView", "isMobileKeyboardViewOpen"]);

  var classes = useStyles();
  return createElement(Toolbar, _extends({
    "data-mui-test": "picker-toolbar",
    className: clsx(classes.toolbar, className, isLandscape && classes.toolbarLandscape)
  }, other), createElement(Typography, {
    color: "inherit",
    variant: "overline",
    children: title
  }), createElement(Grid, {
    container: true,
    justify: "space-between",
    className: classes.dateTitleContainer,
    direction: isLandscape ? landscapeDirection : 'row',
    alignItems: isLandscape ? 'flex-start' : 'flex-end'
  }, children, createElement(IconButton, {
    onClick: toggleMobileKeyboardView,
    className: penIconClassName,
    color: "inherit",
    "data-mui-test": "toggle-mobile-keyboard-view"
  }, isMobileKeyboardViewOpen ? createElement(KeyboardIcon, {
    color: "inherit"
  }) : createElement(PenIcon, {
    color: "inherit"
  }))));
};

/** Use it instead of .includes method for IE support */
function arrayIncludes(array, itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.every(function (item) {
      return array.indexOf(item) !== -1;
    });
  }

  return array.indexOf(itemOrItems) !== -1;
}

var findClosestEnabledDate = function findClosestEnabledDate(_ref) {
  var date = _ref.date,
      utils = _ref.utils,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      disableFuture = _ref.disableFuture,
      disablePast = _ref.disablePast,
      shouldDisableDate = _ref.shouldDisableDate;
  var today = utils.startOfDay(utils.date());

  if (disablePast && utils.isBefore(minDate, today)) {
    minDate = today;
  }

  if (disableFuture && utils.isAfter(maxDate, today)) {
    maxDate = today;
  }

  var forward = date;
  var backward = date;

  if (utils.isBefore(date, minDate)) {
    forward = utils.date(minDate);
    backward = null;
  }

  if (utils.isAfter(date, maxDate)) {
    if (backward) {
      backward = utils.date(maxDate);
    }

    forward = null;
  }

  while (forward || backward) {
    if (forward && utils.isAfter(forward, maxDate)) {
      forward = null;
    }

    if (backward && utils.isBefore(backward, minDate)) {
      backward = null;
    }

    if (forward) {
      if (!shouldDisableDate(forward)) {
        return forward;
      }

      forward = utils.addDays(forward, 1);
    }

    if (backward) {
      if (!shouldDisableDate(backward)) {
        return backward;
      }

      backward = utils.addDays(backward, -1);
    }
  } // fallback to today if no enabled days


  return utils.date();
};
var isYearOnlyView = function isYearOnlyView(views) {
  return views.length === 1 && views[0] === 'year';
};
var isYearAndMonthViews = function isYearAndMonthViews(views) {
  return views.length === 2 && arrayIncludes(views, 'month') && arrayIncludes(views, 'year');
};
var getFormatByViews = function getFormatByViews(views, utils) {
  if (isYearOnlyView(views)) {
    return utils.formats.year;
  }

  if (isYearAndMonthViews(views)) {
    return utils.formats.monthAndYear;
  }

  return utils.formats.keyboardDate;
};

var useStyles$1 = makeStyles$1({
  dateTitleLandscape: {
    margin: 'auto 16px auto auto'
  },
  penIcon: {
    position: 'relative',
    top: 4
  }
}, {
  name: 'MuiPickersDatePickerRoot'
});
var DatePickerToolbar = function DatePickerToolbar(_ref) {
  var date = _ref.date,
      views = _ref.views,
      isLandscape = _ref.isLandscape,
      isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
      toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'SELECT DATE' : _ref$title;
  var utils = useUtils();
  var classes = useStyles$1();
  var dateText = useMemo(function () {
    if (isYearOnlyView(views)) {
      return utils.format(date, 'year');
    }

    if (isYearAndMonthViews(views)) {
      return utils.format(date, 'month');
    }

    return utils.format(date, 'normalDate');
  }, [date, utils, views]);
  return createElement(PickerToolbar, {
    title: title,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    isLandscape: isLandscape,
    penIconClassName: classes.penIcon
  }, createElement(Typography, {
    variant: "h4",
    children: dateText,
    align: isLandscape ? 'left' : 'center',
    className: clsx(isLandscape && classes.dateTitleLandscape)
  }));
};

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

var DIALOG_WIDTH = 320;
var DIALOG_WIDTH_WIDER = 325;
var VIEW_HEIGHT = 330;

var useStyles$2 = makeStyles({
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

  var classes = useStyles$2();
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

var getDisplayDate = function getDisplayDate(value, utils, _ref) {
  var format = _ref.format,
      _ref$invalidLabel = _ref.invalidLabel,
      invalidLabel = _ref$invalidLabel === void 0 ? '' : _ref$invalidLabel,
      emptyLabel = _ref.emptyLabel,
      labelFunc = _ref.labelFunc;
  var date = utils.date(value);
  var isEmpty = value === null;

  if (labelFunc) {
    return labelFunc(isEmpty ? null : date, invalidLabel);
  }

  if (isEmpty) {
    return emptyLabel || '';
  }

  return utils.isValid(date) ? utils.formatByString(date, format) : invalidLabel;
};

var getComparisonMaxDate = function getComparisonMaxDate(utils, strictCompareDates, date) {
  if (strictCompareDates) {
    return date;
  }

  return utils.endOfDay(date);
};

var getComparisonMinDate = function getComparisonMinDate(utils, strictCompareDates, date) {
  if (strictCompareDates) {
    return date;
  }

  return utils.startOfDay(date);
};

var validate = function validate(value, utils, _ref2) {
  var maxDate = _ref2.maxDate,
      minDate = _ref2.minDate,
      disablePast = _ref2.disablePast,
      disableFuture = _ref2.disableFuture,
      maxDateMessage = _ref2.maxDateMessage,
      minDateMessage = _ref2.minDateMessage,
      invalidDateMessage = _ref2.invalidDateMessage,
      strictCompareDates = _ref2.strictCompareDates;
  var parsedValue = utils.date(value); // if null - do not show error

  if (value === null) {
    return '';
  }

  if (!utils.isValid(value)) {
    return invalidDateMessage;
  }

  if (maxDate && utils.isAfter(parsedValue, getComparisonMaxDate(utils, !!strictCompareDates, utils.date(maxDate)))) {
    return maxDateMessage;
  }

  if (disableFuture && utils.isAfter(parsedValue, getComparisonMaxDate(utils, !!strictCompareDates, utils.date()))) {
    return maxDateMessage;
  }

  if (minDate && utils.isBefore(parsedValue, getComparisonMinDate(utils, !!strictCompareDates, utils.date(minDate)))) {
    return minDateMessage;
  }

  if (disablePast && utils.isBefore(parsedValue, getComparisonMinDate(utils, !!strictCompareDates, utils.date()))) {
    return minDateMessage;
  }

  return '';
};
function pick12hOr24hFormat(userFormat) {
  var ampm = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var formats = arguments.length > 2 ? arguments[2] : undefined;

  if (userFormat) {
    return userFormat;
  }

  return ampm ? formats['12h'] : formats['24h'];
}
function makeMaskFromFormat(format, numberMaskChar) {
  return format.replace(/[a-z]/gi, numberMaskChar);
}
var maskedDateFormatter = function maskedDateFormatter(mask, numberMaskChar, refuse) {
  return function (value) {
    var result = '';
    var parsed = value.replace(refuse, '');

    if (parsed === '') {
      return parsed;
    }

    var i = 0;
    var n = 0;

    while (i < mask.length) {
      var maskChar = mask[i];

      if (maskChar === numberMaskChar && n < parsed.length) {
        var parsedChar = parsed[n];
        result += parsedChar;
        n += 1;
      } else {
        result += maskChar;
      }

      i += 1;
    }

    return result;
  };
};

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

// consider getting rid from wrapper variant
var WrapperVariantContext = createContext(null);

var useIsomorphicEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;
function runKeyHandler(e, keyHandlers) {
  var handler = keyHandlers[e.keyCode];

  if (handler) {
    handler(); // if event was handled prevent other side effects (e.g. page scroll)

    e.preventDefault();
  }
}
function useKeyDownHandler(active, keyHandlers) {
  var keyHandlersRef = useRef(keyHandlers);
  keyHandlersRef.current = keyHandlers;
  return useCallback(function (e) {
    if (active) {
      runKeyHandler(e, keyHandlersRef.current);
    }
  }, [active]);
}
function useGlobalKeyDown(active, keyHandlers) {
  var keyHandlersRef = useRef(keyHandlers);
  keyHandlersRef.current = keyHandlers;
  useIsomorphicEffect(function () {
    if (active) {
      var handleKeyDown = function handleKeyDown(event) {
        runKeyHandler(event, keyHandlersRef.current);
      };

      window.addEventListener('keydown', handleKeyDown);
      return function () {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [active]);
}

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

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var KeyboardDateInput = function KeyboardDateInput(_ref) {
  var rawValue = _ref.rawValue,
      validationError = _ref.validationError,
      KeyboardButtonProps = _ref.KeyboardButtonProps,
      InputAdornmentProps = _ref.InputAdornmentProps,
      onOpen = _ref.openPicker,
      onChange = _ref.onChange,
      InputProps = _ref.InputProps,
      mask = _ref.mask,
      _ref$maskChar = _ref.maskChar,
      maskChar = _ref$maskChar === void 0 ? '_' : _ref$maskChar,
      _ref$refuse = _ref.refuse,
      refuse = _ref$refuse === void 0 ? /[^\d]+/gi : _ref$refuse,
      format = _ref.format,
      disabled = _ref.disabled,
      rifmFormatter = _ref.rifmFormatter,
      _ref$TextFieldCompone = _ref.TextFieldComponent,
      TextFieldComponent = _ref$TextFieldCompone === void 0 ? TextField : _ref$TextFieldCompone,
      _ref$keyboardIcon = _ref.keyboardIcon,
      keyboardIcon = _ref$keyboardIcon === void 0 ? createElement(KeyboardIcon, null) : _ref$keyboardIcon,
      variant = _ref.variant,
      emptyLabel = _ref.emptyLabel,
      invalidLabel = _ref.invalidLabel,
      labelFunc = _ref.labelFunc,
      hideOpenPickerButton = _ref.hideOpenPickerButton,
      ignoreInvalidInputs = _ref.ignoreInvalidInputs,
      other = _objectWithoutProperties(_ref, ["rawValue", "validationError", "KeyboardButtonProps", "InputAdornmentProps", "openPicker", "onChange", "InputProps", "mask", "maskChar", "refuse", "format", "disabled", "rifmFormatter", "TextFieldComponent", "keyboardIcon", "variant", "emptyLabel", "invalidLabel", "labelFunc", "hideOpenPickerButton", "ignoreInvalidInputs"]);

  var utils = useUtils();

  var getInputValue = function getInputValue() {
    return getDisplayDate(rawValue, utils, {
      format: format,
      emptyLabel: emptyLabel,
      invalidLabel: invalidLabel,
      labelFunc: labelFunc
    });
  };

  var _React$useState = useState(getInputValue()),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      innerInputValue = _React$useState2[0],
      setInnerInputValue = _React$useState2[1];

  var inputMask = mask || makeMaskFromFormat(format, maskChar); // prettier-ignore

  var formatter = useMemo(function () {
    return maskedDateFormatter(inputMask, maskChar, refuse);
  }, [inputMask, maskChar, refuse]);
  useEffect(function () {
    if (rawValue === null || utils.isValid(rawValue)) {
      setInnerInputValue(getInputValue());
    }
  }, [rawValue]); // eslint-disable-line

  var position = InputAdornmentProps && InputAdornmentProps.position ? InputAdornmentProps.position : 'end';

  var handleChange = function handleChange(text) {
    var finalString = text === '' || text === inputMask ? null : text;
    setInnerInputValue(finalString);
    var date = finalString === null ? null : utils.parse(finalString, format);

    if (ignoreInvalidInputs && !utils.isValid(date)) {
      return;
    }

    onChange(date, finalString || undefined);
  };

  return createElement(Rifm, {
    key: inputMask,
    value: innerInputValue || '',
    onChange: handleChange,
    refuse: refuse,
    format: rifmFormatter || formatter
  }, function (_ref2) {
    var onChange = _ref2.onChange,
        value = _ref2.value;
    return createElement(TextFieldComponent, _extends({
      variant: variant,
      disabled: disabled,
      error: Boolean(validationError),
      helperText: validationError,
      "data-mui-test": "keyboard-date-input"
    }, other, {
      value: value,
      onChange: onChange,
      InputProps: _objectSpread$2({}, InputProps, _defineProperty({}, "".concat(position, "Adornment"), hideOpenPickerButton ? undefined : createElement(InputAdornment, _extends({
        position: position
      }, InputAdornmentProps), createElement(IconButton$1, _extends({
        "data-mui-test": "open-picker-from-keyboard",
        disabled: disabled
      }, KeyboardButtonProps, {
        onClick: onOpen
      }), keyboardIcon))))
    }));
  });
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

var useStyles$3 = makeStyles(function (theme) {
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
  var classes = useStyles$3();
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

function useViews(_ref) {
  var views = _ref.views,
      openTo = _ref.openTo,
      onChange = _ref.onChange,
      isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
      toggleMobileKeyboardView = _ref.toggleMobileKeyboardView;

  var _React$useState = useState(openTo && arrayIncludes(views, openTo) ? openTo : views[0]),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openView = _React$useState2[0],
      _setOpenView = _React$useState2[1];

  var setOpenView = useCallback(function () {
    if (isMobileKeyboardViewOpen) {
      toggleMobileKeyboardView();
    }

    _setOpenView.apply(void 0, arguments);
  }, [isMobileKeyboardViewOpen, toggleMobileKeyboardView]);
  var nextView = views[views.indexOf(openView) + 1];
  var openNext = useCallback(function () {
    if (nextView) {
      setOpenView(nextView);
    }
  }, [nextView, setOpenView]);
  var handleChangeAndOpenNext = useCallback(function (date, isFinish) {
    // do not close picker if needs to show next view
    onChange(date, Boolean(isFinish && !nextView));

    if (isFinish) {
      openNext();
    }
  }, [nextView, onChange, openNext]);
  return {
    nextView: nextView,
    openNext: openNext,
    handleChangeAndOpenNext: handleChangeAndOpenNext,
    openView: openView,
    setOpenView: setOpenView
  };
}

var useStyles$4 = makeStyles(function (theme) {
  return {
    yearContainer: {
      flexBasis: '33.3%',
      display: 'flex',
      justifyContent: 'center',
      padding: '8px 0'
    },
    yearContainerDesktop: {
      flexBasis: '25%'
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
        backgroundColor: fade(theme.palette.action.active, theme.palette.action.hoverOpacity)
      }
    },
    yearSelected: {
      color: theme.palette.getContrastText(theme.palette.primary.main),
      backgroundColor: theme.palette.primary.main,
      '&:focus': {
        backgroundColor: theme.palette.primary.light
      }
    },
    yearDisabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    }
  };
}, {
  name: 'MuiPickersYear'
});
var Year = function Year(_ref) {
  var onSelect = _ref.onSelect,
      forwardedRef = _ref.forwardedRef,
      value = _ref.value,
      selected = _ref.selected,
      disabled = _ref.disabled,
      children = _ref.children,
      other = _objectWithoutProperties(_ref, ["onSelect", "forwardedRef", "value", "selected", "disabled", "children"]);

  var classes = useStyles$4();
  var wrapperVariant = useContext(WrapperVariantContext);
  var handleClick = useCallback(function () {
    return onSelect(value);
  }, [onSelect, value]);
  return createElement("div", {
    role: "button",
    onClick: handleClick,
    className: clsx(classes.yearContainer, {
      desktop: classes.yearContainerDesktop
    }[wrapperVariant])
  }, createElement(Typography$1, _extends({
    variant: "subtitle1",
    tabIndex: disabled ? -1 : 0,
    onKeyPress: handleClick,
    color: selected ? 'primary' : undefined,
    children: children,
    ref: forwardedRef,
    className: clsx(classes.yearLabel, selected && classes.yearSelected, disabled && classes.yearDisabled)
  }, other)));
};
Year.displayName = 'Year';
var Year$1 = forwardRef(function (props, ref) {
  return createElement(Year, _extends({}, props, {
    forwardedRef: ref
  }));
});

var useStyles$5 = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    overflowY: 'auto',
    height: '100%'
  }
}, {
  name: 'MuiPickersYearSelection'
});
var YearSelection = function YearSelection(_ref) {
  var date = _ref.date,
      onChange = _ref.onChange,
      onYearChange = _ref.onYearChange,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      disablePast = _ref.disablePast,
      disableFuture = _ref.disableFuture;
  var utils = useUtils();
  var classes = useStyles$5();
  var wrapperVariant = useContext(WrapperVariantContext);
  var selectedYearRef = useRef(null);
  useEffect(function () {
    if (selectedYearRef.current && selectedYearRef.current.scrollIntoView) {
      try {
        selectedYearRef.current.scrollIntoView({
          block: wrapperVariant === 'static' ? 'nearest' : 'center'
        });
      } catch (e) {
        // call without arguments in case when scrollIntoView works improperly (e.g. Firefox 52-57)
        selectedYearRef.current.scrollIntoView();
      }
    }
  }, []); // eslint-disable-line

  var currentYear = utils.getYear(date);
  var onYearSelect = useCallback(function (year) {
    var newDate = utils.setYear(date, year);

    if (onYearChange) {
      onYearChange(newDate);
    }

    onChange(newDate, true);
  }, [date, onChange, onYearChange, utils]);
  return createElement("div", null, createElement("div", {
    className: classes.container
  }, utils.getYearRange(minDate, maxDate).map(function (year) {
    var yearNumber = utils.getYear(year);
    var selected = yearNumber === currentYear;
    return createElement(Year$1, {
      key: utils.format(year, 'year'),
      selected: selected,
      value: yearNumber,
      onSelect: onYearSelect,
      ref: selected ? selectedYearRef : undefined,
      disabled: Boolean(disablePast && utils.isBeforeYear(year, utils.date()) || disableFuture && utils.isAfterYear(year, utils.date()))
    }, utils.format(year, 'year'));
  })));
};

var animationDuration = 500;
var useStyles$6 = makeStyles(function (theme) {
  return {
    transitionContainer: {
      display: 'block',
      position: 'relative'
    },
    fadeEnter: {
      willChange: 'transform',
      opacity: 0
    },
    fadeEnterActive: {
      opacity: 1,
      transition: theme.transitions.create('opacity', {
        duration: animationDuration
      })
    },
    fadeExit: {
      opacity: 1
    },
    fadeExitActive: {
      opacity: 0,
      transition: theme.transitions.create('opacity', {
        duration: animationDuration / 2
      })
    }
  };
}, {
  name: 'MuiPickersFadeTransition'
});
var FadeTransitionGroup = function FadeTransitionGroup(_ref) {
  var children = _ref.children,
      transKey = _ref.transKey,
      reduceAnimations = _ref.reduceAnimations,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className;
  var classes = useStyles$6();

  if (reduceAnimations) {
    return children;
  }

  var transitionClasses = {
    exit: classes.fadeExit,
    enterActive: classes.fadeEnterActive,
    enter: classes.fadeEnter,
    exitActive: classes.fadeExitActive
  };
  return createElement(TransitionGroup, {
    className: clsx(classes.transitionContainer, className),
    childFactory: function childFactory(element) {
      return cloneElement(element, {
        classNames: transitionClasses
      });
    }
  }, createElement(CSSTransition, {
    mountOnEnter: true,
    unmountOnExit: true,
    key: transKey,
    timeout: {
      appear: animationDuration,
      enter: animationDuration / 2,
      exit: 0
    },
    classNames: transitionClasses,
    children: children
  }));
};

var ArrowLeftIcon = createSvgIcon(React__default.createElement(React__default.Fragment, null, React__default.createElement("path", {
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}), React__default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0V0z"
})), 'ArrowLeftIcon');

var ArrowRightIcon = createSvgIcon(React__default.createElement(React__default.Fragment, null, React__default.createElement("path", {
  d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), React__default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0V0z"
})), 'ArrowRightIcon');

var ArrowDropDownIcon = createSvgIcon(React__default.createElement("path", {
  d: "M7 10l5 5 5-5z"
}), 'ArrowDropDownIcon');

var useStyles$7 = makeStyles(function (theme) {
  return {
    switchHeader: {
      display: 'flex',
      alignItems: 'center',
      marginTop: 16,
      marginBottom: 8,
      paddingLeft: 24,
      paddingRight: 12,
      // prevent jumping in safari
      maxHeight: 30,
      minHeight: 30
    },
    yearSelectionSwitcher: {
      marginRight: 'auto'
    },
    iconButton: {
      zIndex: 1,
      backgroundColor: theme.palette.background.paper
    },
    previousMonthButton: {
      marginRight: 24
    },
    switchViewDropdown: {
      willChange: 'transform',
      transition: theme.transitions.create('transform'),
      transform: 'rotate(0deg)'
    },
    switchViewDropdownDown: {
      transform: 'rotate(180deg)'
    },
    monthTitleContainer: {
      flex: 1,
      display: 'flex',
      maxHeight: 30,
      overflow: 'hidden'
    },
    monthText: {
      marginRight: 4
    }
  };
}, {
  name: 'MuiPickersCalendarHeader'
});
var CalendarHeader = function CalendarHeader(_ref) {
  var view = _ref.view,
      views = _ref.views,
      month = _ref.month,
      leftArrowIcon = _ref.leftArrowIcon,
      rightArrowIcon = _ref.rightArrowIcon,
      leftArrowButtonProps = _ref.leftArrowButtonProps,
      rightArrowButtonProps = _ref.rightArrowButtonProps,
      showLeftArrowButton = _ref.showLeftArrowButton,
      showRightArrowButton = _ref.showRightArrowButton,
      changeView = _ref.changeView,
      onMonthChange = _ref.onMonthChange,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      reduceAnimations = _ref.reduceAnimations,
      disableFuture = _ref.disableFuture,
      disablePast = _ref.disablePast;
  var utils = useUtils();
  var theme = useTheme();
  var classes = useStyles$7({
    view: view
  });
  var isRtl = theme.direction === 'rtl';

  var selectNextMonth = function selectNextMonth() {
    return onMonthChange(utils.getNextMonth(month), 'left');
  };

  var selectPreviousMonth = function selectPreviousMonth() {
    return onMonthChange(utils.getPreviousMonth(month), 'right');
  };

  var isPreviousMonthDisabled = useMemo(function () {
    var now = utils.date();
    var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, utils.date(minDate)) ? now : utils.date(minDate));
    return !utils.isBefore(firstEnabledMonth, month);
  }, [disablePast, minDate, month, utils]);
  var isNextMonthDisabled = useMemo(function () {
    var now = utils.date();
    var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, utils.date(maxDate)) ? now : utils.date(maxDate));
    return !utils.isAfter(lastEnabledMonth, month);
  }, [disableFuture, maxDate, month, utils]);

  var toggleView = function toggleView() {
    if (views.length === 1) {
      return;
    }

    if (views.length === 2) {
      changeView(views.find(function (v) {
        return v !== view;
      }) || views[0]);
    } else {
      // switching only between first 2
      var nextIndexToOpen = views.indexOf(view) !== 0 ? 0 : 1;
      changeView(views[nextIndexToOpen]);
    }
  };

  if (views.length === 1) {
    return null;
  }

  return createElement(Fragment, null, createElement("div", {
    className: classes.switchHeader
  }, createElement("div", {
    className: classes.monthTitleContainer
  }, createElement(FadeTransitionGroup, {
    reduceAnimations: reduceAnimations,
    transKey: utils.format(month, 'month')
  }, createElement(Typography$1, {
    "data-mui-test": "calendar-month-text",
    align: "center",
    variant: "subtitle1",
    className: classes.monthText,
    children: utils.format(month, 'month')
  })), createElement(FadeTransitionGroup, {
    reduceAnimations: reduceAnimations,
    transKey: utils.format(month, 'year')
  }, createElement(Typography$1, {
    "data-mui-test": "calendar-year-text",
    align: "center",
    variant: "subtitle1",
    children: utils.format(month, 'year')
  })), createElement(IconButton, {
    "data-mui-test": "calendar-view-switcher",
    size: "small",
    onClick: toggleView,
    className: classes.yearSelectionSwitcher
  }, createElement(ArrowDropDownIcon, {
    className: clsx(classes.switchViewDropdown, {
      year: classes.switchViewDropdownDown
    }[view])
  }))), createElement(Fade, {
    "in": view === 'date'
  }, createElement("div", null, showLeftArrowButton && createElement(IconButton, _extends({
    "data-mui-test": "previous-month",
    size: "small"
  }, leftArrowButtonProps, {
    disabled: isPreviousMonthDisabled,
    onClick: selectPreviousMonth,
    className: clsx(classes.iconButton, classes.previousMonthButton, leftArrowButtonProps === null || leftArrowButtonProps === void 0 ? void 0 : leftArrowButtonProps.className)
  }), isRtl ? rightArrowIcon : leftArrowIcon), showRightArrowButton && createElement(IconButton, _extends({
    size: "small"
  }, rightArrowButtonProps, {
    disabled: isNextMonthDisabled,
    onClick: selectNextMonth,
    className: clsx(classes.iconButton, rightArrowButtonProps === null || rightArrowButtonProps === void 0 ? void 0 : rightArrowButtonProps.className)
  }), isRtl ? leftArrowIcon : rightArrowIcon)))));
};
CalendarHeader.displayName = 'CalendarHeader';
process.env.NODE_ENV !== "production" ? CalendarHeader.propTypes = {
  leftArrowIcon: node,
  rightArrowIcon: node
} : void 0;
CalendarHeader.defaultProps = {
  leftArrowIcon: createElement(ArrowLeftIcon, null),
  rightArrowIcon: createElement(ArrowRightIcon, null)
};

var useStyles$8 = makeStyles(function (theme) {
  return {
    root: {
      flex: '1 0 33.33%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      outline: 'none',
      height: 64,
      transition: theme.transitions.create('font-size', {
        duration: '100ms'
      }),
      '&:focus': {
        color: theme.palette.primary.main,
        fontWeight: theme.typography.fontWeightMedium
      }
    },
    monthSelected: {
      color: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium
    },
    monthDisabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    }
  };
}, {
  name: 'MuiPickersMonth'
});
var Month = function Month(_ref) {
  var selected = _ref.selected,
      onSelect = _ref.onSelect,
      disabled = _ref.disabled,
      value = _ref.value,
      children = _ref.children,
      other = _objectWithoutProperties(_ref, ["selected", "onSelect", "disabled", "value", "children"]);

  var classes = useStyles$8();
  var handleSelection = useCallback(function () {
    onSelect(value);
  }, [onSelect, value]);
  return createElement(Typography$1, _extends({
    "data-mui-test": "month",
    role: "button",
    component: "div",
    className: clsx(classes.root, selected && classes.monthSelected, disabled && classes.monthDisabled),
    tabIndex: disabled ? -1 : 0,
    onClick: handleSelection,
    onKeyPress: handleSelection,
    color: selected ? 'primary' : undefined,
    variant: selected ? 'h5' : 'subtitle1',
    children: children
  }, other));
};
Month.displayName = 'Month';

var useStyles$9 = makeStyles({
  container: {
    width: 310,
    display: 'flex',
    flexWrap: 'wrap',
    alignContent: 'stretch'
  }
}, {
  name: 'MuiPickersMonthSelection'
});
var MonthSelection = function MonthSelection(_ref) {
  var disablePast = _ref.disablePast,
      disableFuture = _ref.disableFuture,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      date = _ref.date,
      onMonthChange = _ref.onMonthChange,
      onChange = _ref.onChange;
  var utils = useUtils();
  var classes = useStyles$9();
  var currentMonth = utils.getMonth(date);

  var shouldDisableMonth = function shouldDisableMonth(month) {
    var now = utils.date();
    var utilMinDate = utils.date(minDate);
    var utilMaxDate = utils.date(maxDate);
    var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, utilMinDate) ? now : utilMinDate);
    var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, utilMaxDate) ? now : utilMaxDate);
    var isBeforeFirstEnabled = utils.isBefore(month, firstEnabledMonth);
    var isAfterLastEnabled = utils.isAfter(month, lastEnabledMonth);
    return isBeforeFirstEnabled || isAfterLastEnabled;
  };

  var onMonthSelect = useCallback(function (month) {
    var newDate = utils.setMonth(date, month);
    onChange(newDate, true);

    if (onMonthChange) {
      onMonthChange(newDate);
    }
  }, [date, onChange, onMonthChange, utils]);
  return createElement("div", {
    className: classes.container
  }, utils.getMonthArray(date).map(function (month) {
    var monthNumber = utils.getMonth(month);
    var monthText = utils.format(month, 'monthShort');
    return createElement(Month, {
      key: monthText,
      value: monthNumber,
      selected: monthNumber === currentMonth,
      onSelect: onMonthSelect,
      disabled: shouldDisableMonth(month)
    }, monthText);
  }));
};

var useStyles$a = makeStyles(function (theme) {
  return {
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
        backgroundColor: fade(theme.palette.action.active, theme.palette.action.hoverOpacity)
      },
      '&:hover': {
        backgroundColor: fade(theme.palette.action.active, theme.palette.action.hoverOpacity)
      }
    },
    hidden: {
      opacity: 0,
      pointerEvents: 'none'
    },
    current: {
      '&:not($daySelected)': {
        border: "1px solid ".concat(theme.palette.text.hint)
      }
    },
    daySelected: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      fontWeight: theme.typography.fontWeightMedium,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration["short"]
      }),
      '&:hover': {
        willChange: 'background-color',
        backgroundColor: theme.palette.primary.light
      },
      '&:focus': {
        willChange: 'background-color',
        backgroundColor: theme.palette.primary.light
      }
    },
    dayDisabled: {
      pointerEvents: 'none',
      color: theme.palette.text.hint
    },
    dayLabel: {// need for overrides
    }
  };
}, {
  name: 'MuiPickersDay'
});
var Day = function Day(_ref) {
  var children = _ref.children,
      disabled = _ref.disabled,
      hidden = _ref.hidden,
      current = _ref.current,
      selected = _ref.selected,
      other = _objectWithoutProperties(_ref, ["children", "disabled", "hidden", "current", "selected"]);

  var classes = useStyles$a();
  var className = clsx(classes.day, hidden && classes.hidden, current && classes.current, selected && classes.daySelected, disabled && classes.dayDisabled);
  return createElement(ButtonBase, _extends({
    "data-mui-test": "day",
    centerRipple: true,
    className: className,
    tabIndex: hidden || disabled ? -1 : 0
  }, other), createElement("span", {
    className: classes.dayLabel
  }, children));
};
Day.displayName = 'Day';
process.env.NODE_ENV !== "production" ? Day.propTypes = {
  current: bool,
  disabled: bool,
  hidden: bool,
  selected: bool
} : void 0;
Day.defaultProps = {
  disabled: false,
  hidden: false,
  current: false,
  selected: false
};

var DayWrapper = function DayWrapper(_ref) {
  var children = _ref.children,
      value = _ref.value,
      disabled = _ref.disabled,
      onSelect = _ref.onSelect,
      dayInCurrentMonth = _ref.dayInCurrentMonth,
      other = _objectWithoutProperties(_ref, ["children", "value", "disabled", "onSelect", "dayInCurrentMonth"]);

  var handleClick = useCallback(function () {
    return onSelect(value);
  }, [onSelect, value]);
  return createElement("div", _extends({
    role: "presentation",
    onClick: dayInCurrentMonth && !disabled ? handleClick : undefined,
    onKeyPress: dayInCurrentMonth && !disabled ? handleClick : undefined,
    children: children
  }, other));
};

var animationDuration$1 = 350;
var useStyles$b = makeStyles(function (theme) {
  var slideTransition = theme.transitions.create('transform', {
    duration: animationDuration$1,
    easing: 'cubic-bezier(0.35, 0.8, 0.4, 1)'
  });
  return {
    transitionContainer: {
      display: 'block',
      position: 'relative',
      overflowX: 'hidden',
      '& > *': {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0
      }
    },
    'slideEnter-left': {
      willChange: 'transform',
      transform: 'translate(100%)'
    },
    'slideEnter-right': {
      willChange: 'transform',
      transform: 'translate(-100%)'
    },
    slideEnterActive: {
      transform: 'translate(0%)',
      transition: slideTransition
    },
    slideExit: {
      transform: 'translate(0%)'
    },
    'slideExitActiveLeft-left': {
      willChange: 'transform',
      transform: 'translate(-200%)',
      transition: slideTransition
    },
    'slideExitActiveLeft-right': {
      willChange: 'transform',
      transform: 'translate(200%)',
      transition: slideTransition
    }
  };
}, {
  name: 'MuiPickersSlideTransition'
});

var SlideTransition = function SlideTransition(_ref) {
  var children = _ref.children,
      transKey = _ref.transKey,
      reduceAnimations = _ref.reduceAnimations,
      slideDirection = _ref.slideDirection,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className;
  var classes = useStyles$b();

  if (reduceAnimations) {
    return children;
  }

  var transitionClasses = {
    exit: classes.slideExit,
    enterActive: classes.slideEnterActive,
    // @ts-ignore
    enter: classes['slideEnter-' + slideDirection],
    // @ts-ignore
    exitActive: classes['slideExitActiveLeft-' + slideDirection]
  };
  return createElement(TransitionGroup, {
    className: clsx(classes.transitionContainer, className),
    childFactory: function childFactory(element) {
      return cloneElement(element, {
        classNames: transitionClasses
      });
    }
  }, createElement(CSSTransition, {
    mountOnEnter: true,
    unmountOnExit: true,
    key: transKey + slideDirection,
    timeout: animationDuration$1,
    classNames: transitionClasses,
    children: children
  }));
};

var useStyles$c = makeStyles$1(function (theme) {
  return {
    transitionContainer: {
      minHeight: 36 * 6 + 20
    },
    progressContainer: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    week: {
      display: 'flex',
      justifyContent: 'center'
    },
    iconButton: {
      zIndex: 1,
      backgroundColor: theme.palette.background.paper
    },
    previousMonthButton: {
      marginRight: 12
    },
    daysHeader: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    dayLabel: {
      width: 36,
      height: 40,
      margin: '0 2px',
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: theme.palette.text.hint
    }
  };
});
var Calendar = function Calendar(_ref) {
  var date = _ref.date,
      onChange = _ref.onChange,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      slideDirection = _ref.slideDirection,
      disableFuture = _ref.disableFuture,
      disablePast = _ref.disablePast,
      currentMonth = _ref.currentMonth,
      renderDay = _ref.renderDay,
      reduceAnimations = _ref.reduceAnimations,
      allowKeyboardControl = _ref.allowKeyboardControl,
      wrapperVariant = _ref.wrapperVariant,
      props = _objectWithoutProperties(_ref, ["date", "onChange", "minDate", "maxDate", "slideDirection", "disableFuture", "disablePast", "currentMonth", "renderDay", "reduceAnimations", "allowKeyboardControl", "wrapperVariant"]);

  var utils = useUtils();
  var theme = useTheme$1();
  var classes = useStyles$c();
  var now = utils.date();
  var validateMinMaxDate = useCallback(function (day) {
    return Boolean(disableFuture && utils.isAfterDay(day, now) || disablePast && utils.isBeforeDay(day, now) || minDate && utils.isBeforeDay(day, utils.date(minDate)) || maxDate && utils.isAfterDay(day, utils.date(maxDate)));
  }, [disableFuture, disablePast, maxDate, minDate, now, utils]);
  var shouldDisableDate = useCallback(function (day) {
    return validateMinMaxDate(day) || Boolean(props.shouldDisableDate && props.shouldDisableDate(day));
  }, [props, validateMinMaxDate]);
  var handleDaySelect = useCallback(function (day) {
    var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    onChange(utils.mergeDateAndTime(day, date), isFinish);
  }, [date, onChange, utils]);
  var moveToDay = useCallback(function (day) {
    if (day && !shouldDisableDate(day)) {
      handleDaySelect(day, false);
    }
  }, [handleDaySelect, shouldDisableDate]);
  useEffect(function () {
    if (shouldDisableDate(date)) {
      var closestEnabledDate = findClosestEnabledDate({
        date: date,
        utils: utils,
        minDate: utils.date(minDate),
        maxDate: utils.date(maxDate),
        disablePast: Boolean(disablePast),
        disableFuture: Boolean(disableFuture),
        shouldDisableDate: shouldDisableDate
      });
      handleDaySelect(closestEnabledDate, false);
    }
  }, []); // eslint-disable-line

  useGlobalKeyDown(Boolean(allowKeyboardControl && wrapperVariant !== 'static'), {
    38: function _() {
      return moveToDay(utils.addDays(date, -7));
    },
    // ArrowUp
    40: function _() {
      return moveToDay(utils.addDays(date, 7));
    },
    // ArrowDown
    37: function _() {
      return moveToDay(utils.addDays(date, theme.direction === 'ltr' ? -1 : 1));
    },
    // ArrowLeft
    39: function _() {
      return moveToDay(utils.addDays(date, theme.direction === 'ltr' ? 1 : -1));
    } // ArrowRight

  });
  var selectedDate = utils.startOfDay(date);
  var currentMonthNumber = utils.getMonth(currentMonth);
  return createElement(Fragment, null, createElement("div", {
    className: classes.daysHeader
  }, utils.getWeekdays().map(function (day, i) {
    return createElement(Typography, {
      key: day + i.toString(),
      variant: "caption",
      className: classes.dayLabel,
      children: day.charAt(0).toUpperCase()
    });
  })), createElement(SlideTransition, {
    reduceAnimations: reduceAnimations,
    slideDirection: slideDirection,
    transKey: currentMonth.toString(),
    className: classes.transitionContainer
  }, createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, utils.getWeekArray(currentMonth).map(function (week) {
    return createElement("div", {
      key: "week-".concat(week[0].toString()),
      className: classes.week
    }, week.map(function (day) {
      var disabled = shouldDisableDate(day);
      var isDayInCurrentMonth = utils.getMonth(day) === currentMonthNumber;
      var dayComponent = createElement(Day, {
        disabled: disabled,
        current: utils.isSameDay(day, now),
        hidden: !isDayInCurrentMonth,
        selected: utils.isSameDay(selectedDate, day),
        children: utils.format(day, 'dayOfMonth')
      });

      if (renderDay) {
        dayComponent = renderDay(day, selectedDate, isDayInCurrentMonth, dayComponent);
      }

      return createElement(DayWrapper, {
        key: day.toString(),
        value: day,
        disabled: disabled,
        dayInCurrentMonth: isDayInCurrentMonth,
        onSelect: handleDaySelect,
        children: dayComponent
      });
    }));
  }))));
};

function useParsedDate(possiblyUnparsedValue) {
  var utils = useUtils();
  return useMemo(function () {
    return utils.date(possiblyUnparsedValue);
  }, [possiblyUnparsedValue, utils]);
}

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function calendarStateReducer(state, action) {
  switch (action.type) {
    case 'changeMonthLoading':
      {
        return _objectSpread$3({}, state, {
          loadingQueue: state.loadingQueue + 1,
          slideDirection: action.direction,
          currentMonth: action.newMonth
        });
      }

    case 'changeMonth':
      {
        return _objectSpread$3({}, state, {
          slideDirection: action.direction,
          currentMonth: action.newMonth
        });
      }

    case 'popLoadingQueue':
      {
        return _objectSpread$3({}, state, {
          loadingQueue: state.loadingQueue <= 0 ? 0 : state.loadingQueue - 1
        });
      }
  }
}

var useStyles$d = makeStyles$1({
  viewTransitionContainer: {
    overflowY: 'auto'
  },
  gridFullHeight: {
    flex: 1,
    minHeight: VIEW_HEIGHT - 60,
    height: '100%'
  }
}, {
  name: 'MuiPickersCalendarView'
});
var CalendarView = function CalendarView(_ref) {
  var date = _ref.date,
      view = _ref.view,
      onChange = _ref.onChange,
      changeView = _ref.changeView,
      onMonthChange = _ref.onMonthChange,
      unparsedMinDate = _ref.minDate,
      unparsedMaxDate = _ref.maxDate,
      _ref$reduceAnimations = _ref.reduceAnimations,
      reduceAnimations = _ref$reduceAnimations === void 0 ? typeof window !== 'undefined' && /(android)/i.test(window.navigator.userAgent) : _ref$reduceAnimations,
      _ref$loadingIndicator = _ref.loadingIndicator,
      loadingIndicator = _ref$loadingIndicator === void 0 ? createElement(CircularProgress, {
    "data-mui-test": "loading-progress"
  }) : _ref$loadingIndicator,
      other = _objectWithoutProperties(_ref, ["date", "view", "onChange", "changeView", "onMonthChange", "minDate", "maxDate", "reduceAnimations", "loadingIndicator"]);

  var utils = useUtils();
  var classes = useStyles$d();
  var minDate = useParsedDate(unparsedMinDate);
  var maxDate = useParsedDate(unparsedMaxDate);
  var wrapperVariant = useContext(WrapperVariantContext);

  var _React$useReducer = useReducer(calendarStateReducer, {
    loadingQueue: 0,
    currentMonth: utils.startOfMonth(date),
    slideDirection: 'left'
  }),
      _React$useReducer2 = _slicedToArray(_React$useReducer, 2),
      _React$useReducer2$ = _React$useReducer2[0],
      currentMonth = _React$useReducer2$.currentMonth,
      loadingQueue = _React$useReducer2$.loadingQueue,
      slideDirection = _React$useReducer2$.slideDirection,
      dispatch = _React$useReducer2[1];

  var handleChangeMonth = function handleChangeMonth(payload) {
    var returnedPromise = onMonthChange && onMonthChange(payload.newMonth);

    if (returnedPromise) {
      dispatch(_objectSpread$3({
        type: 'changeMonthLoading'
      }, payload));
      returnedPromise.then(function () {
        return dispatch({
          type: 'popLoadingQueue'
        });
      });
    } else {
      dispatch(_objectSpread$3({
        type: 'changeMonth'
      }, payload));
    }
  };

  useEffect(function () {
    if (utils.isSameMonth(date, currentMonth)) {
      return;
    }

    handleChangeMonth({
      newMonth: utils.startOfMonth(date),
      direction: utils.isAfterDay(date, currentMonth) ? 'left' : 'right'
    });
  }, [date]); // eslint-disable-line

  return createElement(Fragment, null, createElement(CalendarHeader, _extends({}, other, {
    view: view,
    month: currentMonth,
    changeView: changeView,
    onMonthChange: function onMonthChange(newMonth, direction) {
      return handleChangeMonth({
        newMonth: newMonth,
        direction: direction
      });
    },
    minDate: minDate,
    maxDate: maxDate,
    reduceAnimations: reduceAnimations
  })), createElement(FadeTransitionGroup, {
    reduceAnimations: reduceAnimations,
    className: classes.viewTransitionContainer,
    transKey: view
  }, createElement("div", null, view === 'year' && createElement(YearSelection, _extends({}, other, {
    date: date,
    onChange: onChange,
    minDate: minDate,
    maxDate: maxDate
  })), view === 'month' && createElement(MonthSelection, _extends({}, other, {
    date: date,
    onChange: onChange,
    minDate: minDate,
    maxDate: maxDate,
    onMonthChange: onMonthChange
  })), view === 'date' && (loadingQueue > 0 ? createElement(Grid, {
    className: classes.gridFullHeight,
    container: true,
    alignItems: "center",
    justify: "center"
  }, loadingIndicator) : createElement(Calendar, _extends({}, other, {
    reduceAnimations: reduceAnimations,
    currentMonth: currentMonth,
    slideDirection: slideDirection,
    date: date,
    onChange: onChange,
    minDate: minDate,
    maxDate: maxDate,
    wrapperVariant: wrapperVariant
  }))))));
};

var getOrientation = function getOrientation() {
  if (typeof window === 'undefined') {
    return 'portrait';
  }

  if (window.screen && window.screen.orientation && window.screen.orientation.angle) {
    return Math.abs(window.screen.orientation.angle) === 90 ? 'landscape' : 'portrait';
  } // Support IOS safari


  if (window.orientation) {
    return Math.abs(Number(window.orientation)) === 90 ? 'landscape' : 'portrait';
  }

  return 'portrait';
};

function useIsLandscape(views, customOrientation) {
  var _React$useState = useState(getOrientation()),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      orientation = _React$useState2[0],
      setOrientation = _React$useState2[1];

  var eventHandler = useCallback(function () {
    return setOrientation(getOrientation());
  }, []);
  useIsomorphicEffect(function () {
    window.addEventListener('orientationchange', eventHandler);
    return function () {
      return window.removeEventListener('orientationchange', eventHandler);
    };
  }, [eventHandler]);

  if (arrayIncludes(views, ['hours', 'minutes', 'seconds'])) {
    // could not display 13:34:44 in landscape mode
    return false;
  }

  var orientationToUse = customOrientation || orientation;
  return orientationToUse === 'landscape';
}

var ClockPointer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ClockPointer, _React$Component);

  function ClockPointer() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ClockPointer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ClockPointer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      toAnimateTransform: false,
      previousType: undefined
    };

    _this.getAngleStyle = function () {
      var _this$props = _this.props,
          value = _this$props.value,
          isInner = _this$props.isInner,
          type = _this$props.type;
      var max = type === 'hours' ? 12 : 60;
      var angle = 360 / max * value;

      if (type === 'hours' && value > 12) {
        angle -= 360; // round up angle to max 360 degrees
      }

      return {
        height: isInner ? '26%' : '40%',
        transform: "rotateZ(".concat(angle, "deg)")
      };
    };

    return _this;
  }

  _createClass(ClockPointer, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          hasSelected = _this$props2.hasSelected;
      return createElement("div", {
        style: this.getAngleStyle(),
        className: clsx(classes.pointer, this.state.toAnimateTransform && classes.animateTransform)
      }, createElement("div", {
        className: clsx(classes.thumb, hasSelected && classes.noPoint)
      }));
    }
  }]);

  return ClockPointer;
}(Component);

ClockPointer.getDerivedStateFromProps = function (nextProps, state) {
  if (nextProps.type !== state.previousType) {
    return {
      toAnimateTransform: true,
      previousType: nextProps.type
    };
  }

  return {
    toAnimateTransform: false,
    previousType: nextProps.type
  };
};

var styles = function styles(theme) {
  return createStyles({
    pointer: {
      width: 2,
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      left: 'calc(50% - 1px)',
      bottom: '50%',
      transformOrigin: 'center bottom 0px'
    },
    animateTransform: {
      transition: theme.transitions.create(['transform', 'height'])
    },
    thumb: {
      width: 4,
      height: 4,
      backgroundColor: theme.palette.primary.contrastText,
      borderRadius: '100%',
      position: 'absolute',
      top: -21,
      left: -15,
      border: "14px solid ".concat(theme.palette.primary.main),
      boxSizing: 'content-box'
    },
    noPoint: {
      backgroundColor: theme.palette.primary.main
    }
  });
};
var ClockPointer$1 = withStyles(styles, {
  name: 'MuiPickersClockPointer'
})(ClockPointer);

var clockCenter = {
  x: 260 / 2,
  y: 260 / 2
};
var baseClockPoint = {
  x: clockCenter.x,
  y: 0
};
var cx = baseClockPoint.x - clockCenter.x;
var cy = baseClockPoint.y - clockCenter.y;

var rad2deg = function rad2deg(rad) {
  return rad * 57.29577951308232;
};

var getAngleValue = function getAngleValue(step, offsetX, offsetY) {
  var x = offsetX - clockCenter.x;
  var y = offsetY - clockCenter.y;
  var atan = Math.atan2(cx, cy) - Math.atan2(x, y);
  var deg = rad2deg(atan);
  deg = Math.round(deg / step) * step;
  deg %= 360;
  var value = Math.floor(deg / step) || 0;
  var delta = Math.pow(x, 2) + Math.pow(y, 2);
  var distance = Math.sqrt(delta);
  return {
    value: value,
    distance: distance
  };
};

var getHours = function getHours(offsetX, offsetY, ampm) {
  var _getAngleValue = getAngleValue(30, offsetX, offsetY),
      value = _getAngleValue.value,
      distance = _getAngleValue.distance;

  value = value || 12;

  if (!ampm) {
    if (distance < 90) {
      value += 12;
      value %= 24;
    }
  } else {
    value %= 12;
  }

  return value;
};
var getMinutes = function getMinutes(offsetX, offsetY) {
  var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var angleStep = step * 6;

  var _getAngleValue2 = getAngleValue(angleStep, offsetX, offsetY),
      value = _getAngleValue2.value;

  value = value * step % 60;
  return value;
};
var getMeridiem = function getMeridiem(date, utils) {
  return utils.getHours(date) >= 12 ? 'pm' : 'am';
};
var convertToMeridiem = function convertToMeridiem(time, meridiem, ampm, utils) {
  if (ampm) {
    var currentMeridiem = utils.getHours(time) >= 12 ? 'pm' : 'am';

    if (currentMeridiem !== meridiem) {
      var hours = meridiem === 'am' ? utils.getHours(time) - 12 : utils.getHours(time) + 12;
      return utils.setHours(time, hours);
    }
  }

  return time;
};

var useStyles$e = makeStyles(function (theme) {
  var textColor = theme.palette.type === 'light' ? theme.palette.primary.contrastText : theme.palette.getContrastText(theme.palette.background["default"]);
  return {
    toolbarTxt: {
      color: fade$1(textColor, 0.54)
    },
    toolbarBtnSelected: {
      color: textColor
    }
  };
}, {
  name: 'MuiPickersToolbarText'
});

var ToolbarText = function ToolbarText(_ref) {
  var selected = _ref.selected,
      label = _ref.label,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className,
      other = _objectWithoutProperties(_ref, ["selected", "label", "className"]);

  var classes = useStyles$e();
  return createElement(Typography$1, _extends({
    children: label,
    className: clsx(classes.toolbarTxt, className, selected && classes.toolbarBtnSelected)
  }, other));
};

var useStyles$f = makeStyles({
  toolbarBtn: {
    padding: 0,
    minWidth: '16px',
    textTransform: 'none'
  }
}, {
  name: 'MuiPickersToolbarButton'
});

var ToolbarButton = function ToolbarButton(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? null : _ref$className,
      label = _ref.label,
      selected = _ref.selected,
      variant = _ref.variant,
      align = _ref.align,
      typographyClassName = _ref.typographyClassName,
      other = _objectWithoutProperties(_ref, ["className", "label", "selected", "variant", "align", "typographyClassName"]);

  var classes = useStyles$f();
  return createElement(Button, _extends({
    variant: "text",
    className: clsx(classes.toolbarBtn, className)
  }, other), createElement(ToolbarText, {
    align: align,
    className: typographyClassName,
    variant: variant,
    label: label,
    selected: selected
  }));
};

var useStyles$g = makeStyles({
  separator: {
    margin: '0 4px 0 2px',
    cursor: 'default'
  },
  hourMinuteLabel: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  hourMinuteLabelLandscape: {
    marginTop: 'auto'
  },
  hourMinuteLabelReverse: {
    flexDirection: 'row-reverse'
  },
  ampmSelection: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 'auto',
    marginLeft: 12
  },
  ampmLandscape: {
    margin: '4px 0 auto',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexBasis: '100%'
  },
  ampmLabel: {
    fontSize: 17
  },
  penIconLandscape: {
    marginTop: 'auto'
  }
}, {
  name: 'MuiPickersTimePickerToolbar'
});
function useMeridiemMode(date, ampm, onChange) {
  var utils = useUtils();
  var meridiemMode = getMeridiem(date, utils);
  var handleMeridiemChange = useCallback(function (mode) {
    var timeWithMeridiem = convertToMeridiem(date, mode, Boolean(ampm), utils);
    onChange(timeWithMeridiem, false);
  }, [ampm, date, onChange, utils]);
  return {
    meridiemMode: meridiemMode,
    handleMeridiemChange: handleMeridiemChange
  };
}
var TimePickerToolbar = function TimePickerToolbar(_ref) {
  var date = _ref.date,
      views = _ref.views,
      ampm = _ref.ampm,
      openView = _ref.openView,
      onChange = _ref.onChange,
      isLandscape = _ref.isLandscape,
      setOpenView = _ref.setOpenView,
      ampmInClock = _ref.ampmInClock,
      isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
      toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'SELECT TIME' : _ref$title;
  var utils = useUtils();
  var theme = useTheme();
  var classes = useStyles$g();
  var showAmPmControl = ampm && !ampmInClock;

  var _useMeridiemMode = useMeridiemMode(date, ampm, onChange),
      meridiemMode = _useMeridiemMode.meridiemMode,
      handleMeridiemChange = _useMeridiemMode.handleMeridiemChange;

  var clockTypographyVariant = 'h3';
  return createElement(PickerToolbar, {
    landscapeDirection: "row",
    title: title,
    isLandscape: isLandscape,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView,
    penIconClassName: clsx(isLandscape && classes.penIconLandscape)
  }, createElement("div", {
    className: clsx(classes.hourMinuteLabel, isLandscape && classes.hourMinuteLabelLandscape, {
      rtl: classes.hourMinuteLabelReverse
    }[theme.direction])
  }, arrayIncludes(views, 'hours') && createElement(ToolbarButton, {
    variant: clockTypographyVariant,
    onClick: function onClick() {
      return setOpenView('hours');
    },
    selected: openView === 'hours',
    label: ampm ? utils.format(date, 'hours12h') : utils.format(date, 'hours24h')
  }), arrayIncludes(views, ['hours', 'minutes']) && createElement(ToolbarText, {
    label: ":",
    variant: clockTypographyVariant,
    selected: false,
    className: classes.separator
  }), arrayIncludes(views, 'minutes') && createElement(ToolbarButton, {
    variant: clockTypographyVariant,
    onClick: function onClick() {
      return setOpenView('minutes');
    },
    selected: openView === 'minutes',
    label: utils.format(date, 'minutes')
  }), arrayIncludes(views, ['minutes', 'seconds']) && createElement(ToolbarText, {
    variant: "h2",
    label: ":",
    selected: false,
    className: classes.separator
  }), arrayIncludes(views, 'seconds') && createElement(ToolbarButton, {
    variant: clockTypographyVariant,
    onClick: function onClick() {
      return setOpenView('seconds');
    },
    selected: openView === 'seconds',
    label: utils.format(date, 'seconds')
  })), showAmPmControl && createElement("div", {
    className: clsx(classes.ampmSelection, isLandscape && classes.ampmLandscape)
  }, createElement(ToolbarButton, {
    "data-mui-test": "toolbar-am-btn",
    disableRipple: true,
    variant: "subtitle2",
    selected: meridiemMode === 'am',
    typographyClassName: classes.ampmLabel,
    label: utils.getMeridiemText('am'),
    onClick: function onClick() {
      return handleMeridiemChange('am');
    }
  }), createElement(ToolbarButton, {
    "data-mui-test": "toolbar-pm-btn",
    disableRipple: true,
    variant: "subtitle2",
    selected: meridiemMode === 'pm',
    typographyClassName: classes.ampmLabel,
    label: utils.getMeridiemText('pm'),
    onClick: function onClick() {
      return handleMeridiemChange('pm');
    }
  })));
};

var useStyles$h = makeStyles$1(function (theme) {
  return {
    container: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      minHeight: VIEW_HEIGHT,
      alignItems: 'center'
    },
    clock: {
      backgroundColor: 'rgba(0,0,0,.07)',
      borderRadius: '50%',
      height: 260,
      width: 260,
      position: 'relative',
      pointerEvents: 'none'
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
        cursor: 'move'
      }
    },
    pin: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      backgroundColor: theme.palette.primary.main,
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    amButton: {
      zIndex: 1,
      left: 8,
      position: 'absolute',
      bottom: 8
    },
    pmButton: {
      zIndex: 1,
      position: 'absolute',
      bottom: 8,
      right: 8
    },
    meridiemButtonSelected: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.primary.light
      }
    }
  };
}, {
  name: 'MuiPickersClock'
});
var Clock = function Clock(_ref) {
  var date = _ref.date,
      onDateChange = _ref.onDateChange,
      _ref$ampmInClock = _ref.ampmInClock,
      ampmInClock = _ref$ampmInClock === void 0 ? false : _ref$ampmInClock,
      value = _ref.value,
      numbersElementsArray = _ref.children,
      type = _ref.type,
      ampm = _ref.ampm,
      minutesStep = _ref.minutesStep,
      onChange = _ref.onChange;
  var classes = useStyles$h();
  var wrapperVariant = useContext(WrapperVariantContext);
  var isMoving = useRef(false);

  var _useMeridiemMode = useMeridiemMode(date, ampm, onDateChange),
      meridiemMode = _useMeridiemMode.meridiemMode,
      handleMeridiemChange = _useMeridiemMode.handleMeridiemChange;

  var isPointerInner = !ampm && type === 'hours' && (value < 1 || value > 12);

  var setTime = function setTime(e) {
    var isFinish = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var offsetX = e.offsetX,
        offsetY = e.offsetY;

    if (typeof offsetX === 'undefined') {
      var rect = e.target.getBoundingClientRect();
      offsetX = e.changedTouches[0].clientX - rect.left;
      offsetY = e.changedTouches[0].clientY - rect.top;
    }

    var value = type === 'seconds' || type === 'minutes' ? getMinutes(offsetX, offsetY, minutesStep) : getHours(offsetX, offsetY, Boolean(ampm));
    onChange(value, isFinish);
  };

  var handleTouchMove = function handleTouchMove(e) {
    isMoving.current = true;
    setTime(e);
  };

  var handleTouchEnd = function handleTouchEnd(e) {
    if (isMoving.current) {
      setTime(e, true);
      isMoving.current = false;
    }
  };

  var handleMouseMove = function handleMouseMove(e) {
    e.preventDefault();
    e.stopPropagation(); // MouseEvent.which is deprecated, but MouseEvent.buttons is not supported in Safari

    var isButtonPressed = typeof e.buttons === 'undefined' ? e.nativeEvent.which === 1 : e.buttons === 1;

    if (isButtonPressed) {
      setTime(e.nativeEvent, false);
    }
  };

  var handleMouseUp = function handleMouseUp(e) {
    if (isMoving.current) {
      isMoving.current = false;
    }

    setTime(e.nativeEvent, true);
  };

  var hasSelected = useMemo(function () {
    if (type === 'hours') {
      return true;
    }

    return value % 5 === 0;
  }, [type, value]);
  return createElement("div", {
    className: classes.container
  }, createElement("div", {
    className: classes.clock
  }, createElement("div", {
    role: "menu",
    tabIndex: -1,
    className: classes.squareMask,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    onMouseUp: handleMouseUp,
    onMouseMove: handleMouseMove
  }), createElement("div", {
    className: classes.pin
  }), createElement(ClockPointer$1, {
    type: type,
    value: value,
    isInner: isPointerInner,
    hasSelected: hasSelected
  }), numbersElementsArray), ampm && (wrapperVariant === 'desktop' || ampmInClock) && createElement(Fragment, null, createElement(IconButton, {
    "data-mui-test": "in-clock-am-btn",
    onClick: function onClick() {
      return handleMeridiemChange('am');
    },
    className: clsx(classes.amButton, {
      am: classes.meridiemButtonSelected
    }[meridiemMode])
  }, createElement(Typography, {
    variant: "caption"
  }, "AM")), createElement(IconButton, {
    "data-mui-test": "in-clock-pm-btn",
    onClick: function onClick() {
      return handleMeridiemChange('pm');
    },
    className: clsx(classes.pmButton, {
      pm: classes.meridiemButtonSelected
    }[meridiemMode])
  }, createElement(Typography, {
    variant: "caption"
  }, "PM"))));
}; // @ts-ignore

Clock.defaultProps = {
  ampm: bool,
  minutesStep: number
};
Clock.displayName = 'Clock';

var positions = {
  0: [0, 40],
  1: [55, 19.6],
  2: [94.4, 59.5],
  3: [109, 114],
  4: [94.4, 168.5],
  5: [54.5, 208.4],
  6: [0, 223],
  7: [-54.5, 208.4],
  8: [-94.4, 168.5],
  9: [-109, 114],
  10: [-94.4, 59.5],
  11: [-54.5, 19.6],
  12: [0, 5],
  13: [36.9, 49.9],
  14: [64, 77],
  15: [74, 114],
  16: [64, 151],
  17: [37, 178],
  18: [0, 188],
  19: [-37, 178],
  20: [-64, 151],
  21: [-74, 114],
  22: [-64, 77],
  23: [-37, 50]
};
var useStyles$i = makeStyles(function (theme) {
  var size = 32;
  return {
    clockNumber: {
      width: size,
      height: 32,
      userSelect: 'none',
      position: 'absolute',
      left: "calc((100% - ".concat( "".concat(size, "px") , ") / 2)"),
      display: 'inline-flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      color: theme.palette.type === 'light' ? theme.palette.text.primary : theme.palette.text.hint
    },
    clockNumberSelected: {
      color: theme.palette.primary.contrastText
    }
  };
}, {
  name: 'MuiPickersClockNumber'
});
var ClockNumber = function ClockNumber(_ref) {
  var selected = _ref.selected,
      label = _ref.label,
      index = _ref.index,
      isInner = _ref.isInner;
  var classes = useStyles$i();
  var className = clsx(classes.clockNumber, selected && classes.clockNumberSelected);
  var transformStyle = useMemo(function () {
    var position = positions[index];
    return {
      transform: "translate(".concat(position[0], "px, ").concat(position[1], "px")
    };
  }, [index]);
  return createElement(Typography$1, {
    component: "span",
    className: className,
    variant: isInner ? 'body2' : 'body1',
    style: transformStyle,
    children: label
  });
};

var getHourNumbers = function getHourNumbers(_ref) {
  var ampm = _ref.ampm,
      utils = _ref.utils,
      date = _ref.date;
  var currentHours = utils.getHours(date);
  var hourNumbers = [];
  var startHour = ampm ? 1 : 0;
  var endHour = ampm ? 12 : 23;

  var isSelected = function isSelected(hour) {
    if (ampm) {
      if (hour === 12) {
        return currentHours === 12 || currentHours === 0;
      }

      return currentHours === hour || currentHours - 12 === hour;
    }

    return currentHours === hour;
  };

  for (var hour = startHour; hour <= endHour; hour += 1) {
    var label = hour.toString();

    if (hour === 0) {
      label = '00';
    }

    var props = {
      index: hour,
      label: utils.formatNumber(label),
      selected: isSelected(hour),
      isInner: !ampm && (hour === 0 || hour > 12)
    };
    hourNumbers.push(createElement(ClockNumber, _extends({
      key: hour
    }, props)));
  }

  return hourNumbers;
};
var getMinutesNumbers = function getMinutesNumbers(_ref2) {
  var value = _ref2.value,
      utils = _ref2.utils;
  var f = utils.formatNumber;
  return [createElement(ClockNumber, {
    label: f('00'),
    selected: value === 0,
    index: 12,
    key: 12
  }), createElement(ClockNumber, {
    label: f('05'),
    selected: value === 5,
    index: 1,
    key: 1
  }), createElement(ClockNumber, {
    label: f('10'),
    selected: value === 10,
    index: 2,
    key: 2
  }), createElement(ClockNumber, {
    label: f('15'),
    selected: value === 15,
    index: 3,
    key: 3
  }), createElement(ClockNumber, {
    label: f('20'),
    selected: value === 20,
    index: 4,
    key: 4
  }), createElement(ClockNumber, {
    label: f('25'),
    selected: value === 25,
    index: 5,
    key: 5
  }), createElement(ClockNumber, {
    label: f('30'),
    selected: value === 30,
    index: 6,
    key: 6
  }), createElement(ClockNumber, {
    label: f('35'),
    selected: value === 35,
    index: 7,
    key: 7
  }), createElement(ClockNumber, {
    label: f('40'),
    selected: value === 40,
    index: 8,
    key: 8
  }), createElement(ClockNumber, {
    label: f('45'),
    selected: value === 45,
    index: 9,
    key: 9
  }), createElement(ClockNumber, {
    label: f('50'),
    selected: value === 50,
    index: 10,
    key: 10
  }), createElement(ClockNumber, {
    label: f('55'),
    selected: value === 55,
    index: 11,
    key: 11
  })];
};

var ClockView = function ClockView(_ref) {
  var type = _ref.type,
      onDateChange = _ref.onDateChange,
      onHourChange = _ref.onHourChange,
      onMinutesChange = _ref.onMinutesChange,
      onSecondsChange = _ref.onSecondsChange,
      ampm = _ref.ampm,
      date = _ref.date,
      minutesStep = _ref.minutesStep,
      ampmInClock = _ref.ampmInClock;
  var utils = useUtils();
  var viewProps = useMemo(function () {
    switch (type) {
      case 'hours':
        return {
          value: utils.getHours(date),
          children: getHourNumbers({
            date: date,
            utils: utils,
            ampm: Boolean(ampm)
          }),
          onChange: function onChange(value, isFinish) {
            var currentMeridiem = getMeridiem(date, utils);
            var updatedTimeWithMeridiem = convertToMeridiem(utils.setHours(date, value), currentMeridiem, Boolean(ampm), utils);
            onHourChange(updatedTimeWithMeridiem, isFinish);
          }
        };

      case 'minutes':
        var minutesValue = utils.getMinutes(date);
        return {
          value: minutesValue,
          children: getMinutesNumbers({
            value: minutesValue,
            utils: utils
          }),
          onChange: function onChange(value, isFinish) {
            var updatedTime = utils.setMinutes(date, value);
            onMinutesChange(updatedTime, isFinish);
          }
        };

      case 'seconds':
        var secondsValue = utils.getSeconds(date);
        return {
          value: secondsValue,
          children: getMinutesNumbers({
            value: secondsValue,
            utils: utils
          }),
          onChange: function onChange(value, isFinish) {
            var updatedTime = utils.setSeconds(date, value);
            onSecondsChange(updatedTime, isFinish);
          }
        };

      default:
        throw new Error('You must provide the type for ClockView');
    }
  }, [ampm, date, onHourChange, onMinutesChange, onSecondsChange, type, utils]);
  return createElement(Clock, _extends({
    date: date,
    ampmInClock: ampmInClock,
    onDateChange: onDateChange,
    type: type,
    ampm: ampm,
    minutesStep: minutesStep
  }, viewProps));
};
ClockView.displayName = 'ClockView'; // @ts-ignore

process.env.NODE_ENV !== "production" ? ClockView.propTypes = {
  date: object.isRequired,
  onHourChange: func.isRequired,
  onMinutesChange: func.isRequired,
  onSecondsChange: func.isRequired,
  ampm: bool,
  minutesStep: number,
  type: oneOf(['minutes', 'hours', 'seconds']).isRequired
} : void 0;
ClockView.defaultProps = {
  ampm: true,
  minutesStep: 1
};
var ClockView$1 = memo(ClockView);

var useStyles$j = makeStyles$2(function () {
  return {
    mobileKeyboardView: {
      padding: '16px 24px'
    }
  };
});
var MobileKeyboardInputView = function MobileKeyboardInputView(_ref) {
  var clearLabel = _ref.clearLabel,
      DialogProps = _ref.DialogProps,
      clearable = _ref.clearable,
      other = _objectWithoutProperties(_ref, ["clearLabel", "DialogProps", "clearable"]);

  var classes = useStyles$j();
  return createElement("div", {
    className: classes.mobileKeyboardView
  }, createElement(KeyboardDateInput, _extends({
    autoFocus: true,
    fullWidth: true
  }, other, {
    hideOpenPickerButton: true,
    ignoreInvalidInputs: true
  })));
};

var useStyles$k = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column'
  },
  containerLandscape: {
    flexDirection: 'row'
  },
  pickerView: {
    overflowX: 'hidden',
    width: DIALOG_WIDTH,
    maxHeight: VIEW_HEIGHT,
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto'
  },
  pickerViewLandscape: {
    padding: '0 8px'
  }
}, {
  name: 'MuiPickersBasePicker'
});
function Picker(_ref) {
  var date = _ref.date,
      _ref$openTo = _ref.openTo,
      openTo = _ref$openTo === void 0 ? 'date' : _ref$openTo,
      _ref$views = _ref.views,
      views = _ref$views === void 0 ? ['year', 'month', 'date', 'hours', 'minutes', 'seconds'] : _ref$views,
      title = _ref.title,
      showToolbar = _ref.showToolbar,
      onDateChange = _ref.onDateChange,
      ToolbarComponent = _ref.ToolbarComponent,
      orientation = _ref.orientation,
      DateInputProps = _ref.DateInputProps,
      isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
      toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
      other = _objectWithoutProperties(_ref, ["date", "openTo", "views", "title", "showToolbar", "onDateChange", "ToolbarComponent", "orientation", "DateInputProps", "isMobileKeyboardViewOpen", "toggleMobileKeyboardView"]);

  var classes = useStyles$k();
  var isLandscape = useIsLandscape(views, orientation);
  var wrapperVariant = useContext(WrapperVariantContext);
  var onChange = useCallback(function (date, isFinish) {
    onDateChange(date, wrapperVariant, isFinish);
  }, [onDateChange, wrapperVariant]);
  var toShowToolbar = typeof showToolbar === 'undefined' ? wrapperVariant !== 'desktop' : showToolbar;

  var _useViews = useViews({
    views: views,
    openTo: openTo,
    onChange: onChange,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView
  }),
      openView = _useViews.openView,
      setOpenView = _useViews.setOpenView,
      handleChangeAndOpenNext = _useViews.handleChangeAndOpenNext;

  return createElement("div", {
    className: clsx(classes.container, isLandscape && classes.containerLandscape)
  }, toShowToolbar && createElement(ToolbarComponent, _extends({}, other, {
    views: views,
    isLandscape: isLandscape,
    date: date,
    onChange: onChange,
    setOpenView: setOpenView,
    openView: openView,
    title: title,
    ampmInClock: other.ampmInClock,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView
  })), createElement("div", {
    className: clsx(classes.pickerView, isLandscape && classes.pickerViewLandscape)
  }, isMobileKeyboardViewOpen ? createElement(MobileKeyboardInputView, DateInputProps) : createElement(Fragment, null, (openView === 'year' || openView === 'month' || openView === 'date') && createElement(CalendarView, _extends({
    date: date,
    changeView: setOpenView // @ts-ignore
    ,
    views: views,
    onChange: handleChangeAndOpenNext,
    view: openView
  }, other)), (openView === 'hours' || openView === 'minutes' || openView === 'seconds') && createElement(ClockView, _extends({}, other, {
    date: date,
    type: openView,
    onDateChange: onChange,
    onHourChange: handleChangeAndOpenNext,
    onMinutesChange: handleChangeAndOpenNext,
    onSecondsChange: handleChangeAndOpenNext
  })))));
}
Picker.displayName = 'Picker';

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
function makePickerWithStateAndWrapper(Wrapper, _ref) {
  var useDefaultProps = _ref.useDefaultProps,
      DefaultToolbarComponent = _ref.DefaultToolbarComponent;

  function PickerWithState(props) {
    var defaultProps = useDefaultProps(props);

    var allProps = _objectSpread$4({}, defaultProps, {}, props);

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
      DateInputProps: _objectSpread$4({}, inputProps, {}, restPropsForTextField),
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

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var datePickerConfig = {
  DefaultToolbarComponent: DatePickerToolbar,
  useDefaultProps: function useDefaultProps(_ref) {
    var _ref$openTo = _ref.openTo,
        openTo = _ref$openTo === void 0 ? 'date' : _ref$openTo,
        _ref$views = _ref.views,
        views = _ref$views === void 0 ? ['year', 'date'] : _ref$views;
    var utils = useUtils();
    return _objectSpread$5({}, datePickerDefaultProps, {
      views: views,
      openTo: openTo,
      format: getFormatByViews(views, utils)
    });
  }
};
var DatePicker = makePickerWithStateAndWrapper(ResponsiveWrapper, datePickerConfig);
var MobileDatePicker = makePickerWithStateAndWrapper(MobileWrapper, datePickerConfig);
var DesktopDatePicker = makePickerWithStateAndWrapper(DesktopWrapper, datePickerConfig);
var StaticDatePicker = makePickerWithStateAndWrapper(StaticWrapper, datePickerConfig);

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function useDefaultProps(_ref) {
  var _ref$ampm = _ref.ampm,
      ampm = _ref$ampm === void 0 ? false : _ref$ampm,
      format = _ref.format,
      _ref$openTo = _ref.openTo,
      openTo = _ref$openTo === void 0 ? 'hours' : _ref$openTo,
      _ref$views = _ref.views,
      views = _ref$views === void 0 ? ['hours', 'minutes'] : _ref$views;
  var utils = useUtils();
  return _objectSpread$6({}, timePickerDefaultProps, {
    views: views,
    openTo: openTo,
    refuse: ampm ? /[^\dap]+/gi : /[^\d]+/gi,
    format: pick12hOr24hFormat(format, ampm, {
      '12h': utils.formats.fullTime12h,
      '24h': utils.formats.fullTime24h
    })
  });
}

var TimePicker = makePickerWithStateAndWrapper(ResponsiveWrapper, {
  useDefaultProps: useDefaultProps,
  DefaultToolbarComponent: TimePickerToolbar
});
var DesktopTimePicker = makePickerWithStateAndWrapper(DesktopWrapper, {
  useDefaultProps: useDefaultProps,
  DefaultToolbarComponent: TimePickerToolbar
});
var MobileTimePicker = makePickerWithStateAndWrapper(MobileWrapper, {
  useDefaultProps: useDefaultProps,
  DefaultToolbarComponent: TimePickerToolbar
});
var StaticTimePicker = makePickerWithStateAndWrapper(StaticWrapper, {
  useDefaultProps: useDefaultProps,
  DefaultToolbarComponent: TimePickerToolbar
});

var TimeIcon = createSvgIcon(React__default.createElement(React__default.Fragment, null, React__default.createElement("path", {
  d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), React__default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
}), React__default.createElement("path", {
  d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
})), 'TimeIcon');

var DateRangeIcon = createSvgIcon(React__default.createElement(React__default.Fragment, null, React__default.createElement("path", {
  d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
}), React__default.createElement("path", {
  fill: "none",
  d: "M0 0h24v24H0z"
})), 'DateRangeIcon');

var viewToTabIndex = function viewToTabIndex(openView) {
  if (openView === 'date' || openView === 'year') {
    return 'date';
  }

  return 'time';
};

var tabIndexToView = function tabIndexToView(tab) {
  if (tab === 'date') {
    return 'date';
  }

  return 'hours';
};

var useStyles$l = makeStyles(function (theme) {
  // prettier-ignore
  var tabsBackground = theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.background["default"];
  return {
    tabs: {
      color: theme.palette.getContrastText(tabsBackground),
      backgroundColor: tabsBackground
    }
  };
}, {
  name: 'MuiPickerDTTabs'
});
var DateTimePickerTabs = function DateTimePickerTabs(_ref) {
  var view = _ref.view,
      onChange = _ref.onChange,
      dateRangeIcon = _ref.dateRangeIcon,
      timeIcon = _ref.timeIcon;
  var classes = useStyles$l();
  var theme = useTheme();
  var indicatorColor = theme.palette.type === 'light' ? 'secondary' : 'primary';

  var handleChange = function handleChange(e, value) {
    if (value !== viewToTabIndex(view)) {
      onChange(tabIndexToView(value));
    }
  };

  return createElement(Paper, null, createElement(Tabs, {
    variant: "fullWidth",
    value: viewToTabIndex(view),
    onChange: handleChange,
    className: classes.tabs,
    indicatorColor: indicatorColor
  }, createElement(Tab, {
    value: "date",
    icon: createElement(Fragment, null, dateRangeIcon)
  }), createElement(Tab, {
    value: "time",
    icon: createElement(Fragment, null, timeIcon)
  })));
};
DateTimePickerTabs.defaultProps = {
  dateRangeIcon: createElement(DateRangeIcon, null),
  timeIcon: createElement(TimeIcon, null)
};

var useStyles$m = makeStyles(function (_) {
  return {
    toolbar: {
      paddingLeft: 16,
      paddingRight: 16,
      justifyContent: 'space-around'
    },
    separator: {
      margin: '0 4px 0 2px',
      cursor: 'default'
    },
    timeContainer: {
      display: 'flex'
    },
    dateContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    timeTypography: {},
    penIcon: {
      position: 'absolute',
      top: 8,
      right: 8
    }
  };
}, {
  name: 'MuiPickerDTToolbar'
});
var DateTimePickerToolbar = function DateTimePickerToolbar(_ref) {
  var date = _ref.date,
      openView = _ref.openView,
      setOpenView = _ref.setOpenView,
      ampm = _ref.ampm,
      hideTabs = _ref.hideTabs,
      dateRangeIcon = _ref.dateRangeIcon,
      timeIcon = _ref.timeIcon,
      isMobileKeyboardViewOpen = _ref.isMobileKeyboardViewOpen,
      toggleMobileKeyboardView = _ref.toggleMobileKeyboardView,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'SELECT DATE & TIME' : _ref$title;
  var utils = useUtils();
  var classes = useStyles$m();
  var showTabs = !hideTabs && typeof window !== 'undefined' && window.innerHeight > 667;
  return createElement(Fragment, null, createElement(PickerToolbar, {
    title: title,
    isLandscape: false,
    penIconClassName: classes.penIcon,
    className: classes.toolbar,
    isMobileKeyboardViewOpen: isMobileKeyboardViewOpen,
    toggleMobileKeyboardView: toggleMobileKeyboardView
  }, createElement("div", {
    className: classes.dateContainer
  }, createElement(ToolbarButton, {
    variant: "subtitle1",
    onClick: function onClick() {
      return setOpenView('year');
    },
    selected: openView === 'year',
    label: utils.format(date, 'year')
  }), createElement(ToolbarButton, {
    variant: "h4",
    onClick: function onClick() {
      return setOpenView('date');
    },
    selected: openView === 'date',
    label: utils.format(date, 'shortDate')
  })), createElement("div", {
    className: classes.timeContainer
  }, createElement(ToolbarButton, {
    variant: "h3",
    onClick: function onClick() {
      return setOpenView('hours');
    },
    selected: openView === 'hours',
    label: ampm ? utils.format(date, 'hours12h') : utils.format(date, 'hours24h'),
    typographyClassName: classes.timeTypography
  }), createElement(ToolbarText, {
    variant: "h3",
    label: ":",
    className: classes.separator
  }), createElement(ToolbarButton, {
    variant: "h3",
    onClick: function onClick() {
      return setOpenView('minutes');
    },
    selected: openView === 'minutes',
    label: utils.format(date, 'minutes'),
    typographyClassName: classes.timeTypography
  }))), showTabs && createElement(DateTimePickerTabs, {
    dateRangeIcon: dateRangeIcon,
    timeIcon: timeIcon,
    view: openView,
    onChange: setOpenView
  }));
};

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function useDefaultProps$1(_ref) {
  var _ref$ampm = _ref.ampm,
      ampm = _ref$ampm === void 0 ? false : _ref$ampm,
      format = _ref.format,
      _ref$orientation = _ref.orientation,
      orientation = _ref$orientation === void 0 ? 'portrait' : _ref$orientation,
      _ref$openTo = _ref.openTo,
      openTo = _ref$openTo === void 0 ? 'date' : _ref$openTo,
      _ref$views = _ref.views,
      views = _ref$views === void 0 ? ['year', 'date', 'hours', 'minutes'] : _ref$views;
  var utils = useUtils();

  if (orientation !== 'portrait') {
    throw new Error('We are not supporting custom orientation for DateTimePicker yet :(');
  }

  return _objectSpread$7({}, dateTimePickerDefaultProps, {
    openTo: openTo,
    views: views,
    wider: true,
    ampmInClock: true,
    orientation: orientation,
    showToolbar: true,
    refuse: ampm ? /[^\dap]+/gi : /[^\d]+/gi,
    format: pick12hOr24hFormat(format, ampm, {
      '12h': utils.formats.keyboardDateTime12h,
      '24h': utils.formats.keyboardDateTime24h
    })
  });
}

var DateTimePicker = makePickerWithStateAndWrapper(ResponsiveWrapper, {
  useDefaultProps: useDefaultProps$1,
  DefaultToolbarComponent: DateTimePickerToolbar
});
var DesktopDateTimePicker = makePickerWithStateAndWrapper(DesktopWrapper, {
  useDefaultProps: useDefaultProps$1,
  DefaultToolbarComponent: DateTimePickerToolbar
});
var MobileDateTimePicker = makePickerWithStateAndWrapper(MobileWrapper, {
  useDefaultProps: useDefaultProps$1,
  DefaultToolbarComponent: DateTimePickerToolbar
});
var StaticDateTimePicker = makePickerWithStateAndWrapper(StaticWrapper, {
  useDefaultProps: useDefaultProps$1,
  DefaultToolbarComponent: DateTimePickerToolbar
});

export { Calendar, CalendarView, Clock, ClockView, DatePicker, DateTimePicker, Day, DesktopDatePicker, DesktopDateTimePicker, DesktopTimePicker, MobileDatePicker, MobileDateTimePicker, MobileTimePicker, MuiPickersContext, MuiPickersUtilsProvider, Picker, StaticDatePicker, StaticDateTimePicker, StaticTimePicker, TimePicker, ClockView$1 as TimePickerView, makePickerWithStateAndWrapper as makePickerWithState, usePickerState, useStyles$d as useStyles, useUtils, validate };
//# sourceMappingURL=material-ui-pickers.esm.js.map
