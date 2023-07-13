import { Modal, DotsLoader } from "../components";
import "../css/auth.scss"
import { IModalProp } from "../interfaces";
import { getLanguaje, getSignInMethod, parsefirebaseErrorCode } from "../core";
import { config } from "../config";
import { useForm } from "../hooks";
//import { useAppSelector } from "../store";
import { useEffect } from "react";
import { UserInfo, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services";
import { useSignal } from "@preact/signals-react";


export const AuthBase = ({ isOpen, message, authManager}: IModalProp) => {

    const { 
        form,
        radio,
        confirmTp,
        isLoading,
        handleError,
        handleSubmit,
        handleChange, 
        handlerRadio,
        handleSocialLogin,
        handleToken
    } = useForm(authManager, isOpen)

    
    const languaje = getLanguaje(config.languaje);

    const alreadyUser = useSignal<UserInfo & Record<"tokenId", string> | undefined>(undefined);

    
    useEffect(() => {
        const getUser = async () => {
            isLoading.value = true;
            let listener = onAuthStateChanged(auth(), async (user) => {
                if (user) {
                    
                    await user.getIdToken()
                        .then(tokenId => {
                            const providerData = user.providerData[0];
                            alreadyUser.value = {
                                ...providerData,
                                ["providerId"]: providerData.providerId.split(".")[0],
                                tokenId
                            }
                      
                        })
                        .finally(() => isLoading.value = false);               
                } 

                isLoading.value = false;

                listener()

            });
        }

        getUser();
        
    }, []);

    const handleLogOut = () => {
        signOut(auth()).finally(() => alreadyUser.value = undefined);
    }


    return (
        
        <Modal
            title={ languaje.logIn }
            closeAction={isOpen}
            message={isLoading.value ? <DotsLoader /> : message} >
                <div className='login-container'>
                    <div className="login">
                        <div>    
                            { 
                                getSignInMethod(config.signInMethods).map(
                                    ({ className, name, constName, icon }, index: number) => 
                                        <button key={index} onClick={(e) => handleSocialLogin(e, constName)} className={className}>
                                            { icon &&
                                                icon
                                            }
                                            {name}
                                        </button>
                                )
                            }
                            
                            { handleError.value.message &&
                                <span className="notify error">
                                    { config.firebaseErrorMessages
                                        ? parsefirebaseErrorCode(config.firebaseErrorMessages, handleError.value)
                                        : handleError.value.message
                                    }
                                </span>
                            }
                        </div>
                        <div>
                            <form className='email' onSubmit={handleSubmit} >
                        
                                { config.acceptUsername 
                                    ? 
                                        <>
                                            
                                            <input placeholder={`Email | ${languaje.username}`} required name="username" onChange={handleChange} value={form.value.username} type="text"></input>
                                        </>
                                    : 
                                        <>
                                            <input placeholder="Email" required name="email" onChange={handleChange} value={form.value.email} type="email"></input>
                                        </>
                                }                                                
                                <input placeholder={languaje.password} required name="password" onChange={handleChange} value={form.value.password} type="password"></input>
                                <button type='submit' className='email-login'>{ languaje.continue }</button>
                            </form>
                        </div>
                    </div>

                    { alreadyUser.value &&
                        <div className="user-already-loggued">
                            <label htmlFor="">
                                { languaje.continueAs } { alreadyUser.value.displayName }
                                
                                { alreadyUser.value.photoURL &&
                                    <img src={alreadyUser.value.photoURL} alt="user image" />
                                }
                                
                                <span>{ languaje.logguedWith } {alreadyUser.value.providerId}</span>
                            </label>
                            <div className="user-loggued-choice">
                                <button onClick={() => handleToken(alreadyUser.value?.tokenId ?? "")} className="choice-ok">
                                    Ok
                                </button>
                                <button onClick={handleLogOut} className="choice-not">
                                    { languaje.logOut }
                                </button>
                            </div>
                        </div>
                    }

                    { config.hasToS &&
                        <>
                            <label className='login-accept'>
                                <input onChange={handlerRadio} type="checkbox" checked={radio.value}></input>
                                { config.hasToS.label }
                            </label>
                            { confirmTp.value &&
                                    <span autoFocus className="notify error">
                                        { config.hasToS.errorLabel }
                                    </span>
                            }
                        </>
                    }
                </div>
        </Modal>
    );
}
 