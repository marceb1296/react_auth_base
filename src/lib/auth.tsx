import { useContext, useEffect, useRef } from "react";
import { Modal } from "../components";
import "../css/auth.scss"
import { IHandleErrorData, IHasTos, IUserAlreadyLogged, SocialLoginEmailProps, SocialLoginProps } from "../interfaces";
import { getLanguage, getSignInMethod, parseFirebaseErrorCode } from "../core";
import { config } from "../config";
import { useForm } from "../hooks";
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

    const forgotPassword = useSignal(false);

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

        <Modal
            title={language.logIn}
            isLoading={isLoading.value}
            scrollPosition={forgotPassword}
            language={language}
        >
            <div className='login-container'>
                <div className="login">
                    <SocialLogin handleError={handleError} handleSocialLogin={handleSocialLogin} />
                    <SocialLoginEmail
                        forgotPassword={forgotPassword}
                        form={form}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        language={language}
                    />
                </div>

                <UserAlreadyLogged alreadyUser={alreadyUser} language={language} handleToken={handleToken} />

                <HasToS confirmTp={confirmTp.value} handleRadio={handleRadio} radioValue={radio.value} />

            </div>
        </Modal>
    );
}


const SocialLogin = ({ handleSocialLogin, handleError }: SocialLoginProps) => {
    return (
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
    )
}


const SocialLoginEmail = ({
    handleSubmit,
    language,
    handleChange,
    form,
    forgotPassword
}: SocialLoginEmailProps) => {

    const loginView = useSignal(true);
    const handleView = useRef<HTMLFormElement>(null);


    useEffect(() => {
        if (handleView.current) {
            const elementWidth = handleView.current.offsetWidth
            handleView.current.scrollTo(loginView.value ? 0 : elementWidth, 0)
        }
    }, [loginView.value])


    return (
        <div>
            <form ref={handleView} className='form-email mandatory-scroll-snapping' onSubmit={handleSubmit} >
                <fieldset>
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
                    <span onClick={() => forgotPassword.value = true} className="forgot-password">
                        {language.forgotPassword}
                    </span>
                    <button type='submit' className='email-login'>{language.logIn}</button>
                    <span onClick={() => loginView.value = false} className="sign-in">
                        {language.signIn}
                    </span>
                </fieldset>
                <fieldset>
                    <input placeholder="Email" required name="username" onChange={handleChange} value={form.value.username} type="text"></input>

                    <input placeholder={`${language.username}`} required name="username" onChange={handleChange} value={form.value.username} type="text"></input>

                    <input placeholder={language.password} required name="password" onChange={handleChange} value={form.value.password} type="password"></input>

                    <input placeholder={language.password} required name="password1" onChange={handleChange} value={form.value.password1} type="password"></input>

                    <button type='submit' className='email-login'>{language.signIn}</button>

                    <span onClick={() => loginView.value = true} className="sign-in">
                        {language.logIn}
                    </span>
                </fieldset>
            </form>
        </div>
    )
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