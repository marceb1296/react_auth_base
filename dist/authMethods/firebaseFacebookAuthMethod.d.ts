import { IHandleErrorData } from "../interfaces";
import { Signal } from "@preact/signals-react";
export declare const signInWithFacebookRedirect: (errorHandler: Signal<IHandleErrorData>) => Promise<void>;
export declare const signInWithFacebookPopup: (errorHandler: Signal<IHandleErrorData>) => Promise<void | import("@firebase/auth").UserCredential>;
