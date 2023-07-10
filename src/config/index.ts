import { IConfig, IFirebase } from "../interfaces";

const defaultKeywoard: IConfig = {
    firebaseConfig: {} as IFirebase,
    endpoint: "http://127.0.0.1:8000/api/auth/",
    keywoard: "TSESSION",
    refreshTokenHeader: "Authorization",
    acceptUsername: false,
    bodyAsBase64: false,
    signInMethods: [
        "google"
    ]
}


export let config = { ...defaultKeywoard };


export const setConfig = (userConfig: Partial<IConfig>) => {
    config = { ...defaultKeywoard, ...userConfig };
};