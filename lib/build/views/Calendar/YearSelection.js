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
var Year_1 = __importDefault(require("./Year"));
var styles_1 = require("@material-ui/core/styles");
var useUtils_1 = require("../../_shared/hooks/useUtils");
var WrapperVariantContext_1 = require("../../wrappers/WrapperVariantContext");
exports.useStyles = styles_1.makeStyles({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        overflowY: 'auto',
        height: '100%',
    },
}, { name: 'MuiPickersYearSelection' });
exports.YearSelection = function (_a) {
    var date = _a.date, onChange = _a.onChange, onYearChange = _a.onYearChange, minDate = _a.minDate, maxDate = _a.maxDate, disablePast = _a.disablePast, disableFuture = _a.disableFuture;
    var utils = useUtils_1.useUtils();
    var classes = exports.useStyles();
    var wrapperVariant = React.useContext(WrapperVariantContext_1.WrapperVariantContext);
    var selectedYearRef = React.useRef(null);
    React.useEffect(function () {
        if (selectedYearRef.current && selectedYearRef.current.scrollIntoView) {
            try {
                selectedYearRef.current.scrollIntoView({
                    block: wrapperVariant === 'static' ? 'nearest' : 'center',
                });
            }
            catch (e) {
                // call without arguments in case when scrollIntoView works improperly (e.g. Firefox 52-57)
                selectedYearRef.current.scrollIntoView();
            }
        }
    }, []); // eslint-disable-line
    var currentYear = utils.getYear(date);
    var onYearSelect = React.useCallback(function (year) {
        var newDate = utils.setYear(date, year);
        if (onYearChange) {
            onYearChange(newDate);
        }
        onChange(newDate, true);
    }, [date, onChange, onYearChange, utils]);
    return (React.createElement("div", null,
        React.createElement("div", { className: classes.container }, utils.getYearRange(minDate, maxDate).map(function (year) {
            var yearNumber = utils.getYear(year);
            var selected = yearNumber === currentYear;
            return (React.createElement(Year_1.default, { key: utils.format(year, 'year'), selected: selected, value: yearNumber, onSelect: onYearSelect, ref: selected ? selectedYearRef : undefined, disabled: Boolean((disablePast && utils.isBeforeYear(year, utils.date())) ||
                    (disableFuture && utils.isAfterYear(year, utils.date()))) }, utils.format(year, 'year')));
        }))));
};
