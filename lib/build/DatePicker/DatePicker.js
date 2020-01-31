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
Object.defineProperty(exports, "__esModule", { value: true });
var useUtils_1 = require("../_shared/hooks/useUtils");
var DatePickerToolbar_1 = require("./DatePickerToolbar");
var date_utils_1 = require("../_helpers/date-utils");
var prop_types_1 = require("../constants/prop-types");
var ResponsiveWrapper_1 = require("../wrappers/ResponsiveWrapper");
var Wrapper_1 = require("../wrappers/Wrapper");
var makePickerWithState_1 = require("../Picker/makePickerWithState");
var datePickerConfig = {
    DefaultToolbarComponent: DatePickerToolbar_1.DatePickerToolbar,
    useDefaultProps: function (_a) {
        var _b = _a.openTo, openTo = _b === void 0 ? 'date' : _b, _c = _a.views, views = _c === void 0 ? ['year', 'date'] : _c;
        var utils = useUtils_1.useUtils();
        return __assign(__assign({}, prop_types_1.datePickerDefaultProps), { views: views,
            openTo: openTo, format: date_utils_1.getFormatByViews(views, utils) });
    },
};
exports.DatePicker = makePickerWithState_1.makePickerWithStateAndWrapper(ResponsiveWrapper_1.ResponsiveWrapper, datePickerConfig);
exports.MobileDatePicker = makePickerWithState_1.makePickerWithStateAndWrapper(Wrapper_1.ModalWrapper, datePickerConfig);
exports.DesktopDatePicker = makePickerWithState_1.makePickerWithStateAndWrapper(Wrapper_1.InlineWrapper, datePickerConfig);
exports.StaticDatePicker = makePickerWithState_1.makePickerWithStateAndWrapper(Wrapper_1.StaticWrapper, datePickerConfig);
