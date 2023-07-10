import { Signal } from "@preact/signals-react";
import React from "react";

export interface IFirebase {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
}

export interface IHandleErrorData {
    code: string;
    message: string;
    email?: string;

}

export type THandleError<T> = React.Dispatch<React.SetStateAction<T>>  | Signal<T>
