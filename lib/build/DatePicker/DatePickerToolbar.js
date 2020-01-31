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
var PickerToolbar_1 = __importDefault(require("../_shared/PickerToolbar"));
var useUtils_1 = require("../_shared/hooks/useUtils");
var core_1 = require("@material-ui/core");
var date_utils_1 = require("../_helpers/date-utils");
exports.useStyles = core_1.makeStyles({
    dateTitleLandscape: {
        margin: 'auto 16px auto auto',
    },
    penIcon: {
        position: 'relative',
        top: 4,
    },
}, { name: 'MuiPickersDatePickerRoot' });
exports.DatePickerToolbar = function (_a) {
    var _b;
    var date = _a.date, views = _a.views, isLandscape = _a.isLandscape, isMobileKeyboardViewOpen = _a.isMobileKeyboardViewOpen, toggleMobileKeyboardView = _a.toggleMobileKeyboardView, _c = _a.title, title = _c === void 0 ? 'SELECT DATE' : _c;
    var utils = useUtils_1.useUtils();
    var classes = exports.useStyles();
    var dateText = React.useMemo(function () {
        if (date_utils_1.isYearOnlyView(views)) {
            return utils.format(date, 'year');
        }
        if (date_utils_1.isYearAndMonthViews(views)) {
            return utils.format(date, 'month');
        }
        return utils.format(date, 'normalDate');
    }, [date, utils, views]);
    return (React.createElement(PickerToolbar_1.default, { title: title, isMobileKeyboardViewOpen: isMobileKeyboardViewOpen, toggleMobileKeyboardView: toggleMobileKeyboardView, isLandscape: isLandscape, penIconClassName: classes.penIcon },
        React.createElement(core_1.Typography, { variant: "h4", children: dateText, align: isLandscape ? 'left' : 'center', className: clsx_1.default((_b = {}, _b[classes.dateTitleLandscape] = isLandscape, _b)) })));
};
