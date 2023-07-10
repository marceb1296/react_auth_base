import { AuthBase } from "./auth";
import { store } from "../store"
import { Provider } from 'react-redux';
import { IModalProp } from "../interfaces";
import { validateFirebaseConfig } from "../services";


export const Auth = ({ isOpen, message, authManager}: IModalProp) => {

    if (!validateFirebaseConfig()) {
        return <div>Error: Missing firebaseConfig in setConfig</div>;
    }
    
    
    return (  
        <Provider store={store}>
            <AuthBase isOpen={isOpen} authManager={authManager} message={message}/>
        </Provider>
    )
}

export { useAuth } from "../hooks";
export { setConfig} from '../config';