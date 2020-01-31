import * as React from 'react';
import { ClockViewType } from '../../constants/ClockType';
import { MaterialUiPickersDate } from '../../typings/date';
export interface ClockProps {
    date: MaterialUiPickersDate;
    type: ClockViewType;
    value: number;
    children: React.ReactElement<any>[];
    onDateChange: (date: MaterialUiPickersDate, isFinish?: boolean) => void;
    onChange: (value: number, isFinish?: boolean) => void;
    ampm?: boolean;
    minutesStep?: number;
    ampmInClock?: boolean;
}
export declare const useStyles: (props?: any) => Record<"container" | "clock" | "squareMask" | "pin" | "amButton" | "pmButton" | "meridiemButtonSelected", string>;
export declare const Clock: React.FC<ClockProps>;
export default Clock;
