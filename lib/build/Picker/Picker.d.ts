import * as React from 'react';
import { WrapperVariant } from '../wrappers/Wrapper';
import { DateTimePickerView } from '../DateTimePicker';
import { WithViewsProps } from './makePickerWithState';
import { BasePickerProps } from '../typings/BasePicker';
import { MaterialUiPickersDate } from '../typings/date';
import { DateInputProps } from '../_shared/PureDateInput';
import { BaseClockViewProps } from '../views/Clock/ClockView';
import { BaseDatePickerProps } from '../DatePicker/DatePicker';
export declare type PickerView = DateTimePickerView;
export declare type ToolbarComponentProps<T extends PickerView = any> = BaseDatePickerProps & BaseClockViewProps & {
    views: T[];
    openView: T;
    date: MaterialUiPickersDate;
    setOpenView: (view: T) => void;
    onChange: (date: MaterialUiPickersDate, isFinish?: boolean) => void;
    title?: string;
    hideTabs?: boolean;
    dateRangeIcon?: React.ReactNode;
    timeIcon?: React.ReactNode;
    isLandscape: boolean;
    ampmInClock?: boolean;
    isMobileKeyboardViewOpen: boolean;
    toggleMobileKeyboardView: () => void;
};
export interface PickerViewProps<TView extends PickerView> extends Omit<BasePickerProps, 'value' | 'onChange'>, WithViewsProps<TView>, BaseDatePickerProps, BaseClockViewProps {
    title?: string;
    showToolbar?: boolean;
    ToolbarComponent: React.ComponentType<ToolbarComponentProps<any>>;
    hideTabs?: boolean;
    dateRangeIcon?: React.ReactNode;
    timeIcon?: React.ReactNode;
}
interface PickerProps<T extends PickerView> extends PickerViewProps<T> {
    isMobileKeyboardViewOpen: boolean;
    toggleMobileKeyboardView: () => void;
    DateInputProps: DateInputProps;
    date: MaterialUiPickersDate;
    onDateChange: (date: MaterialUiPickersDate, currentVariant: WrapperVariant, isFinish?: boolean) => void;
}
export declare const useStyles: (props?: any) => Record<"container" | "containerLandscape" | "pickerView" | "pickerViewLandscape", string>;
export declare function Picker({ date, openTo, views, title, showToolbar, onDateChange, ToolbarComponent, orientation, DateInputProps, isMobileKeyboardViewOpen, toggleMobileKeyboardView, ...other }: PickerProps<PickerView>): JSX.Element;
export declare namespace Picker {
    var displayName: string;
}
export {};
