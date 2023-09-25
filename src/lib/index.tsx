import { AuthBase } from "./auth";
import { store } from "../store"
import { Provider } from 'react-redux';
import { IModalProp } from "../interfaces";
import { validateFirebaseConfig } from "../services";
import { ModalContext } from "../context";


export const Auth = ({ message, authManager }: IModalProp) => {

    if (!validateFirebaseConfig()) {
        return (
            <h1>Error: Missing firebaseConfig in setConfig</h1>
        );
    }


    return (
        <Provider store={store}>
            <ModalContext.Provider value={{ message, authManager }}>
                <AuthBase />
            </ModalContext.Provider>
        </Provider>
    )
}

export { useAuth } from "../hooks";
export { setConfig } from '../config';