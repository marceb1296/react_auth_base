import { IHandleErrorData } from "../interfaces";
import { Signal } from "@preact/signals-react";
export declare const signInWithGitHubRedirect: (errorHandler: Signal<IHandleErrorData>) => Promise<void>;
export declare const signInWithGitHubPopup: (errorHandler: Signal<IHandleErrorData>) => Promise<void | import("@firebase/auth").UserCredential>;
