"use strict";
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
var clsx_1 = __importDefault(require("clsx"));
var styles_1 = require("@material-ui/core/styles");
var react_transition_group_1 = require("react-transition-group");
var animationDuration = 500;
exports.useStyles = styles_1.makeStyles(function (theme) {
    return {
        transitionContainer: {
            display: 'block',
            position: 'relative',
        },
        fadeEnter: {
            willChange: 'transform',
            opacity: 0,
        },
        fadeEnterActive: {
            opacity: 1,
            transition: theme.transitions.create('opacity', {
                duration: animationDuration,
            }),
        },
        fadeExit: {
            opacity: 1,
        },
        fadeExitActive: {
            opacity: 0,
            transition: theme.transitions.create('opacity', {
                duration: animationDuration / 2,
            }),
        },
    };
}, { name: 'MuiPickersFadeTransition' });
exports.FadeTransitionGroup = function (_a) {
    var children = _a.children, transKey = _a.transKey, reduceAnimations = _a.reduceAnimations, _b = _a.className, className = _b === void 0 ? null : _b;
    var classes = exports.useStyles();
    if (reduceAnimations) {
        return children;
    }
    var transitionClasses = {
        exit: classes.fadeExit,
        enterActive: classes.fadeEnterActive,
        enter: classes.fadeEnter,
        exitActive: classes.fadeExitActive,
    };
    return (React.createElement(react_transition_group_1.TransitionGroup, { className: clsx_1.default(classes.transitionContainer, className), childFactory: function (element) {
            return React.cloneElement(element, {
                classNames: transitionClasses,
            });
        } },
        React.createElement(react_transition_group_1.CSSTransition, { mountOnEnter: true, unmountOnExit: true, key: transKey, timeout: { appear: animationDuration, enter: animationDuration / 2, exit: 0 }, classNames: transitionClasses, children: children })));
};
