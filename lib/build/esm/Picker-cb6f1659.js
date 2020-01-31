import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import React__default, { createElement, useState, useMemo, useEffect, useCallback, forwardRef, useContext, useRef, cloneElement, Fragment, useReducer } from 'react';
import { node } from 'prop-types';
import { u as useUtils, a as arrayIncludes } from './utils-8f701c09.js';
import clsx from 'clsx';
import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import createSvgIcon from '@material-ui/core/internal/svg-icons/createSvgIcon';
import { K as KeyboardIcon, W as WrapperVariantContext, V as VIEW_HEIGHT, D as DIALOG_WIDTH } from './WrapperVariantContext-974ae6a0.js';
import { makeStyles, fade, useTheme } from '@material-ui/core/styles';
import { IconButton as IconButton$1, Fade, makeStyles as makeStyles$1, CircularProgress, Grid } from '@material-ui/core';
import { C as Calendar } from './Calendar-8bd48e99.js';
import TextField from '@material-ui/core/TextField';
import { b as useIsomorphicEffect } from './useKeyDown-2d987085.js';
import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Rifm } from 'rifm';
import Typography from '@material-ui/core/Typography';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { ClockView } from './ClockView.js';
import makeStyles$2 from '@material-ui/styles/makeStyles';

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
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
      InputProps: _objectSpread({}, InputProps, _defineProperty({}, "".concat(position, "Adornment"), hideOpenPickerButton ? undefined : createElement(InputAdornment, _extends({
        position: position
      }, InputAdornmentProps), createElement(IconButton, _extends({
        "data-mui-test": "open-picker-from-keyboard",
        disabled: disabled
      }, KeyboardButtonProps, {
        onClick: onOpen
      }), keyboardIcon))))
    }));
  });
};

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

var useStyles = makeStyles(function (theme) {
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

  var classes = useStyles();
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
  }, createElement(Typography, _extends({
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

var useStyles$1 = makeStyles({
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
  var classes = useStyles$1();
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
var useStyles$2 = makeStyles(function (theme) {
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
  var classes = useStyles$2();

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

var useStyles$3 = makeStyles(function (theme) {
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
  var classes = useStyles$3({
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
  }, createElement(Typography, {
    "data-mui-test": "calendar-month-text",
    align: "center",
    variant: "subtitle1",
    className: classes.monthText,
    children: utils.format(month, 'month')
  })), createElement(FadeTransitionGroup, {
    reduceAnimations: reduceAnimations,
    transKey: utils.format(month, 'year')
  }, createElement(Typography, {
    "data-mui-test": "calendar-year-text",
    align: "center",
    variant: "subtitle1",
    children: utils.format(month, 'year')
  })), createElement(IconButton$1, {
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
  }, createElement("div", null, showLeftArrowButton && createElement(IconButton$1, _extends({
    "data-mui-test": "previous-month",
    size: "small"
  }, leftArrowButtonProps, {
    disabled: isPreviousMonthDisabled,
    onClick: selectPreviousMonth,
    className: clsx(classes.iconButton, classes.previousMonthButton, leftArrowButtonProps === null || leftArrowButtonProps === void 0 ? void 0 : leftArrowButtonProps.className)
  }), isRtl ? rightArrowIcon : leftArrowIcon), showRightArrowButton && createElement(IconButton$1, _extends({
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

var useStyles$4 = makeStyles(function (theme) {
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

  var classes = useStyles$4();
  var handleSelection = useCallback(function () {
    onSelect(value);
  }, [onSelect, value]);
  return createElement(Typography, _extends({
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

var useStyles$5 = makeStyles({
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
  var classes = useStyles$5();
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

function useParsedDate(possiblyUnparsedValue) {
  var utils = useUtils();
  return useMemo(function () {
    return utils.date(possiblyUnparsedValue);
  }, [possiblyUnparsedValue, utils]);
}

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function calendarStateReducer(state, action) {
  switch (action.type) {
    case 'changeMonthLoading':
      {
        return _objectSpread$1({}, state, {
          loadingQueue: state.loadingQueue + 1,
          slideDirection: action.direction,
          currentMonth: action.newMonth
        });
      }

    case 'changeMonth':
      {
        return _objectSpread$1({}, state, {
          slideDirection: action.direction,
          currentMonth: action.newMonth
        });
      }

    case 'popLoadingQueue':
      {
        return _objectSpread$1({}, state, {
          loadingQueue: state.loadingQueue <= 0 ? 0 : state.loadingQueue - 1
        });
      }
  }
}

var useStyles$6 = makeStyles$1({
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
  var classes = useStyles$6();
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
      dispatch(_objectSpread$1({
        type: 'changeMonthLoading'
      }, payload));
      returnedPromise.then(function () {
        return dispatch({
          type: 'popLoadingQueue'
        });
      });
    } else {
      dispatch(_objectSpread$1({
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

var useStyles$7 = makeStyles$2(function () {
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

  var classes = useStyles$7();
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

var useStyles$8 = makeStyles({
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

  var classes = useStyles$8();
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

export { CalendarView as C, KeyboardDateInput as K, Picker as P, useStyles$6 as a, getDisplayDate as g, pick12hOr24hFormat as p, useStyles$8 as u, validate as v };
//# sourceMappingURL=Picker-cb6f1659.js.map
