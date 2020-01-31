"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var useUtils_1 = require("./useUtils");
function useParsedDate(possiblyUnparsedValue) {
    var utils = useUtils_1.useUtils();
    return React.useMemo(function () { return utils.date(possiblyUnparsedValue); }, [possiblyUnparsedValue, utils]);
}
exports.useParsedDate = useParsedDate;
