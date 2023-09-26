import { Signal } from "@preact/signals-react";
import { FormProps, IHandleErrorData, ILanguages, TAuthManager } from "../interfaces";
export declare const useForm: (authManager: TAuthManager, language: ILanguages, toastMessage: Signal<string | undefined>, onSuccessFn: (() => void) | undefined) => {
    form: Signal<FormProps>;
    radio: Signal<boolean>;
    isLoading: Signal<boolean>;
    handleError: Signal<IHandleErrorData>;
    confirmTp: Signal<boolean>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleRadio: () => void;
    handleSocialLogin: (loginType: string) => Promise<void>;
    handleSubmit: (e: React.FormEvent) => Promise<void>;
    handleSubmitUserAlreadyLogged: (tokenId: string) => void;
    handleToken: (token: string) => Promise<void>;
};
