import * as PropTypes from 'prop-types';
import { BaseClockViewProps } from '../views/Clock/ClockView';
import { BaseDatePickerProps } from '../DatePicker/DatePicker';
export declare type ParsableDate = object | string | number | Date | null | undefined;
export declare const DomainPropTypes: {
    date: PropTypes.Requireable<string | number | object>;
    datePickerView: PropTypes.Requireable<string>;
};
export declare const timePickerDefaultProps: BaseClockViewProps;
export declare const datePickerDefaultProps: BaseDatePickerProps;
export declare const dateTimePickerDefaultProps: BaseClockViewProps & BaseDatePickerProps;
