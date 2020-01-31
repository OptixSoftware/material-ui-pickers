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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var YearSelection_1 = require("./YearSelection");
var CalendarHeader_1 = require("./CalendarHeader");
var MonthSelection_1 = require("./MonthSelection");
var Calendar_1 = require("./Calendar");
var useUtils_1 = require("../../_shared/hooks/useUtils");
var dimensions_1 = require("../../constants/dimensions");
var FadeTransitionGroup_1 = require("./FadeTransitionGroup");
var useParsedDate_1 = require("../../_shared/hooks/useParsedDate");
var core_1 = require("@material-ui/core");
var WrapperVariantContext_1 = require("../../wrappers/WrapperVariantContext");
function calendarStateReducer(state, action) {
    switch (action.type) {
        case 'changeMonthLoading': {
            return __assign(__assign({}, state), { loadingQueue: state.loadingQueue + 1, slideDirection: action.direction, currentMonth: action.newMonth });
        }
        case 'changeMonth': {
            return __assign(__assign({}, state), { slideDirection: action.direction, currentMonth: action.newMonth });
        }
        case 'popLoadingQueue': {
            return __assign(__assign({}, state), { loadingQueue: state.loadingQueue <= 0 ? 0 : state.loadingQueue - 1 });
        }
    }
}
exports.useStyles = core_1.makeStyles({
    viewTransitionContainer: {
        overflowY: 'auto',
    },
    gridFullHeight: {
        flex: 1,
        minHeight: dimensions_1.VIEW_HEIGHT - 60,
        height: '100%',
    },
}, { name: 'MuiPickersCalendarView' });
exports.CalendarView = function (_a) {
    var date = _a.date, view = _a.view, onChange = _a.onChange, changeView = _a.changeView, onMonthChange = _a.onMonthChange, unparsedMinDate = _a.minDate, unparsedMaxDate = _a.maxDate, _b = _a.reduceAnimations, reduceAnimations = _b === void 0 ? typeof window !== 'undefined' && /(android)/i.test(window.navigator.userAgent) : _b, _c = _a.loadingIndicator, loadingIndicator = _c === void 0 ? React.createElement(core_1.CircularProgress, { "data-mui-test": "loading-progress" }) : _c, other = __rest(_a, ["date", "view", "onChange", "changeView", "onMonthChange", "minDate", "maxDate", "reduceAnimations", "loadingIndicator"]);
    var utils = useUtils_1.useUtils();
    var classes = exports.useStyles();
    var minDate = useParsedDate_1.useParsedDate(unparsedMinDate);
    var maxDate = useParsedDate_1.useParsedDate(unparsedMaxDate);
    var wrapperVariant = React.useContext(WrapperVariantContext_1.WrapperVariantContext);
    var _d = React.useReducer(calendarStateReducer, {
        loadingQueue: 0,
        currentMonth: utils.startOfMonth(date),
        slideDirection: 'left',
    }), _e = _d[0], currentMonth = _e.currentMonth, loadingQueue = _e.loadingQueue, slideDirection = _e.slideDirection, dispatch = _d[1];
    var handleChangeMonth = function (payload) {
        var returnedPromise = onMonthChange && onMonthChange(payload.newMonth);
        if (returnedPromise) {
            dispatch(__assign({ type: 'changeMonthLoading' }, payload));
            returnedPromise.then(function () { return dispatch({ type: 'popLoadingQueue' }); });
        }
        else {
            dispatch(__assign({ type: 'changeMonth' }, payload));
        }
    };
    React.useEffect(function () {
        if (utils.isSameMonth(date, currentMonth)) {
            return;
        }
        handleChangeMonth({
            newMonth: utils.startOfMonth(date),
            direction: utils.isAfterDay(date, currentMonth) ? 'left' : 'right',
        });
    }, [date]); // eslint-disable-line
    return (React.createElement(React.Fragment, null,
        React.createElement(CalendarHeader_1.CalendarHeader, __assign({}, other, { view: view, month: currentMonth, changeView: changeView, onMonthChange: function (newMonth, direction) { return handleChangeMonth({ newMonth: newMonth, direction: direction }); }, minDate: minDate, maxDate: maxDate, reduceAnimations: reduceAnimations })),
        React.createElement(FadeTransitionGroup_1.FadeTransitionGroup, { reduceAnimations: reduceAnimations, className: classes.viewTransitionContainer, transKey: view },
            React.createElement("div", null,
                view === 'year' && (React.createElement(YearSelection_1.YearSelection, __assign({}, other, { date: date, onChange: onChange, minDate: minDate, maxDate: maxDate }))),
                view === 'month' && (React.createElement(MonthSelection_1.MonthSelection, __assign({}, other, { date: date, onChange: onChange, minDate: minDate, maxDate: maxDate, onMonthChange: onMonthChange }))),
                view === 'date' &&
                    (loadingQueue > 0 ? (React.createElement(core_1.Grid, { className: classes.gridFullHeight, container: true, alignItems: "center", justify: "center" }, loadingIndicator)) : (React.createElement(Calendar_1.Calendar, __assign({}, other, { reduceAnimations: reduceAnimations, currentMonth: currentMonth, slideDirection: slideDirection, date: date, onChange: onChange, minDate: minDate, maxDate: maxDate, wrapperVariant: wrapperVariant }))))))));
};
