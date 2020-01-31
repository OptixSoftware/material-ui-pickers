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
var TimePickerToolbar_1 = require("./TimePickerToolbar");
var prop_types_1 = require("../constants/prop-types");
var ResponsiveWrapper_1 = require("../wrappers/ResponsiveWrapper");
var text_field_helper_1 = require("../_helpers/text-field-helper");
var Wrapper_1 = require("../wrappers/Wrapper");
var makePickerWithState_1 = require("../Picker/makePickerWithState");
function useDefaultProps(_a) {
    var _b = _a.ampm, ampm = _b === void 0 ? false : _b, format = _a.format, _c = _a.openTo, openTo = _c === void 0 ? 'hours' : _c, _d = _a.views, views = _d === void 0 ? ['hours', 'minutes'] : _d;
    var utils = useUtils_1.useUtils();
    return __assign(__assign({}, prop_types_1.timePickerDefaultProps), { views: views,
        openTo: openTo, refuse: ampm ? /[^\dap]+/gi : /[^\d]+/gi, format: text_field_helper_1.pick12hOr24hFormat(format, ampm, {
            '12h': utils.formats.fullTime12h,
            '24h': utils.formats.fullTime24h,
        }) });
}
exports.TimePicker = makePickerWithState_1.makePickerWithStateAndWrapper(ResponsiveWrapper_1.ResponsiveWrapper, {
    useDefaultProps: useDefaultProps,
    DefaultToolbarComponent: TimePickerToolbar_1.TimePickerToolbar,
});
exports.DesktopTimePicker = makePickerWithState_1.makePickerWithStateAndWrapper(Wrapper_1.InlineWrapper, {
    useDefaultProps: useDefaultProps,
    DefaultToolbarComponent: TimePickerToolbar_1.TimePickerToolbar,
});
exports.MobileTimePicker = makePickerWithState_1.makePickerWithStateAndWrapper(Wrapper_1.ModalWrapper, {
    useDefaultProps: useDefaultProps,
    DefaultToolbarComponent: TimePickerToolbar_1.TimePickerToolbar,
});
exports.StaticTimePicker = makePickerWithState_1.makePickerWithStateAndWrapper(Wrapper_1.StaticWrapper, {
    useDefaultProps: useDefaultProps,
    DefaultToolbarComponent: TimePickerToolbar_1.TimePickerToolbar,
});
