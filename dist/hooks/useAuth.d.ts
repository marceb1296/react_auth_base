import { Signal } from "@preact/signals-react";
import { IHandleErrorData, IUser } from "../interfaces";
export declare const useAuth: <T = any>() => {
    user: IUser<T> | undefined;
    updateError: IHandleErrorData | undefined;
    authManager: (fn: (user: Signal<IUser<T> | undefined>, interval: NodeJS.Timer | undefined, updateError: Signal<IHandleErrorData | undefined>) => void) => void;
};
