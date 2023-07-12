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
    bodyAsBase64: true,
    acceptUsername: true,
    //hasToS: tc,
    keywoardRefreshTokenHeader: "TSESSION",
    signInMethods: [
        "google",
        "facebook",
        "twitter",
        "github",
        "microsoft"
    ]
})


const message: string = "Elije uno de los siguientes metodos para continuar."


const firebaseErrors = [
    {
        code: "*",
        message: "Lo sentimos, al parecer hubo un error, intentelo mas tarde."
    }
]

const App = () => {

    const {
        user,
        updateError,
        authManager,
        logOut
    } = useAuth<string>();

    console.log(updateError)
    console.log(user)
    console.log(logOut)


    const state = useSignal(false)

    return ( 
        <>
            { state.value &&
                <Auth isOpen={state} authManager={authManager} message={message}/>
            }
            {logOut &&
                <button onClick={logOut}>Click</button>
            }
            <button onClick={() => state.value = !state.value}>Click</button>
            
    
        </>
    )
}
 
export default App;