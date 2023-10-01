import { IHandleErrorData } from "../interfaces";
import { Signal } from "@preact/signals-react";
export declare const signInWithGoogleRedirect: (errorHandler: Signal<IHandleErrorData>) => Promise<void>;
export declare const signInWithGooglePopup: (errorHandler: Signal<IHandleErrorData>) => Promise<void | import("@firebase/auth").UserCredential>;
