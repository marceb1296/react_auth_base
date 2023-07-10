import { IHandleErrorData } from "../interfaces";
import { Signal } from "@preact/signals-react";
export declare const signInWithMicrosoftRedirect: (errorHandler: Signal<IHandleErrorData>) => Promise<void>;
export declare const signInWithMicrosoftPopup: (errorHandler: Signal<IHandleErrorData>) => Promise<void | import("@firebase/auth").UserCredential>;
