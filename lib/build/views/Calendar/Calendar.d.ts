import * as React from 'react';
import { SlideDirection } from './SlideTransition';
import { WrapperVariant } from '../../wrappers/Wrapper';
import { MaterialUiPickersDate } from '../../typings/date';
import { IconButtonProps } from '@material-ui/core/IconButton';
export interface CalendarProps {
    /** Calendar Date @DateIOType */
    date: MaterialUiPickersDate;
    /** Calendar onChange */
    onChange: (date: MaterialUiPickersDate, isFinish?: boolean) => void;
    /**
     * Disable past dates
     * @default false
     */
    disablePast?: boolean;
    /**
     * Disable future dates
     * @default false
     */
    disableFuture?: boolean;
    /** Left arrow icon */
    leftArrowIcon?: React.ReactNode;
    /** Right arrow icon */
    rightArrowIcon?: React.ReactNode;
    /** Custom renderer for day @DateIOType */
    renderDay?: (day: MaterialUiPickersDate, selectedDate: MaterialUiPickersDate, dayInCurrentMonth: boolean, dayComponent: JSX.Element) => JSX.Element;
    /**
     * Enables keyboard listener for moving between days in calendar
     * @default true
     */
    allowKeyboardControl?: boolean;
    /**
     * Props to pass to left arrow button
     * @type {Partial<IconButtonProps>}
     */
    leftArrowButtonProps?: Partial<IconButtonProps>;
    /**
     * Props to pass to right arrow button
     * @type {Partial<IconButtonProps>}
     */
    rightArrowButtonProps?: Partial<IconButtonProps>;
    /**
     * Show left arrow button?
     * @default true
     */
    showLeftArrowButton?: boolean;
    /**
     * Show right arrow button?
     * @default true
     */
    showRightArrowButton?: boolean;
    /** Disable specific date @DateIOType */
    shouldDisableDate?: (day: MaterialUiPickersDate) => boolean;
    /** Callback firing on month change. Return promise to render spinner till it will not be resolved @DateIOType */
    onMonthChange?: (date: MaterialUiPickersDate) => void | Promise<void>;
    /** Custom loading indicator  */
    loadingIndicator?: JSX.Element;
    minDate?: MaterialUiPickersDate;
    maxDate?: MaterialUiPickersDate;
    slideDirection: SlideDirection;
    currentMonth: MaterialUiPickersDate;
    reduceAnimations: boolean;
    wrapperVariant: WrapperVariant | null;
}
export declare const useStyles: (props?: any) => Record<"week" | "dayLabel" | "transitionContainer" | "progressContainer" | "iconButton" | "previousMonthButton" | "daysHeader", string>;
export declare const Calendar: React.FC<CalendarProps>;
export default Calendar;
