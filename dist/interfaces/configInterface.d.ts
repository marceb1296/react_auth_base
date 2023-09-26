import React from "react";
import { IFirebase, IHandleErrorData } from ".";
export interface IToS {
    label: React.ReactNode;
    errorLabel: string;
}
export type TMethods = ("google" | "facebook" | "twitter" | "github" | "microsoft");
export interface ISigInMethods {
    signInMethods: TMethods[];
}
export interface ISignInMethodsParser {
    method: TMethods;
    constName: string;
    name: string;
    className: string;
    icon?: React.ReactNode;
}
export interface IConfig {
    firebaseConfig: IFirebase;
    endpoint: string;
    keyword: string;
    refreshTokenHeader: string;
    keywordRefreshTokenHeader?: string;
    urlForRefreshToken?: string;
    acceptUsername: boolean;
    bodyAsBase64: boolean;
    urlLoginForBase64?: string;
    urlLoginForEmailOrUser?: string;
    urlSignIn?: string;
    urlSignInForBase64?: string;
    urlForPasswordReset?: string;
    hasToS?: IToS;
    firebaseErrorMessages?: IHandleErrorData[];
    signInMethods: TMethods[];
    language: "es" | "en";
}
