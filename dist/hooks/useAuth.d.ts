import { Signal } from "@preact/signals-react";
import { IHandleErrorData, IUser } from "../interfaces";
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import { MutationDefinition, BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
export declare const useAuth: <T = any>() => {
    user: IUser<T> | undefined;
    updateError: IHandleErrorData | undefined;
    logOut: (() => void) | undefined;
    authManager: (userState: IUser, toastMessage: Signal<string | undefined>, triggerUpdate: MutationTrigger<MutationDefinition<void, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>, never, IUser<any>, "api">>) => Promise<void>;
};
