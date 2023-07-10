import { signInWithPopup, signInWithRedirect } from "firebase/auth";
import { auth, providerFacebook } from "../services";
import { IHandleErrorData } from "../interfaces";
import { Signal } from "@preact/signals-react";

export const signInWithFacebookRedirect = (errorHandler: Signal<IHandleErrorData>) => signInWithRedirect(auth(), providerFacebook).catch(error => {
    console.log(error)
    const {code, message, customData} = error;
    const { email } = customData;

    errorHandler.value = {
        code,
        message,
        email
    }
});

export const signInWithFacebookPopup = (errorHandler: Signal<IHandleErrorData>) => signInWithPopup(auth(), providerFacebook).catch(error => {
    console.log(error)
    const {code, message, customData} = error;
    const { email } = customData;

    errorHandler.value = {
        code,
        message,
        email
    }
});