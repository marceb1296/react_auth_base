import { Signal } from "@preact/signals-react";
import { IHandleErrorData, IUser } from "../interfaces";
export declare const useAuth: <T = any>() => {
    user: IUser<T> | undefined;
    updateError: IHandleErrorData | undefined;
    logOut: (() => void) | undefined;
    authManager: (fn: (user: Signal<IUser<T> | undefined>, interval: React.MutableRefObject<NodeJS.Timer | undefined>, updateError: Signal<IHandleErrorData | undefined>, logOut: Signal<(() => void) | undefined>) => void) => void;
};
