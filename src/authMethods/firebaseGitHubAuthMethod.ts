import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { IHandleErrorData } from "../interfaces";
import { auth, providerGitHub } from "../services/firebase";
import { Signal } from "@preact/signals-react";

export const signInWithGitHubRedirect = (errorHandler: Signal<IHandleErrorData>) => signInWithRedirect(auth(), providerGitHub).catch(error => {
    
    const {code, message, customData} = error;
    const { email } = customData;

    
    errorHandler.value = {
        code,
        message,
        email
    }
});

export const signInWithGitHubPopup = (errorHandler: Signal<IHandleErrorData>) => signInWithPopup(auth(), providerGitHub).catch(error => {
    
    const {code, message, customData} = error;
    const { email } = customData;

    
    errorHandler.value = {
        code,
        message,
        email
    }
});