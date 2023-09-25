export declare const reducer: import("redux").Reducer<import("redux").CombinedState<{
    userReducer: import("../interfaces").IUser<any>;
    api: import("@reduxjs/toolkit/query").CombinedState<{
        login: import("@reduxjs/toolkit/query").MutationDefinition<import("../interfaces").ILoginForm, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, never, import("../interfaces").IUser<any>, "api">;
        signIn: import("@reduxjs/toolkit/query").MutationDefinition<import("../interfaces").SignInForm, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, never, import("../interfaces").IUser<any>, "api">;
        updateLogin: import("@reduxjs/toolkit/query").MutationDefinition<void, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, never, import("../interfaces").IUser<any>, "api">;
        passwordReset: import("@reduxjs/toolkit/query").MutationDefinition<Record<"email", string>, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError>, never, void, "api">;
    }, never, "api">;
}>, import("redux").AnyAction>;
