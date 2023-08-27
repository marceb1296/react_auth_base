import { FormProps, IHandleErrorData, ILanguages, TAuthManager, THandleAction } from "../interfaces";
export declare const useForm: (authManager: TAuthManager, handleClose: THandleAction<boolean>, language: ILanguages) => {
    form: import("@preact/signals-core").Signal<FormProps>;
    radio: import("@preact/signals-core").Signal<boolean>;
    isLoading: import("@preact/signals-core").Signal<boolean>;
    handleError: import("@preact/signals-core").Signal<IHandleErrorData>;
    confirmTp: import("@preact/signals-core").Signal<boolean>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleRadio: () => void;
    handleSocialLogin: (e: React.MouseEvent<HTMLButtonElement>, loginType: string) => Promise<void>;
    handleSubmit: (e: React.FormEvent) => void;
    handleToken: (token: string) => Promise<void>;
};
