import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import React__default, { createElement, Fragment } from 'react';
import 'prop-types';
import { u as useUtils } from './utils-8f701c09.js';
import 'clsx';
import '@babel/runtime/helpers/esm/extends';
import '@babel/runtime/helpers/esm/objectWithoutProperties';
import '@material-ui/core/Toolbar';
import createSvgIcon from '@material-ui/core/internal/svg-icons/createSvgIcon';
import { P as PickerToolbar, b as ToolbarButton, d as ToolbarText } from './Clock-0015b84c.js';
import './WrapperVariantContext-974ae6a0.js';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import '@material-ui/core';
import './Calendar-8bd48e99.js';
import { m as makePickerWithStateAndWrapper, R as ResponsiveWrapper, D as DesktopWrapper, M as MobileWrapper, S as StaticWrapper, a as dateTimePickerDefaultProps } from './makePickerWithState-58665a0a.js';
import '@material-ui/core/Button';
import '@material-ui/core/DialogActions';
import '@material-ui/core/DialogContent';
import '@material-ui/core/Dialog';
import '@material-ui/core/TextField';
import { p as pick12hOr24hFormat } from './Picker-cb6f1659.js';
import './useKeyDown-2d987085.js';
import '@babel/runtime/helpers/esm/slicedToArray';
import '@material-ui/core/IconButton';
import '@material-ui/core/InputAdornment';
import 'rifm';
import '@material-ui/core/Popover';
import '@material-ui/core/Typography';
import 'react-transition-group';
import './Day.js';
import '@babel/runtime/helpers/esm/classCallCheck';
import '@babel/runtime/helpers/esm/createClass';
import '@babel/runtime/helpers/esm/possibleConstructorReturn';
import '@babel/runtime/helpers/esm/getPrototypeOf';
import '@babel/runtime/helpers/esm/inherits';
import '@material-ui/core/styles/colorManipulator';
import './ClockView.js';
import '@material-ui/styles/makeStyles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Paper from '@material-ui/core/Paper';

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

var useStyles = makeStyles(function (theme) {
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
  var classes = useStyles();
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

var useStyles$1 = makeStyles(function (_) {
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
  var classes = useStyles$1();
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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function useDefaultProps(_ref) {
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

  return _objectSpread({}, dateTimePickerDefaultProps, {
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
  useDefaultProps: useDefaultProps,
  DefaultToolbarComponent: DateTimePickerToolbar
});
var DesktopDateTimePicker = makePickerWithStateAndWrapper(DesktopWrapper, {
  useDefaultProps: useDefaultProps,
  DefaultToolbarComponent: DateTimePickerToolbar
});
var MobileDateTimePicker = makePickerWithStateAndWrapper(MobileWrapper, {
  useDefaultProps: useDefaultProps,
  DefaultToolbarComponent: DateTimePickerToolbar
});
var StaticDateTimePicker = makePickerWithStateAndWrapper(StaticWrapper, {
  useDefaultProps: useDefaultProps,
  DefaultToolbarComponent: DateTimePickerToolbar
});

export { DateTimePicker, DesktopDateTimePicker, MobileDateTimePicker, StaticDateTimePicker };
//# sourceMappingURL=DateTimePicker.js.map
