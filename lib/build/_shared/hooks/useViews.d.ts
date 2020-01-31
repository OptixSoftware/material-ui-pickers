import * as React from 'react';
import { PickerView } from '../../Picker/Picker';
import { MaterialUiPickersDate } from '../../typings/date';
export declare function useViews({ views, openTo, onChange, isMobileKeyboardViewOpen, toggleMobileKeyboardView, }: {
    views: PickerView[];
    openTo: PickerView;
    onChange: (date: MaterialUiPickersDate, isFinish?: boolean) => void;
    isMobileKeyboardViewOpen: boolean;
    toggleMobileKeyboardView: () => void;
}): {
    nextView: import("../..").DateTimePickerView;
    openNext: () => void;
    handleChangeAndOpenNext: (date: MaterialUiPickersDate, isFinish?: boolean | undefined) => void;
    openView: import("../..").DateTimePickerView;
    setOpenView: (value: React.SetStateAction<import("../..").DateTimePickerView>) => void;
};
