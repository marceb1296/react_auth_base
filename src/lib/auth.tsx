import { Modal, DotsLoader } from "../components";
import "../css/auth.scss"
import { IHandleErrorData, IHasTos, IModalProp, IUserAlreadyLogged } from "../interfaces";
import { getLanguage, getSignInMethod, parseFirebaseErrorCode } from "../core";
import { config } from "../config";
import { useForm } from "../hooks";
import { useContext, useEffect } from "react";
import { UserInfo, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../services";
import { useSignal } from "@preact/signals-react";
import { ModalContext } from "../context";


export const AuthBase = () => {

    const { closeAction, authManager, isOpen } = useContext(ModalContext);

    const {
        form,
        radio,
        confirmTp,
        isLoading,
        handleError,
        handleSubmit,
        handleChange,
        handleRadio,
        handleSocialLogin,
        handleToken
    } = useForm(authManager, closeAction)


    const language = getLanguage(config.language);

    const alreadyUser = useSignal<UserInfo & Record<"tokenId", string> | undefined>(undefined);

    useEffect(() => {
        if (!isOpen) handleError.value = {} as IHandleErrorData
    }, [isOpen]);

    useEffect(() => {

        if (isOpen) {

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
        }

    }, [isOpen]);


    return (

        <Modal title={language.logIn} isLoading={isLoading.value}>
            <div className='login-container'>
                <div className="login">
                    <div>
                        {
                            getSignInMethod(config.signInMethods).map(
                                ({ className, name, constName, icon }, index: number) =>
                                    <button key={index} onClick={(e) => handleSocialLogin(e, constName)} className={className}>
                                        {icon &&
                                            icon
                                        }
                                        {name}
                                    </button>
                            )
                        }

                        {handleError.value.message &&
                            <span className="notify error">
                                {config.firebaseErrorMessages
                                    ? parseFirebaseErrorCode(config.firebaseErrorMessages, handleError.value)
                                    : handleError.value.message
                                }
                            </span>
                        }
                    </div>
                    <div>
                        <form className='email' onSubmit={handleSubmit} >

                            {config.acceptUsername
                                ?
                                <>

                                    <input placeholder={`Email | ${language.username}`} required name="username" onChange={handleChange} value={form.value.username} type="text"></input>
                                </>
                                :
                                <>
                                    <input placeholder="Email" required name="email" onChange={handleChange} value={form.value.email} type="email"></input>
                                </>
                            }
                            <input placeholder={language.password} required name="password" onChange={handleChange} value={form.value.password} type="password"></input>
                            <span className="forgot-password">{language.forgotPassword}</span>
                            <button type='submit' className='email-login'>{language.continue}</button>
                        </form>
                    </div>
                </div>

                <UserAlreadyLogged alreadyUser={alreadyUser} language={language} handleToken={handleToken} />

                <HasToS confirmTp={confirmTp.value} handleRadio={handleRadio} radioValue={radio.value} />

            </div>
        </Modal>
    );
}



const UserAlreadyLogged = ({ alreadyUser, language, handleToken }: IUserAlreadyLogged) => {

    const handleLogOut = () => {
        signOut(auth()).finally(() => alreadyUser.value = undefined);
    }

    return (
        <>
            {alreadyUser.value &&
                <section className="user-already-logged">
                    <p>
                        {language.continueAs} {alreadyUser.value.displayName}

                        {alreadyUser.value.photoURL &&
                            <img src={alreadyUser.value.photoURL} alt="user image" />
                        }

                        <span>{language.loggedWith} {alreadyUser.value.providerId}</span>
                    </p>
                    <div className="user-logged-choice">
                        <button onClick={() => handleToken(alreadyUser.value?.tokenId ?? "")} className="choice-ok">
                            Ok
                        </button>
                        <button onClick={handleLogOut} className="choice-not">
                            {language.logOut}
                        </button>
                    </div>
                </section>
            }
        </>
    )
}

const HasToS = ({ confirmTp, handleRadio, radioValue }: IHasTos) => {
    return (
        <section>
            {config.hasToS &&
                <>
                    <label className='login-accept'>
                        <input onChange={handleRadio} type="checkbox" checked={radioValue}></input>
                        {config.hasToS.label}
                    </label>
                    {confirmTp &&
                        <span autoFocus className="notify error">
                            {config.hasToS.errorLabel}
                        </span>
                    }
                </>
            }
        </section>
    )
}