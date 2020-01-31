import * as React from 'react';
import { PopoverProps } from '@material-ui/core/Popover';
import { WrapperProps } from './Wrapper';
import { InnerMobileWrapperProps } from './MobileWrapper';
export interface InnerDesktopWrapperProps {
    /** Popover props passed to material-ui Popover */
    PopoverProps?: Partial<PopoverProps>;
}
export interface DesktopWrapperProps extends InnerDesktopWrapperProps, WrapperProps, Partial<InnerMobileWrapperProps> {
}
export declare const DesktopWrapper: React.FC<DesktopWrapperProps>;
