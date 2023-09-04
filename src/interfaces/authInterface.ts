export interface ILogin {
    email?: string;
    password?: string;
    token?: string;
}

export interface ILoginForm {
    email?: string;
    username?: string;
    password?: string
    encodedBody?: string;
    token?: string
}

type Login = {
    email: string;
    username: string;
    password: string;
}

export type SignInFormProps = {
    username: string;
    email: string;
    password1: string;
    password2: string;
}

export interface FormProps {
    login: Login;
    signIn: SignInFormProps;
}

export type SignInForm = {
    body: SignInFormProps | string;
    encodedBody: boolean;
}

export enum SECTION {
    LOGIN = "login",
    SIGN_IN = "signIn"
}