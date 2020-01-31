import * as React from 'react';
import { MaterialUiPickersDate } from '../../typings/date';
export interface BaseClockViewProps {
    /**
     * 12h/24h view for hour selection clock
     * @default true
     */
    ampm?: boolean;
    /**
     * Step over minutes
     * @default 1
     */
    minutesStep?: number;
    /**
     * Display ampm controls under the clock (instead of in the toolbar)
     * @default false
     */
    ampmInClock?: boolean;
}
export interface ClockViewProps extends BaseClockViewProps {
    /** Selected date @DateIOType */
    date: MaterialUiPickersDate;
    /** Clock type */
    type: 'hours' | 'minutes' | 'seconds';
    /** On change date without moving between views @DateIOType */
    onDateChange: (date: MaterialUiPickersDate, isFinish?: boolean) => void;
    /** On hour change @DateIOType */
    onHourChange: (date: MaterialUiPickersDate, isFinish?: boolean) => void;
    /** On minutes change @DateIOType */
    onMinutesChange: (date: MaterialUiPickersDate, isFinish?: boolean) => void;
    /** On seconds change @DateIOType */
    onSecondsChange: (date: MaterialUiPickersDate, isFinish?: boolean) => void;
}
export declare const ClockView: React.FC<ClockViewProps>;
declare const _default: React.NamedExoticComponent<ClockViewProps>;
export default _default;
