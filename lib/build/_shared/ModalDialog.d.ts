import * as React from 'react';
import { DialogProps } from '@material-ui/core/Dialog';
export interface ModalDialogProps extends DialogProps {
    onAccept: () => void;
    onDismiss: () => void;
    onClear: () => void;
    onSetToday: () => void;
    okLabel?: React.ReactNode;
    cancelLabel?: React.ReactNode;
    clearLabel?: React.ReactNode;
    todayLabel?: React.ReactNode;
    clearable?: boolean;
    showTodayButton?: boolean;
    showTabs?: boolean;
    wider?: boolean;
}
export declare const useStyles: (props?: any) => Record<"dialog" | "dialogRoot" | "dialogRootWider" | "withAdditionalAction", string>;
export declare const ModalDialog: React.FC<ModalDialogProps>;
export default ModalDialog;