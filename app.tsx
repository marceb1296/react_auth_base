import { useSignal } from "@preact/signals-react";
import React, { useEffect } from "react";
import { Auth } from "./src/lib";
import { setConfig } from "./src/config";
import { useAuth } from './src/hooks/useAuth';
import { firebaseConfig } from './firebase.config';
import { Outlet, useSearchParams, RouterProvider, createBrowserRouter, useNavigate, useOutletContext } from "react-router-dom";
import { IModalProp, TAuthManager } from './src/interfaces';


//#region components

//#region react_auth_base settings

const tc = {
    label: <span></span>,
    errorLabel: "Para continuar necesitas confirmar el haber leído los Términos de servicio y la Política de privacidad de este sitio."
}


setConfig({
    firebaseConfig,
    acceptUsername: true,
    hasToS: {
        label: <p>Lorem ipsum dolor sit <a>Cerrar</a> amet consectetur adipisicing elit. Rem culpa optio obcaecati fugiat, aut a. Voluptatibus atque ullam laudantium,</p>,
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
    urlLoginForEmailOrUser: "log-in",
    endpoint: "https://mhcode.dev/api/auth/"
})


const message: string = "Pick one of the following methods to continue."


const firebaseErrors = [
    {
        code: "*",
        message: "Lo sentimos, al parecer hubo un error, inténtelo mas tarde."
    }
]

//#endregion

const Root = () => {

    const navigate = useNavigate()

    // react_auth_base hook
    const {
        user,
        updateError,
        authManager,
        logOut
    } = useAuth<string>();


    useEffect(() => {
        // you can pass a next query parameter to react_auth_base to redirect after login
        if (!user) navigate("/auth?next=/profile")
    }, []);

    return (
        <main style={{
            display: "flex",
            flexDirection: "column",
            justifyItems: "center"
        }}>
            <h1 style={{
                textAlign: "center"
            }}>My main page</h1>
            {/* user can logout from firebase */}
            {logOut &&
                <button onClick={logOut}>Cerrar sesión</button>
            }

            {/**
             * When an error occurs, will be available this properties
             * 
             * code: string;
             * message: string;
             * email?: string;
             * 
             * use in any action, such as modal, toast...
             */}
            {updateError &&
                <span>{updateError.message}</span>
            }

            {/* we pass authManager as context in Outlet or use useContext */}
            <Outlet context={{ authManager }} />
        </main>
    )
}


const Profile = () => {

    /**
     * This should be a protected route
     * 
     * use loader or navigate to redirect to login
     */
    return (
        <h1>User Profile</h1>
    )
}

const App = () => {

    const { authManager } = useOutletContext<{ authManager: IModalProp["authManager"] }>();
    
    const [urlParams] = useSearchParams();
    const navigate = useNavigate();
    
    const onSuccessFn = () => {
        const getNextPath = urlParams.get("next")
        if (getNextPath) {
            navigate(getNextPath)
        }
    }
    
    return (
        <div className="">
            <Auth authManager={authManager} message={message} onSuccessFn={onSuccessFn}/>
        </div>
    )
}

//#endregion


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "auth",
                element: <App />,
            },
            {
                path: "profile",
                element: <Profile />
            }
        ],
    },

], {
});

const Main = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Main