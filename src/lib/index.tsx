import { AuthBase } from "./auth";
import { store } from "../store"
import { Provider } from 'react-redux';
import { IModalProp } from "../interfaces";
import { validateFirebaseConfig } from "../services";
import { ModalContext } from "../context";


export const Auth = ({ isOpen, closeAction, message, authManager }: IModalProp) => {

    if (!validateFirebaseConfig()) {
        return <dialog open>
            <p>Error: Missing firebaseConfig in setConfig</p>
        </dialog>;
    }


    return (
        <Provider store={store}>
            <ModalContext.Provider value={{ isOpen, closeAction, message, authManager }}>
                <AuthBase />
            </ModalContext.Provider>
        </Provider>
    )
}

export { useAuth } from "../hooks";
export { setConfig } from '../config';