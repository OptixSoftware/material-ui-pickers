import { useCallback, createElement, cloneElement, useEffect, Fragment } from 'react';
import { a as arrayIncludes, u as useUtils } from './utils-8f701c09.js';
import clsx from 'clsx';
import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import { makeStyles } from '@material-ui/core/styles';
import { makeStyles as makeStyles$1, useTheme, Typography } from '@material-ui/core';
import { u as useGlobalKeyDown } from './useKeyDown-2d987085.js';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Day from './Day.js';

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

var animationDuration = 350;
var useStyles = makeStyles(function (theme) {
  var slideTransition = theme.transitions.create('transform', {
    duration: animationDuration,
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
  var classes = useStyles();

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
    timeout: animationDuration,
    classNames: transitionClasses,
    children: children
  }));
};

var useStyles$1 = makeStyles$1(function (theme) {
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
  var theme = useTheme();
  var classes = useStyles$1();
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

export { Calendar as C, Calendar as a, isYearAndMonthViews as b, getFormatByViews as g, isYearOnlyView as i, useStyles$1 as u };
//# sourceMappingURL=Calendar-8bd48e99.js.map
