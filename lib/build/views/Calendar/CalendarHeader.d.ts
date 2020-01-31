import * as React from 'react';
import { CalendarProps } from './Calendar';
import { DatePickerView } from '../../DatePicker';
import { SlideDirection } from './SlideTransition';
import { MaterialUiPickersDate } from '../../typings/date';
import { IconButtonProps } from '@material-ui/core/IconButton';
export interface CalendarWithHeaderProps extends Pick<CalendarProps, 'minDate' | 'maxDate' | 'disablePast' | 'disableFuture'> {
    view: DatePickerView;
    views: DatePickerView[];
    month: MaterialUiPickersDate;
    /** Left arrow icon */
    leftArrowIcon?: React.ReactNode;
    /** Right arrow icon */
    rightArrowIcon?: React.ReactNode;
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
    reduceAnimations: boolean;
    changeView: (view: DatePickerView) => void;
    onMonthChange: (date: MaterialUiPickersDate, slideDirection: SlideDirection) => void;
}
export declare const useStyles: (props?: any) => Record<"iconButton" | "previousMonthButton" | "switchHeader" | "yearSelectionSwitcher" | "switchViewDropdown" | "switchViewDropdownDown" | "monthTitleContainer" | "monthText", string>;
export declare const CalendarHeader: React.SFC<CalendarWithHeaderProps>;
export default CalendarHeader;
