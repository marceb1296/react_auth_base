import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { IHandleErrorData } from "../interfaces";
import { auth, providerTwitter } from "../services/firebase";
import { Signal } from "@preact/signals-react";

export const signInWithTwitterRedirect = (errorHandler: Signal<IHandleErrorData>) => signInWithRedirect(auth(), providerTwitter).catch(error => {
    
    const {code, message, customData} = error;
    const { email } = customData;

    
    errorHandler.value = {
        code,
        message,
        email
    }
});

export const signInWithTwitterPopup = (errorHandler: Signal<IHandleErrorData>) => signInWithPopup(auth(), providerTwitter).catch(error => {
    
    const {code, message, customData} = error;
    const { email } = customData;

    
    errorHandler.value = {
        code,
        message,
        email
    }
});