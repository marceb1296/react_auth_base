import { useSignal } from "@preact/signals-react";
import React from "react";
import { Auth } from "./src/lib";
import { setConfig } from "./src/config";
import { useAuth } from './src/hooks/useAuth';
import { firebaseConfig } from './firebase.config';


const tc = {
    label: <span></span>,
    errorLabel: "Para continuar necesitas confirmar el haber leído los Términos de servicio y la Política de privacidad de este sitio."
}


setConfig({
    firebaseConfig,
    acceptUsername: true,
    hasToS: {
        label: (closeAction) => <p>Lorem ipsum dolor sit <a onClick={closeAction}>Cerrar</a> amet consectetur adipisicing elit. Rem culpa optio obcaecati fugiat, aut a. Voluptatibus atque ullam laudantium,</p>,
        errorLabel: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore consectetur error, possimus deleniti repellat ratione fugiat fuga reprehenderit vel expedita id soluta. Voluptates quam sit ipsum repellat praesentium in fugiat?"
    },
    keyword: "TSESSION",
    keywordRefreshTokenHeader: "TSESSION",
    signInMethods: [
        "google",
        "facebook",
        "twitter",
        "microsoft",
        "github"

    ],
    //bodyAsBase64: true,
    urlLoginForEmailOrUser: "log-in"
})


const message: string = "Pick one of the following methods to continue."


const firebaseErrors = [
    {
        code: "*",
        message: "Lo sentimos, al parecer hubo un error, inténtelo mas tarde."
    }
]

const App = () => {

    const {
        user,
        updateError,
        authManager,
        logOut
    } = useAuth<string>();

    const state = useSignal(false)

    return (
        <>

            <Auth isOpen={state.value} closeAction={state} authManager={authManager} message={message} />

            {logOut &&
                <button onClick={logOut}>Logout</button>
            }
            <button onClick={() => state.value = !state.value}>Click</button>


        </>
    )
}

export default App;