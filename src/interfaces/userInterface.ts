export interface IUser<T = any> {
    user: T;
    isAuthenticated: boolean;
    token: string | undefined;
    refresh_token: string | undefined;
    expiry: number | undefined;
    message?: string
}
