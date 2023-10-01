import { Signal } from "@preact/signals-react";
import { IHandleErrorData } from "../interfaces";
export declare const parseFirebaseErrorCode: (parser: IHandleErrorData[], obj: IHandleErrorData) => string;
export declare const signInError: (error: any, errorHandler: Signal<IHandleErrorData>) => void;
