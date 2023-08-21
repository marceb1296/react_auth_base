import { ILanguages } from "../interfaces"

const languages: Record<string, ILanguages> = {
    es: {
        logIn: "Iniciar sesión",
        username: "Usuario",
        password: "Contraseña",
        continue: "Continuar",
        continueAs: "Continuar como:",
        loggedWith: "Logueado con",
        logOut: "Desloguearse",
        forgotPassword: "Recuperar contraseña"
    },
    en: {
        logIn: "Log In",
        username: "Username",
        password: "Password",
        continue: "Continue",
        continueAs: "Continue as:",
        loggedWith: "Logged with",
        logOut: "Log Out",
        forgotPassword: "Password Recovery"
    }
}

export const getLanguage = (lan: string) => languages[lan]