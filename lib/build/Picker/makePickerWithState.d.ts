import * as React from 'react';
import { MakeOptional } from '../typings/helpers';
import { DateTimePickerView } from '../DateTimePicker';
import { BasePickerProps } from '../typings/BasePicker';
import { ExportedDateInputProps } from '../_shared/PureDateInput';
import { DateValidationProps } from '../_helpers/text-field-helper';
import { ToolbarComponentProps, PickerViewProps } from './Picker';
import { SomeWrapper, ExtendWrapper } from '../wrappers/Wrapper';
export interface WithViewsProps<T extends DateTimePickerView> {
    /**
     * Array of views to show
     */
    views?: T[];
    /** First view to show */
    openTo?: T;
}
export declare type WithDateInputProps = DateValidationProps & BasePickerProps & ExportedDateInputProps;
export interface MakePickerOptions<T extends unknown> {
    useDefaultProps: (props: T) => Partial<T> & {
        format: string;
    };
    DefaultToolbarComponent: React.ComponentType<ToolbarComponentProps>;
}
declare type ExportedPickerProps = MakeOptional<PickerViewProps<any>, 'ToolbarComponent'>;
export declare function makePickerWithStateAndWrapper<T extends ExportedPickerProps & DateValidationProps & Pick<BasePickerProps, 'onChange' | 'value'>, TWrapper extends SomeWrapper = any>(Wrapper: TWrapper, { useDefaultProps, DefaultToolbarComponent }: MakePickerOptions<T>): React.FC<T & ExtendWrapper<TWrapper>>;
export {};
