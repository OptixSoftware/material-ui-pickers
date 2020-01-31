import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import 'react';
import 'prop-types';
import { u as useUtils } from './utils-8f701c09.js';
import 'clsx';
import '@babel/runtime/helpers/esm/extends';
import '@babel/runtime/helpers/esm/objectWithoutProperties';
import '@material-ui/core/Toolbar';
import '@material-ui/core/internal/svg-icons/createSvgIcon';
import { T as TimePickerToolbar } from './Clock-0015b84c.js';
import './WrapperVariantContext-974ae6a0.js';
import '@material-ui/core/styles';
import '@material-ui/core';
import './Calendar-8bd48e99.js';
import { m as makePickerWithStateAndWrapper, R as ResponsiveWrapper, D as DesktopWrapper, M as MobileWrapper, S as StaticWrapper, t as timePickerDefaultProps } from './makePickerWithState-58665a0a.js';
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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function useDefaultProps(_ref) {
  var _ref$ampm = _ref.ampm,
      ampm = _ref$ampm === void 0 ? false : _ref$ampm,
      format = _ref.format,
      _ref$openTo = _ref.openTo,
      openTo = _ref$openTo === void 0 ? 'hours' : _ref$openTo,
      _ref$views = _ref.views,
      views = _ref$views === void 0 ? ['hours', 'minutes'] : _ref$views;
  var utils = useUtils();
  return _objectSpread({}, timePickerDefaultProps, {
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

export { DesktopTimePicker, MobileTimePicker, StaticTimePicker, TimePicker };
//# sourceMappingURL=TimePicker.js.map
