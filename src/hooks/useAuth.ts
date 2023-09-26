import { Signal, useSignal } from "@preact/signals-react";
import { IHandleErrorData, IUser } from "../interfaces";
import { useEffect, useMemo, useRef } from "react";
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { MutationDefinition, BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { signOut } from "firebase/auth";
import { auth } from "../services";


const toMilliseconds: number = 1000;
const restMilliseconds: number = 5000;


export const useAuth = <T = any>() => {
    const user = useSignal<IUser<T> | undefined>(undefined);
    const updateError = useSignal<IHandleErrorData | undefined>(undefined);
    const logOut = useSignal<(() => void) | undefined>(undefined)
    let interval = useRef<NodeJS.Timer | undefined>(undefined);

    const authManager = useMemo(() =>
        (userState: IUser, toastMessage: Signal<string | undefined>, triggerUpdate: MutationTrigger<MutationDefinition<void, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, never, IUser<any>, "api">>): Promise<void> => new Promise((resolve) => {
            // @ts-expect-error interval by default is number
            clearInterval(interval.current)
            interval.current = undefined

            if (userState.message) {
                toastMessage.value = userState.message
                return;
            }

            if (!userState.expiry) {
                updateError.value = {
                    code: "auth/invalid-auth-response",
                    message: "User response must have an expiry field"
                }
                return
            }

            interval.current = setInterval(() => {
                triggerUpdate()
                    .unwrap()
                    .then(result => user.value = result)
                    .catch(authUpdateError => {
                        user.value = undefined;
                        // @ts-expect-error interval by default is number
                        clearInterval(interval.current);
                        if ("data" in authUpdateError) {
                            updateError.value = {
                                code: "auth/firebase-credential-not-provided",
                                message: authUpdateError.data && (Object.values(authUpdateError.data).find(el => typeof el === "string") ?? authUpdateError.data)
                            }
                        } else if ("status" in authUpdateError) {
                            updateError.value = {
                                code: "auth/fetch-failed",
                                message: 'error' in authUpdateError ? authUpdateError.error : "Unexpected Error"
                            }
                        }
                    })
            }, ((userState.expiry * toMilliseconds) - restMilliseconds))

            user.value = userState;

            logOut.value = async () => {
                // @ts-expect-error interval by default is number
                await signOut(auth()).finally(() => clearInterval(interval.current));
                logOut.value = undefined
            }

            resolve()

        })
        , [])

    useEffect(() => {
        return () => {
            // @ts-expect-error interval by default is number
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
