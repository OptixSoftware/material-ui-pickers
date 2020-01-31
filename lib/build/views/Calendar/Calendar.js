"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
var Day_1 = __importDefault(require("./Day"));
var DayWrapper_1 = __importDefault(require("./DayWrapper"));
var SlideTransition_1 = __importDefault(require("./SlideTransition"));
var useUtils_1 = require("../../_shared/hooks/useUtils");
var useKeyDown_1 = require("../../_shared/hooks/useKeyDown");
var date_utils_1 = require("../../_helpers/date-utils");
var core_1 = require("@material-ui/core");
exports.useStyles = core_1.makeStyles(function (theme) { return ({
    transitionContainer: {
        minHeight: 36 * 6 + 20,
    },
    progressContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    week: {
        display: 'flex',
        justifyContent: 'center',
    },
    iconButton: {
        zIndex: 1,
        backgroundColor: theme.palette.background.paper,
    },
    previousMonthButton: {
        marginRight: 12,
    },
    daysHeader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dayLabel: {
        width: 36,
        height: 40,
        margin: '0 2px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.palette.text.hint,
    },
}); });
exports.Calendar = function (_a) {
    var date = _a.date, onChange = _a.onChange, minDate = _a.minDate, maxDate = _a.maxDate, slideDirection = _a.slideDirection, disableFuture = _a.disableFuture, disablePast = _a.disablePast, currentMonth = _a.currentMonth, renderDay = _a.renderDay, reduceAnimations = _a.reduceAnimations, allowKeyboardControl = _a.allowKeyboardControl, wrapperVariant = _a.wrapperVariant, props = __rest(_a, ["date", "onChange", "minDate", "maxDate", "slideDirection", "disableFuture", "disablePast", "currentMonth", "renderDay", "reduceAnimations", "allowKeyboardControl", "wrapperVariant"]);
    var utils = useUtils_1.useUtils();
    var theme = core_1.useTheme();
    var classes = exports.useStyles();
    var now = utils.date();
    var validateMinMaxDate = React.useCallback(function (day) {
        return Boolean((disableFuture && utils.isAfterDay(day, now)) ||
            (disablePast && utils.isBeforeDay(day, now)) ||
            (minDate && utils.isBeforeDay(day, utils.date(minDate))) ||
            (maxDate && utils.isAfterDay(day, utils.date(maxDate))));
    }, [disableFuture, disablePast, maxDate, minDate, now, utils]);
    var shouldDisableDate = React.useCallback(function (day) {
        return (validateMinMaxDate(day) || Boolean(props.shouldDisableDate && props.shouldDisableDate(day)));
    }, [props, validateMinMaxDate]);
    var handleDaySelect = React.useCallback(function (day, isFinish) {
        if (isFinish === void 0) { isFinish = true; }
        onChange(utils.mergeDateAndTime(day, date), isFinish);
    }, [date, onChange, utils]);
    var moveToDay = React.useCallback(function (day) {
        if (day && !shouldDisableDate(day)) {
            handleDaySelect(day, false);
        }
    }, [handleDaySelect, shouldDisableDate]);
    React.useEffect(function () {
        if (shouldDisableDate(date)) {
            var closestEnabledDate = date_utils_1.findClosestEnabledDate({
                date: date,
                utils: utils,
                minDate: utils.date(minDate),
                maxDate: utils.date(maxDate),
                disablePast: Boolean(disablePast),
                disableFuture: Boolean(disableFuture),
                shouldDisableDate: shouldDisableDate,
            });
            handleDaySelect(closestEnabledDate, false);
        }
    }, []); // eslint-disable-line
    useKeyDown_1.useGlobalKeyDown(Boolean(allowKeyboardControl && wrapperVariant !== 'static'), {
        38: function () { return moveToDay(utils.addDays(date, -7)); },
        40: function () { return moveToDay(utils.addDays(date, 7)); },
        37: function () { return moveToDay(utils.addDays(date, theme.direction === 'ltr' ? -1 : 1)); },
        39: function () { return moveToDay(utils.addDays(date, theme.direction === 'ltr' ? 1 : -1)); },
    });
    var selectedDate = utils.startOfDay(date);
    var currentMonthNumber = utils.getMonth(currentMonth);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classes.daysHeader }, utils.getWeekdays().map(function (day, i) { return (React.createElement(core_1.Typography, { key: day + i.toString(), variant: "caption", className: classes.dayLabel, children: day.charAt(0).toUpperCase() })); })),
        React.createElement(SlideTransition_1.default, { reduceAnimations: reduceAnimations, slideDirection: slideDirection, transKey: currentMonth.toString(), className: classes.transitionContainer },
            React.createElement("div", { style: { overflow: 'hidden' } }, utils.getWeekArray(currentMonth).map(function (week) { return (React.createElement("div", { key: "week-" + week[0].toString(), className: classes.week }, week.map(function (day) {
                var disabled = shouldDisableDate(day);
                var isDayInCurrentMonth = utils.getMonth(day) === currentMonthNumber;
                var dayComponent = (React.createElement(Day_1.default, { disabled: disabled, current: utils.isSameDay(day, now), hidden: !isDayInCurrentMonth, selected: utils.isSameDay(selectedDate, day), children: utils.format(day, 'dayOfMonth') }));
                if (renderDay) {
                    dayComponent = renderDay(day, selectedDate, isDayInCurrentMonth, dayComponent);
                }
                return (React.createElement(DayWrapper_1.default, { key: day.toString(), value: day, disabled: disabled, dayInCurrentMonth: isDayInCurrentMonth, onSelect: handleDaySelect, children: dayComponent }));
            }))); })))));
};
exports.default = exports.Calendar;
