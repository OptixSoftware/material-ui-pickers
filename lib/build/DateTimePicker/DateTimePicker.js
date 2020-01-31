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
var DateTimePickerToolbar_1 = require("./DateTimePickerToolbar");
var ResponsiveWrapper_1 = require("../wrappers/ResponsiveWrapper");
var text_field_helper_1 = require("../_helpers/text-field-helper");
var prop_types_1 = require("../constants/prop-types");
var Wrapper_1 = require("../wrappers/Wrapper");
var makePickerWithState_1 = require("../Picker/makePickerWithState");
function useDefaultProps(_a) {
    var _b = _a.ampm, ampm = _b === void 0 ? false : _b, format = _a.format, _c = _a.orientation, orientation = _c === void 0 ? 'portrait' : _c, _d = _a.openTo, openTo = _d === void 0 ? 'date' : _d, _e = _a.views, views = _e === void 0 ? ['year', 'date', 'hours', 'minutes'] : _e;
    var utils = useUtils_1.useUtils();
    if (orientation !== 'portrait') {
        throw new Error('We are not supporting custom orientation for DateTimePicker yet :(');
    }
    return __assign(__assign({}, prop_types_1.dateTimePickerDefaultProps), { openTo: openTo,
        views: views, wider: true, ampmInClock: true, orientation: orientation, showToolbar: true, refuse: ampm ? /[^\dap]+/gi : /[^\d]+/gi, format: text_field_helper_1.pick12hOr24hFormat(format, ampm, {
            '12h': utils.formats.keyboardDateTime12h,
            '24h': utils.formats.keyboardDateTime24h,
        }) });
}
exports.DateTimePicker = makePickerWithState_1.makePickerWithStateAndWrapper(ResponsiveWrapper_1.ResponsiveWrapper, {
    useDefaultProps: useDefaultProps,
    DefaultToolbarComponent: DateTimePickerToolbar_1.DateTimePickerToolbar,
});
exports.DesktopDateTimePicker = makePickerWithState_1.makePickerWithStateAndWrapper(Wrapper_1.InlineWrapper, {
    useDefaultProps: useDefaultProps,
    DefaultToolbarComponent: DateTimePickerToolbar_1.DateTimePickerToolbar,
});
exports.MobileDateTimePicker = makePickerWithState_1.makePickerWithStateAndWrapper(Wrapper_1.ModalWrapper, {
    useDefaultProps: useDefaultProps,
    DefaultToolbarComponent: DateTimePickerToolbar_1.DateTimePickerToolbar,
});
exports.StaticDateTimePicker = makePickerWithState_1.makePickerWithStateAndWrapper(Wrapper_1.StaticWrapper, {
    useDefaultProps: useDefaultProps,
    DefaultToolbarComponent: DateTimePickerToolbar_1.DateTimePickerToolbar,
});
