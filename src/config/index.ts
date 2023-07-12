import { IConfig, IFirebase } from "../interfaces";

const defaultConfigs: IConfig = {
    languaje: "en",
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


export let config = { ...defaultConfigs };


export const setConfig = (userConfig: Partial<IConfig>) => {
    config = { ...defaultConfigs, ...userConfig };
};