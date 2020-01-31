import { createElement } from 'react';
import { bool } from 'prop-types';
import clsx from 'clsx';
import _extends from '@babel/runtime/helpers/esm/extends';
import _objectWithoutProperties from '@babel/runtime/helpers/esm/objectWithoutProperties';
import { makeStyles, fade } from '@material-ui/core/styles';
import { ButtonBase } from '@material-ui/core';

var useStyles = makeStyles(function (theme) {
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

  var classes = useStyles();
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

export default Day;
export { Day, useStyles };
//# sourceMappingURL=Day.js.map
