import { IHandleErrorData, TAuthManager, THandleError } from "../interfaces";
export declare const useForm: (authManager: TAuthManager, isOpen: THandleError<boolean>) => {
    form: import("@preact/signals-core").Signal<{
        email: string;
        username: string;
        password: string;
    }>;
    radio: import("@preact/signals-core").Signal<boolean>;
    isLoading: import("@preact/signals-core").Signal<boolean>;
    handleError: import("@preact/signals-core").Signal<IHandleErrorData>;
    confirmTp: import("@preact/signals-core").Signal<boolean>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlerRadio: () => void;
    handleSocialLogin: (e: React.MouseEvent<HTMLButtonElement>, loginType: string) => Promise<void>;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
