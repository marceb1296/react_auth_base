import { signInWithRedirect, signInWithPopup } from "firebase/auth";
import { IHandleErrorData } from "../interfaces";
import { auth, providerGoogle } from "../services";
import { Signal } from "@preact/signals-react";

export const signInError = (error: any, errorHandler: Signal<IHandleErrorData>) => {
    const { code, message, customData } = error;
    const { email } = customData;


    errorHandler.value = {
        code,
        message,
        email
    }
}


export const signInWithGoogleRedirect = (errorHandler: Signal<IHandleErrorData>) => signInWithRedirect(auth(), providerGoogle).catch((error) => signInError(error, errorHandler));

export const signInWithGooglePopup = (errorHandler: Signal<IHandleErrorData>) => signInWithPopup(auth(), providerGoogle).catch((error) => signInError(error, errorHandler));