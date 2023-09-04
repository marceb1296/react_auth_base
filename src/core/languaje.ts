import { ILanguages } from "../interfaces"

const languages: Record<string, ILanguages> = {
    es: {
        logIn: "Iniciar sesión",
        username: "Usuario",
        password: "Contraseña",
        confirm_password: "Confirmar contraseña",
        continue: "Continuar",
        submit: "Enviar",
        continueAs: "Continuar como:",
        loggedWith: "Logueado con",
        logOut: "Desloguearse",
        forgotPassword: "Recuperar contraseña",
        forgotPasswordLabel: "Email enviado correctamente.",
        signIn: "Crear cuenta",
        passwordNotMatch: "Las contraseñas no coinciden",
        minLength: "La contraseña debe contener mínimo 8 caracteres"
    },
    en: {
        logIn: "Log In",
        username: "Username",
        password: "Password",
        confirm_password: "Confirm Password",
        continue: "Continue",
        submit: "Submit",
        continueAs: "Continue as:",
        loggedWith: "Logged with",
        logOut: "Log Out",
        forgotPassword: "Password Recovery",
        forgotPasswordLabel: "Email sended successfully.",
        signIn: "Create account",
        passwordNotMatch: "Passwords do not match",
        minLength: "Passwords should contain a minimum of 8 characters"
    }
}

export const getLanguage = (lan: string) => languages[lan]