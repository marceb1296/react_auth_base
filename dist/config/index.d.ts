import { IConfig, IFirebase } from "../interfaces";
export declare let config: {
    firebaseConfig: IFirebase;
    endpoint: string;
    keywoard: string;
    refreshTokenHeader: string;
    keywoardRefreshTokenHeader?: string | undefined;
    urlForRefreshToken?: string | undefined;
    acceptUsername: boolean;
    bodyAsBase64: boolean;
    urlForBase64?: string | undefined;
    urlForEmailOrUser?: string | undefined;
    hasToS?: import("../interfaces").IToS | undefined;
    firebaseErrorMessages?: import("../interfaces").IHandleErrorData[] | undefined;
    signInMethods: import("../interfaces").TMethods[];
};
export declare const setConfig: (userConfig: Partial<IConfig>) => void;
