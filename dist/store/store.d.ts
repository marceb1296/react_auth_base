export declare const reducer: import("redux").Reducer<import("redux").CombinedState<{
    userReducer: import("../interfaces").IUser<any>;
    api: import("@reduxjs/toolkit/dist/query/core/apiState").CombinedState<{
        login: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("../interfaces").ILoginForm, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError>, never, import("../interfaces").IUser<any>, "api">;
        signIn: import("@reduxjs/toolkit/dist/query").MutationDefinition<import("../interfaces").SignInForm, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError>, never, import("../interfaces").IUser<any>, "api">;
        updateLogin: import("@reduxjs/toolkit/dist/query").MutationDefinition<void, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError>, never, import("../interfaces").IUser<any>, "api">;
        passwordReset: import("@reduxjs/toolkit/dist/query").MutationDefinition<Record<"email", string>, import("@reduxjs/toolkit/dist/query").BaseQueryFn<string | import("@reduxjs/toolkit/dist/query").FetchArgs, unknown, import("@reduxjs/toolkit/dist/query").FetchBaseQueryError>, never, void, "api">;
    }, never, "api">;
}>, import("redux").AnyAction>;
