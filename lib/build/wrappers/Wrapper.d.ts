import { StaticWrapper } from './StaticWrapper';
import { DateInputProps } from '../_shared/PureDateInput';
import { MobileWrapper, MobileWrapperProps } from './MobileWrapper';
import { DesktopWrapper, DesktopWrapperProps } from './DesktopWrapper';
import { ResponsiveWrapper, ResponsiveWrapperProps } from './ResponsiveWrapper';
export interface WrapperProps {
    open: boolean;
    onAccept: () => void;
    onDismiss: () => void;
    onClear: () => void;
    onSetToday: () => void;
    DateInputProps: DateInputProps;
    wider?: boolean;
    showTabs?: boolean;
}
export declare type OmitInnerWrapperProps<T extends WrapperProps> = Omit<T, keyof WrapperProps>;
export declare type SomeWrapper = typeof ResponsiveWrapper | typeof StaticWrapper | typeof MobileWrapper | typeof DesktopWrapper;
export declare type ExtendWrapper<TWrapper extends SomeWrapper> = TWrapper extends typeof StaticWrapper ? {} : TWrapper extends typeof MobileWrapper ? OmitInnerWrapperProps<MobileWrapperProps> : TWrapper extends typeof DesktopWrapper ? OmitInnerWrapperProps<DesktopWrapperProps> : TWrapper extends typeof ResponsiveWrapper ? OmitInnerWrapperProps<ResponsiveWrapperProps> : never;
export declare function getWrapperVariant(wrapper: SomeWrapper): "desktop" | "static" | "mobile" | null;
export declare type WrapperVariant = ReturnType<typeof getWrapperVariant>;
export { StaticWrapper, MobileWrapper as ModalWrapper, DesktopWrapper as InlineWrapper };
