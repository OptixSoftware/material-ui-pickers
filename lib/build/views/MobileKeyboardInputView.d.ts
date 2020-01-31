import * as React from 'react';
import { DateInputProps } from '../_shared/PureDateInput';
import { InnerMobileWrapperProps } from '../wrappers/MobileWrapper';
interface MobileKeyboardInputViewProps extends DateInputProps, Partial<InnerMobileWrapperProps> {
}
export declare const MobileKeyboardInputView: React.FC<MobileKeyboardInputViewProps>;
export {};
