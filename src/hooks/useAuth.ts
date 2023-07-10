import { Signal, useSignal } from "@preact/signals-react";
import { IHandleErrorData, IUser } from "../interfaces";
import { useCallback, useEffect } from "react";


export const useAuth = <T = any>() => {
    const user = useSignal<IUser<T> | undefined>(undefined);
    const updateError = useSignal<IHandleErrorData | undefined>(undefined);
    let interval: NodeJS.Timer | undefined;

    const authManager = useCallback((fn: (user: Signal<IUser<T> | undefined> , interval: NodeJS.Timer | undefined, updateError: Signal<IHandleErrorData | undefined>) => void) => fn(user, interval, updateError), [])

    useEffect(() => {
        if (interval) {
            return clearInterval(interval)
        }
        
    }, [interval]);

    return {
        user: user.value,
        updateError: updateError.value,
        authManager
    };
}
 