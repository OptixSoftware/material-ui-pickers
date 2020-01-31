import * as React from 'react';
import { DatePickerView } from '../../DatePicker';
import { CalendarProps } from './Calendar';
import { ParsableDate } from '../../constants/prop-types';
import { MaterialUiPickersDate } from '../../typings/date';
export interface CalendarViewProps extends Omit<CalendarProps, 'reduceAnimations' | 'slideDirection' | 'currentMonth' | 'minDate' | 'maxDate' | 'wrapperVariant'> {
    date: MaterialUiPickersDate;
    view: DatePickerView;
    views: DatePickerView[];
    changeView: (view: DatePickerView) => void;
    onChange: (date: MaterialUiPickersDate, isFinish?: boolean) => void;
    /**
     * Min selectable date
     * @default Date(1900-01-01)
     */
    minDate?: ParsableDate;
    /**
     * Max selectable date
     * @default Date(2100-01-01)
     */
    maxDate?: ParsableDate;
    /** Do not show heavy animations, significantly improves performance on slow devices
     * @default /(android)/i.test(navigator.userAgent)
     */
    reduceAnimations?: boolean;
}
export declare type ExportedCalendarProps = Omit<CalendarViewProps, 'date' | 'view' | 'views' | 'onChange' | 'changeView' | 'slideDirection' | 'currentMonth'>;
export declare const useStyles: (props?: any) => Record<"viewTransitionContainer" | "gridFullHeight", string>;
export declare const CalendarView: React.FC<CalendarViewProps>;
