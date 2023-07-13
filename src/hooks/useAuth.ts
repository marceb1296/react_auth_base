import { Signal, useSignal } from "@preact/signals-react";
import { IHandleErrorData, IUser } from "../interfaces";
import { useCallback, useEffect, useRef } from "react";



export const useAuth = <T = any>() => {
    const user = useSignal<IUser<T> | undefined>(undefined);
    const updateError = useSignal<IHandleErrorData | undefined>(undefined);
    const logOut = useSignal<(() => void )| undefined>(undefined)
    let interval = useRef<NodeJS.Timer | undefined>(undefined);

    const authManager = useCallback((fn: (user: Signal<IUser<T> | undefined> , interval: React.MutableRefObject<NodeJS.Timer | undefined>, updateError: Signal<IHandleErrorData | undefined>, logOut: Signal<(() => void )| undefined>) => void) => fn(user, interval, updateError, logOut), [])

    useEffect(() => {
        return () => {
          if (interval.current) clearInterval(interval.current);
        };
      }, []);

    return {
        user: user.value,
        updateError: updateError.value,
        logOut: logOut.value,
        authManager
    };
}
 