import { IFirebase, IHandleErrorData } from ".";

interface IToS {
    label: string;
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
    keywoard: string;
    refreshTokenHeader: string;
    keywoardRefreshTokenHeader?: string;
    urlForRefreshToken?: string;
    acceptUsername: boolean;
    bodyAsBase64: boolean;
    urlForBase64?: string;
    urlForEmailOrUser?: string;
    hasToS?: IToS;
    firebaseErrorMessages?: IHandleErrorData[];
    signInMethods: TMethods[];
}