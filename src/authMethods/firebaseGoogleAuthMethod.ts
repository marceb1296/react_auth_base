import { signInWithRedirect, signInWithPopup } from "firebase/auth";
import { IHandleErrorData } from "../interfaces";
import { auth, providerGoogle } from "../services";
import { Signal } from "@preact/signals-react";
import { signInError } from "../core";




export const signInWithGoogleRedirect = (errorHandler: Signal<IHandleErrorData>) => signInWithRedirect(auth(), providerGoogle).catch((error) => signInError(error, errorHandler));

export const signInWithGooglePopup = (errorHandler: Signal<IHandleErrorData>) => signInWithPopup(auth(), providerGoogle).catch((error) => signInError(error, errorHandler));