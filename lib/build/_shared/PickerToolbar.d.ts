import * as React from 'react';
import { ToolbarProps } from '@material-ui/core/Toolbar';
import { ExtendMui } from '../typings/helpers';
import { ToolbarComponentProps } from '../Picker/Picker';
export declare const useStyles: (props?: any) => Record<"toolbar" | "toolbarLandscape" | "dateTitleContainer", string>;
interface PickerToolbarProps extends ExtendMui<ToolbarProps>, Pick<ToolbarComponentProps, 'isMobileKeyboardViewOpen' | 'toggleMobileKeyboardView'> {
    title: string;
    landscapeDirection?: 'row' | 'column';
    isLandscape: boolean;
    penIconClassName?: string;
}
declare const PickerToolbar: React.SFC<PickerToolbarProps>;
export default PickerToolbar;
