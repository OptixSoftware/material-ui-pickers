import { BaseClockViewProps } from '../views/Clock/ClockView';
import { WithDateInputProps, WithViewsProps } from '../Picker/makePickerWithState';
export interface TimePickerProps extends BaseClockViewProps, WithViewsProps<'hours' | 'minutes' | 'seconds'>, WithDateInputProps {
}
export declare const TimePicker: import("react").FC<TimePickerProps | (TimePickerProps & Pick<import("../wrappers/MobileWrapper").MobileWrapperProps, "okLabel" | "cancelLabel" | "clearLabel" | "todayLabel" | "clearable" | "showTodayButton" | "DialogProps" | "PopoverProps">) | (TimePickerProps & Pick<import("../wrappers/DesktopWrapper").DesktopWrapperProps, "okLabel" | "cancelLabel" | "clearLabel" | "todayLabel" | "clearable" | "showTodayButton" | "DialogProps" | "PopoverProps">) | (TimePickerProps & Pick<import("../wrappers/ResponsiveWrapper").ResponsiveWrapperProps, "okLabel" | "cancelLabel" | "clearLabel" | "todayLabel" | "clearable" | "showTodayButton" | "DialogProps" | "PopoverProps" | "desktopModeBreakpoint">)>;
export declare const DesktopTimePicker: import("react").FC<TimePickerProps | (TimePickerProps & Pick<import("../wrappers/MobileWrapper").MobileWrapperProps, "okLabel" | "cancelLabel" | "clearLabel" | "todayLabel" | "clearable" | "showTodayButton" | "DialogProps" | "PopoverProps">) | (TimePickerProps & Pick<import("../wrappers/DesktopWrapper").DesktopWrapperProps, "okLabel" | "cancelLabel" | "clearLabel" | "todayLabel" | "clearable" | "showTodayButton" | "DialogProps" | "PopoverProps">) | (TimePickerProps & Pick<import("../wrappers/ResponsiveWrapper").ResponsiveWrapperProps, "okLabel" | "cancelLabel" | "clearLabel" | "todayLabel" | "clearable" | "showTodayButton" | "DialogProps" | "PopoverProps" | "desktopModeBreakpoint">)>;
export declare const MobileTimePicker: import("react").FC<TimePickerProps | (TimePickerProps & Pick<import("../wrappers/MobileWrapper").MobileWrapperProps, "okLabel" | "cancelLabel" | "clearLabel" | "todayLabel" | "clearable" | "showTodayButton" | "DialogProps" | "PopoverProps">) | (TimePickerProps & Pick<import("../wrappers/DesktopWrapper").DesktopWrapperProps, "okLabel" | "cancelLabel" | "clearLabel" | "todayLabel" | "clearable" | "showTodayButton" | "DialogProps" | "PopoverProps">) | (TimePickerProps & Pick<import("../wrappers/ResponsiveWrapper").ResponsiveWrapperProps, "okLabel" | "cancelLabel" | "clearLabel" | "todayLabel" | "clearable" | "showTodayButton" | "DialogProps" | "PopoverProps" | "desktopModeBreakpoint">)>;
export declare const StaticTimePicker: import("react").FC<TimePickerProps | (TimePickerProps & Pick<import("../wrappers/MobileWrapper").MobileWrapperProps, "okLabel" | "cancelLabel" | "clearLabel" | "todayLabel" | "clearable" | "showTodayButton" | "DialogProps" | "PopoverProps">) | (TimePickerProps & Pick<import("../wrappers/DesktopWrapper").DesktopWrapperProps, "okLabel" | "cancelLabel" | "clearLabel" | "todayLabel" | "clearable" | "showTodayButton" | "DialogProps" | "PopoverProps">) | (TimePickerProps & Pick<import("../wrappers/ResponsiveWrapper").ResponsiveWrapperProps, "okLabel" | "cancelLabel" | "clearLabel" | "todayLabel" | "clearable" | "showTodayButton" | "DialogProps" | "PopoverProps" | "desktopModeBreakpoint">)>;
