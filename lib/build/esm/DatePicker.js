import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import { useMemo, createElement } from 'react';
import 'prop-types';
import { u as useUtils } from './utils-8f701c09.js';
import clsx from 'clsx';
import '@babel/runtime/helpers/esm/extends';
import '@babel/runtime/helpers/esm/objectWithoutProperties';
import '@material-ui/core/Toolbar';
import '@material-ui/core/internal/svg-icons/createSvgIcon';
import { P as PickerToolbar } from './Clock-0015b84c.js';
import './WrapperVariantContext-974ae6a0.js';
import '@material-ui/core/styles';
import { makeStyles, Typography } from '@material-ui/core';
import { i as isYearOnlyView, b as isYearAndMonthViews, g as getFormatByViews } from './Calendar-8bd48e99.js';
import { m as makePickerWithStateAndWrapper, R as ResponsiveWrapper, M as MobileWrapper, D as DesktopWrapper, S as StaticWrapper, d as datePickerDefaultProps } from './makePickerWithState-58665a0a.js';
import '@material-ui/core/Button';
import '@material-ui/core/DialogActions';
import '@material-ui/core/DialogContent';
import '@material-ui/core/Dialog';
import '@material-ui/core/TextField';
import './Picker-cb6f1659.js';
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

var useStyles = makeStyles({
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
  var classes = useStyles();
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
var datePickerConfig = {
  DefaultToolbarComponent: DatePickerToolbar,
  useDefaultProps: function useDefaultProps(_ref) {
    var _ref$openTo = _ref.openTo,
        openTo = _ref$openTo === void 0 ? 'date' : _ref$openTo,
        _ref$views = _ref.views,
        views = _ref$views === void 0 ? ['year', 'date'] : _ref$views;
    var utils = useUtils();
    return _objectSpread({}, datePickerDefaultProps, {
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

export { DatePicker, DesktopDatePicker, MobileDatePicker, StaticDatePicker };
//# sourceMappingURL=DatePicker.js.map
