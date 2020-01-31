import * as React from 'react';
import { MobileWrapperProps } from './MobileWrapper';
import { DesktopWrapperProps } from './DesktopWrapper';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
export interface ResponsiveWrapperProps extends DesktopWrapperProps, MobileWrapperProps {
    /** Breakpoint when `Desktop` mode will be changed to `Mobile`
     * @default 'sm'
     */
    desktopModeBreakpoint?: Breakpoint;
}
export declare const ResponsiveWrapper: React.FC<ResponsiveWrapperProps>;
