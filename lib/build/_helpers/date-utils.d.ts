import { IUtils } from '@date-io/core/IUtils';
import { MaterialUiPickersDate } from '../typings/date';
interface FindClosestDateParams {
    date: MaterialUiPickersDate;
    utils: IUtils<MaterialUiPickersDate>;
    minDate: MaterialUiPickersDate;
    maxDate: MaterialUiPickersDate;
    disableFuture: boolean;
    disablePast: boolean;
    shouldDisableDate: (date: MaterialUiPickersDate) => boolean;
}
export declare const findClosestEnabledDate: ({ date, utils, minDate, maxDate, disableFuture, disablePast, shouldDisableDate, }: FindClosestDateParams) => MaterialUiPickersDate;
export declare const isYearOnlyView: (views: readonly ("year" | "date" | "month")[]) => boolean;
export declare const isYearAndMonthViews: (views: readonly ("year" | "date" | "month")[]) => boolean;
export declare const getFormatByViews: (views: readonly ("year" | "date" | "month")[], utils: IUtils<MaterialUiPickersDate>) => string;
export {};
