import { ILanguajes } from "../interfaces"

const languajes: Record<string, ILanguajes> = {
    es: {
        logIn: "Iniciar sesion",
        username: "Usuario",
        password: "Contraseña",
        continue: "Continuar",
        continueAs: "Continuar como:",
        logguedWith: "Logueado con",
        logOut: "Desloguearse"

    },
    en: {
        logIn: "Log In",
        username: "Username",
        password: "Password",
        continue: "Continue",
        continueAs: "Continue as:",
        logguedWith: "Loggued with",
        logOut: "Log Out"

    }
}

export const getLanguaje = (lan: string) => languajes[lan]