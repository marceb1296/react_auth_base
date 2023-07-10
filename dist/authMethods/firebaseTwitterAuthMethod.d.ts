import { IHandleErrorData } from "../interfaces";
import { Signal } from "@preact/signals-react";
export declare const signInWithTwitterRedirect: (errorHandler: Signal<IHandleErrorData>) => Promise<void>;
export declare const signInWithTwitterPopup: (errorHandler: Signal<IHandleErrorData>) => Promise<void | import("@firebase/auth").UserCredential>;
