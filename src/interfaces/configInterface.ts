import React from "react";
import { IFirebase, IHandleErrorData } from ".";

export interface IToS {
    label: string | React.ReactNode;
    errorLabel: string
}

export type TMethods = ("google" | "facebook" | "twitter" | "github" | "microsoft")

export interface ISigInMethods {
    signInMethods:  TMethods[];
}

export interface ISignInMethodsParser {
    method: TMethods;
    constName: string;
    name: string;
    className: string,
    icon?: React.ReactNode
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
    urlForBase64?: string;
    urlForEmailOrUser?: string;
    hasToS?: IToS;
    firebaseErrorMessages?: IHandleErrorData[];
    signInMethods: TMethods[];
    language: "es" | "en";
}