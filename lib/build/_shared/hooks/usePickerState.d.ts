import { MaterialUiPickersDate } from '../../typings/date';
import { BasePickerProps } from '../../typings/BasePicker';
export declare function usePickerState(props: BasePickerProps): {
    pickerProps: {
        date: MaterialUiPickersDate;
        isMobileKeyboardViewOpen: boolean;
        toggleMobileKeyboardView: () => void;
        onDateChange: (newDate: MaterialUiPickersDate, currentVariant: "desktop" | "static" | "mobile" | null, isFinish?: boolean) => void;
    };
    inputProps: {
        onChange: (date: MaterialUiPickersDate, keyboardInputValue?: string | undefined) => void;
        format: string;
        rawValue: import("../../constants/prop-types").ParsableDate;
        validationError: import("react").ReactNode;
        openPicker: () => false | void;
    };
    wrapperProps: {
        format: string;
        open: boolean;
        onClear: () => void;
        onAccept: () => void;
        onSetToday: () => void;
        onDismiss: () => void;
    };
};
