"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var PropTypes = __importStar(require("prop-types"));
var clsx_1 = __importDefault(require("clsx"));
var Typography_1 = __importDefault(require("@material-ui/core/Typography"));
var core_1 = require("@material-ui/core");
var useUtils_1 = require("../../_shared/hooks/useUtils");
var FadeTransitionGroup_1 = require("./FadeTransitionGroup");
var styles_1 = require("@material-ui/core/styles");
var ArrowLeftIcon_1 = require("../../_shared/icons/ArrowLeftIcon");
var ArrowRightIcon_1 = require("../../_shared/icons/ArrowRightIcon");
var ArrowDropDownIcon_1 = require("../../_shared/icons/ArrowDropDownIcon");
exports.useStyles = styles_1.makeStyles(function (theme) { return ({
    switchHeader: {
        display: 'flex',
        alignItems: 'center',
        marginTop: 16,
        marginBottom: 8,
        paddingLeft: 24,
        paddingRight: 12,
        // prevent jumping in safari
        maxHeight: 30,
        minHeight: 30,
    },
    yearSelectionSwitcher: {
        marginRight: 'auto',
    },
    iconButton: {
        zIndex: 1,
        backgroundColor: theme.palette.background.paper,
    },
    previousMonthButton: {
        marginRight: 24,
    },
    switchViewDropdown: {
        willChange: 'transform',
        transition: theme.transitions.create('transform'),
        transform: 'rotate(0deg)',
    },
    switchViewDropdownDown: {
        transform: 'rotate(180deg)',
    },
    monthTitleContainer: {
        flex: 1,
        display: 'flex',
        maxHeight: 30,
        overflow: 'hidden',
    },
    monthText: {
        marginRight: 4,
    },
}); }, { name: 'MuiPickersCalendarHeader' });
exports.CalendarHeader = function (_a) {
    var _b;
    var view = _a.view, views = _a.views, month = _a.month, leftArrowIcon = _a.leftArrowIcon, rightArrowIcon = _a.rightArrowIcon, leftArrowButtonProps = _a.leftArrowButtonProps, rightArrowButtonProps = _a.rightArrowButtonProps, showLeftArrowButton = _a.showLeftArrowButton, showRightArrowButton = _a.showRightArrowButton, changeView = _a.changeView, onMonthChange = _a.onMonthChange, minDate = _a.minDate, maxDate = _a.maxDate, reduceAnimations = _a.reduceAnimations, disableFuture = _a.disableFuture, disablePast = _a.disablePast;
    var _c, _d;
    var utils = useUtils_1.useUtils();
    var theme = styles_1.useTheme();
    var classes = exports.useStyles({ view: view });
    var isRtl = theme.direction === 'rtl';
    var selectNextMonth = function () { return onMonthChange(utils.getNextMonth(month), 'left'); };
    var selectPreviousMonth = function () { return onMonthChange(utils.getPreviousMonth(month), 'right'); };
    var isPreviousMonthDisabled = React.useMemo(function () {
        var now = utils.date();
        var firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, utils.date(minDate)) ? now : utils.date(minDate));
        return !utils.isBefore(firstEnabledMonth, month);
    }, [disablePast, minDate, month, utils]);
    var isNextMonthDisabled = React.useMemo(function () {
        var now = utils.date();
        var lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, utils.date(maxDate)) ? now : utils.date(maxDate));
        return !utils.isAfter(lastEnabledMonth, month);
    }, [disableFuture, maxDate, month, utils]);
    var toggleView = function () {
        if (views.length === 1) {
            return;
        }
        if (views.length === 2) {
            changeView(views.find(function (v) { return v !== view; }) || views[0]);
        }
        else {
            // switching only between first 2
            var nextIndexToOpen = views.indexOf(view) !== 0 ? 0 : 1;
            changeView(views[nextIndexToOpen]);
        }
    };
    if (views.length === 1) {
        return null;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classes.switchHeader },
            React.createElement("div", { className: classes.monthTitleContainer },
                React.createElement(FadeTransitionGroup_1.FadeTransitionGroup, { reduceAnimations: reduceAnimations, transKey: utils.format(month, 'month') },
                    React.createElement(Typography_1.default, { "data-mui-test": "calendar-month-text", align: "center", variant: "subtitle1", className: classes.monthText, children: utils.format(month, 'month') })),
                React.createElement(FadeTransitionGroup_1.FadeTransitionGroup, { reduceAnimations: reduceAnimations, transKey: utils.format(month, 'year') },
                    React.createElement(Typography_1.default, { "data-mui-test": "calendar-year-text", align: "center", variant: "subtitle1", children: utils.format(month, 'year') })),
                React.createElement(core_1.IconButton, { "data-mui-test": "calendar-view-switcher", size: "small", onClick: toggleView, className: classes.yearSelectionSwitcher },
                    React.createElement(ArrowDropDownIcon_1.ArrowDropDownIcon, { className: clsx_1.default(classes.switchViewDropdown, (_b = {},
                            _b[classes.switchViewDropdownDown] = view === 'year',
                            _b)) }))),
            React.createElement(core_1.Fade, { in: view === 'date' },
                React.createElement("div", null,
                    showLeftArrowButton && (React.createElement(core_1.IconButton, __assign({ "data-mui-test": "previous-month", size: "small" }, leftArrowButtonProps, { disabled: isPreviousMonthDisabled, onClick: selectPreviousMonth, className: clsx_1.default(classes.iconButton, classes.previousMonthButton, (_c = leftArrowButtonProps) === null || _c === void 0 ? void 0 : _c.className) }), isRtl ? rightArrowIcon : leftArrowIcon)),
                    showRightArrowButton && (React.createElement(core_1.IconButton, __assign({ size: "small" }, rightArrowButtonProps, { disabled: isNextMonthDisabled, onClick: selectNextMonth, className: clsx_1.default(classes.iconButton, (_d = rightArrowButtonProps) === null || _d === void 0 ? void 0 : _d.className) }), isRtl ? leftArrowIcon : rightArrowIcon)))))));
};
exports.CalendarHeader.displayName = 'CalendarHeader';
exports.CalendarHeader.propTypes = {
    leftArrowIcon: PropTypes.node,
    rightArrowIcon: PropTypes.node,
};
exports.CalendarHeader.defaultProps = {
    leftArrowIcon: React.createElement(ArrowLeftIcon_1.ArrowLeftIcon, null),
    rightArrowIcon: React.createElement(ArrowRightIcon_1.ArrowRightIcon, null),
};
exports.default = exports.CalendarHeader;
