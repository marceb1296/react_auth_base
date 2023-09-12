/// <reference types="node" />
import React from "react";
import { FormProps, IHandleErrorData, ILanguages, IUser, THandleAction } from ".";
import { Signal } from "@preact/signals-react";
import { UserInfo } from "firebase/auth";
export interface IModal {
    children: React.ReactNode;
    title: string;
    isLoading: boolean;
    scrollPosition: Signal<boolean>;
    language: ILanguages;
    toastMessage: Signal<string | undefined>;
}
export type TAuthManager = (fn: (user: Signal<IUser<any> | undefined>, interval: React.MutableRefObject<NodeJS.Timer | undefined>, updateError: Signal<IHandleErrorData | undefined>, logOut: Signal<(() => void) | undefined>) => void) => void;
export interface IModalProp {
    message: string;
    isOpen: boolean;
    closeAction: THandleAction<boolean>;
    authManager: TAuthManager;
}
export interface IHasTos {
    confirmTp: boolean;
    handleRadio: () => void;
    radioValue: boolean;
}
export interface IUserAlreadyLogged {
    alreadyUser: Signal<UserInfo & Record<"tokenId", string> | undefined>;
    language: ILanguages;
    isLoading: Signal<boolean>;
    handleToken: (token: string, finallyFn?: () => void) => Promise<void>;
}
export type SocialLoginProps = {
    handleSocialLogin: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, loginType: string) => Promise<void>;
};
export interface SocialLoginEmailProps {
    handleSubmit: (e: React.FormEvent) => void;
    language: ILanguages;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    form: Signal<FormProps>;
    forgotPassword: Signal<boolean>;
}
