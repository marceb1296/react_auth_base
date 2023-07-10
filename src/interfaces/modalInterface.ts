import React from "react";
import { IHandleErrorData, IUser, THandleError } from ".";
import { Signal } from "@preact/signals-react";

export interface IModal {
    children: React.ReactNode;
    closeAction?: THandleError<boolean>;
    title: string;
    message: string | React.ReactNode;
}

export type TAuthManager = (fn: (user: Signal<IUser<any> | undefined>, interval: NodeJS.Timer | undefined, updateError: Signal<IHandleErrorData | undefined>) => void) => void;


export interface IModalProp {
    message: string;
    isOpen: THandleError<boolean>;
    authManager: TAuthManager
}