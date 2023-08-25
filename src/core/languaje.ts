import { ILanguages } from "../interfaces"

const languages: Record<string, ILanguages> = {
    es: {
        logIn: "Iniciar sesión",
        username: "Usuario",
        password: "Contraseña",
        continue: "Continuar",
        submit: "Enviar",
        continueAs: "Continuar como:",
        loggedWith: "Logueado con",
        logOut: "Desloguearse",
        forgotPassword: "Recuperar contraseña",
        forgotPasswordLabel: "Enviaremos instrucciones para restablecer la contraseña al correo electrónico introducido.",
        signIn: "Crear cuenta"
    },
    en: {
        logIn: "Log In",
        username: "Username",
        password: "Password",
        continue: "Continue",
        submit: "Submit",
        continueAs: "Continue as:",
        loggedWith: "Logged with",
        logOut: "Log Out",
        forgotPassword: "Password Recovery",
        forgotPasswordLabel: "We will send instructions to reset the password to the entered email.",
        signIn: "Create account"
    }
}

export const getLanguage = (lan: string) => languages[lan]