import { TypedUseSelectorHook } from 'react-redux';
export declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<import("redux").EmptyObject & {
    userReducer: import("../interfaces").IUser<any>;
    api: import("@reduxjs/toolkit/query").CombinedState<{
        login: import("@reduxjs/toolkit/query").MutationDefinition<import("../interfaces").ILoginForm, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, never, import("../interfaces").IUser<any>, "api">;
        signIn: import("@reduxjs/toolkit/query").MutationDefinition<import("../interfaces").SignInForm, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, never, import("../interfaces").IUser<any>, "api">;
        updateLogin: import("@reduxjs/toolkit/query").MutationDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, never, import("../interfaces").IUser<any>, "api">;
        passwordReset: import("@reduxjs/toolkit/query").MutationDefinition<Record<"email", string>, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, never, void, "api">;
    }, never, "api">;
}, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<[import("@reduxjs/toolkit").ThunkMiddleware<import("redux").CombinedState<{
    userReducer: import("../interfaces").IUser<any>;
    api: import("@reduxjs/toolkit/query").CombinedState<{
        login: import("@reduxjs/toolkit/query").MutationDefinition<import("../interfaces").ILoginForm, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, never, import("../interfaces").IUser<any>, "api">;
        signIn: import("@reduxjs/toolkit/query").MutationDefinition<import("../interfaces").SignInForm, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, never, import("../interfaces").IUser<any>, "api">;
        updateLogin: import("@reduxjs/toolkit/query").MutationDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, never, import("../interfaces").IUser<any>, "api">;
        passwordReset: import("@reduxjs/toolkit/query").MutationDefinition<Record<"email", string>, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, never, void, "api">;
    }, never, "api">;
}>, import("redux").AnyAction>, import("redux").Middleware<{}, import("@reduxjs/toolkit/query").RootState<{
    login: import("@reduxjs/toolkit/query").MutationDefinition<import("../interfaces").ILoginForm, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, never, import("../interfaces").IUser<any>, "api">;
    signIn: import("@reduxjs/toolkit/query").MutationDefinition<import("../interfaces").SignInForm, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, never, import("../interfaces").IUser<any>, "api">;
    updateLogin: import("@reduxjs/toolkit/query").MutationDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, never, import("../interfaces").IUser<any>, "api">;
    passwordReset: import("@reduxjs/toolkit/query").MutationDefinition<Record<"email", string>, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, never, void, "api">;
}, string, "api">, import("@reduxjs/toolkit").ThunkDispatch<any, any, import("redux").AnyAction>>]>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export declare const useAppDispatch: () => AppDispatch;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
