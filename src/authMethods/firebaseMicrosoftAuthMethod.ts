import { signInWithRedirect, signInWithPopup } from "firebase/auth";
import { IHandleErrorData } from "../interfaces";
import { auth, providerMicrosoft } from "../services";
import { Signal } from "@preact/signals-react";


export const signInWithMicrosoftRedirect = (errorHandler: Signal<IHandleErrorData>) => signInWithRedirect(auth(), providerMicrosoft).catch(error => {
    
    const {code, message, customData} = error;
    const { email } = customData;

    
    errorHandler.value = {
        code,
        message,
        email
    }
});

export const signInWithMicrosoftPopup = (errorHandler: Signal<IHandleErrorData>) => signInWithPopup(auth(), providerMicrosoft).catch(error => {
 
    const {code, message, customData} = error;
    const { email } = customData;
    
    errorHandler.value = {
        code,
        message,
        email
    }
    
});