import React from "react";
import { FormProps, ILanguages, IUser } from ".";
import { Signal } from "@preact/signals-react";
import { UserInfo } from "firebase/auth";
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { MutationDefinition, BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
export interface IModal {
    children: React.ReactNode;
    isLoading: boolean;
    scrollPosition: Signal<boolean>;
    language: ILanguages;
    toastMessage: Signal<string | undefined>;
}
export type TAuthManager = (userState: IUser, toastMessage: Signal<string | undefined>, triggerUpdate: MutationTrigger<MutationDefinition<void, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, never, IUser<any>, "api">>) => Promise<void>;
export interface IModalProp {
    message: string;
    authManager: TAuthManager;
    onSuccessFn?: () => void;
}
export interface IHasTos {
    confirmTp: boolean;
    handleRadio: () => void;
    radioValue: boolean;
}
export interface IUserAlreadyLogged {
    alreadyUser: Signal<UserInfo & Record<"tokenId", string> | undefined>;
    language: ILanguages;
    handleSubmitUserAlreadyLogged: (tokenId: string) => void;
}
export type SocialLoginProps = {
    handleSocialLogin: (loginType: string) => Promise<void>;
};
export interface SocialLoginEmailProps {
    handleSubmit: (e: React.FormEvent) => void;
    language: ILanguages;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    form: Signal<FormProps>;
    forgotPassword: Signal<boolean>;
}
