import * as React from 'react';
import { ButtonProps } from '@material-ui/core/Button';
import { ExtendMui } from '../typings/helpers';
import { TypographyProps } from '@material-ui/core/Typography';
export interface ToolbarButtonProps extends ExtendMui<ButtonProps, 'variant'> {
    variant: TypographyProps['variant'];
    selected: boolean;
    label: string;
    align?: TypographyProps['align'];
    typographyClassName?: string;
}
export declare const useStyles: (props?: any) => Record<"toolbarBtn", string>;
declare const ToolbarButton: React.FunctionComponent<ToolbarButtonProps>;
export default ToolbarButton;
