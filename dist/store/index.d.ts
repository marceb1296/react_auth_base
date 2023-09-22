import { TypedUseSelectorHook } from 'react-redux';
export declare const store: import("@reduxjs/toolkit/dist/configureStore").ToolkitStore<import("redux").EmptyObject & {
    userReducer: import("../interfaces").IUser<any>;
    api: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        login: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("../interfaces").ILoginForm, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError>, never, import("../interfaces").IUser<any>, "api">;
        signIn: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("../interfaces").SignInForm, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError>, never, import("../interfaces").IUser<any>, "api">;
        updateLogin: import("@reduxjs/toolkit/dist/query").MutationDefinition<void, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError>, never, import("../interfaces").IUser<any>, "api">;
        passwordReset: import("@reduxjs/toolkit/dist/query").MutationDefinition<Record<"email", string>, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError>, never, void, "api">;
    }, never, "api">;
}, import("redux").AnyAction, import("@reduxjs/toolkit").MiddlewareArray<[import("@reduxjs/toolkit").ThunkMiddleware<import("redux").CombinedState<{
    userReducer: import("../interfaces").IUser<any>;
    api: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        login: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("../interfaces").ILoginForm, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError>, never, import("../interfaces").IUser<any>, "api">;
        signIn: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("../interfaces").SignInForm, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError>, never, import("../interfaces").IUser<any>, "api">;
        updateLogin: import("@reduxjs/toolkit/dist/query").MutationDefinition<void, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError>, never, import("../interfaces").IUser<any>, "api">;
        passwordReset: import("@reduxjs/toolkit/dist/query").MutationDefinition<Record<"email", string>, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError>, never, void, "api">;
    }, never, "api">;
}>, import("redux").AnyAction>, import("redux").Middleware<{}, import("@reduxjs/toolkit/dist/query/core/apiState").RootState<{
    login: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("../interfaces").ILoginForm, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError>, never, import("../interfaces").IUser<any>, "api">;
    signIn: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("../interfaces").SignInForm, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError>, never, import("../interfaces").IUser<any>, "api">;
    updateLogin: import("@reduxjs/toolkit/dist/query").MutationDefinition<void, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError>, never, import("../interfaces").IUser<any>, "api">;
    passwordReset: import("@reduxjs/toolkit/dist/query").MutationDefinition<Record<"email", string>, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError>, never, void, "api">;
}, string, "api">, import("@reduxjs/toolkit").ThunkDispatch<any, any, import("redux").AnyAction>>]>>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export declare const useAppDispatch: () => AppDispatch;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
