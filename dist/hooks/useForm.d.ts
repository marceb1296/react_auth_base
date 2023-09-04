import { Signal } from "@preact/signals-react";
import { FormProps, IHandleErrorData, ILanguages, TAuthManager, THandleAction } from "../interfaces";
export declare const useForm: (authManager: TAuthManager, handleClose: THandleAction<boolean>, language: ILanguages, toastMessage: Signal<string | undefined>) => {
    form: Signal<FormProps>;
    radio: Signal<boolean>;
    isLoading: Signal<boolean>;
    handleError: Signal<IHandleErrorData>;
    confirmTp: Signal<boolean>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleRadio: () => void;
    handleSocialLogin: (e: React.MouseEvent<HTMLButtonElement>, loginType: string) => Promise<void>;
    handleSubmit: (e: React.FormEvent) => Promise<void>;
    handleToken: (token: string) => Promise<void>;
};
