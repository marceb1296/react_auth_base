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

    const forgotPassword = useSignal(false);
    const toastMessage = useSignal<string | undefined>(undefined)
    const alreadyUser = useSignal<UserInfo & Record<"tokenId", string> | undefined>(undefined);

    const { closeAction, authManager, isOpen } = useContext(ModalContext);
    const language = getLanguage(config.language);

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
    } = useForm(authManager, closeAction, language, toastMessage)




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

    useEffect(() => {

    }, []);


    return (
        <Modal
            title={language.logIn}
            isLoading={isLoading.value}
            scrollPosition={forgotPassword}
            language={language}
            toastMessage={toastMessage}
        >
            <div className='login-container'>
                <div className="login">
                    <SocialLogin handleSocialLogin={handleSocialLogin} />
                    <SocialLoginEmail
                        forgotPassword={forgotPassword}
                        form={form}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        language={language}
                    />
                </div>
                {handleError.value.message &&
                    <span autoFocus={true} className="notify error">
                        {config.firebaseErrorMessages
                            ? parseFirebaseErrorCode(config.firebaseErrorMessages, handleError.value)
                            : handleError.value.message
                        }
                    </span>
                }

                <UserAlreadyLogged alreadyUser={alreadyUser} language={language} handleToken={handleToken} />

                <HasToS confirmTp={confirmTp.value} handleRadio={handleRadio} radioValue={radio.value} />

            </div>
        </Modal>
    );
}


const SocialLogin = ({ handleSocialLogin }: SocialLoginProps) => {
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
            <section ref={handleView} className='form-email mandatory-scroll-snapping'>
                <form className="form-field" autoComplete="on" data-section="login" onSubmit={handleSubmit}>
                    {config.acceptUsername
                        ?
                        <>
                            <input required data-section="login" autoComplete="username" placeholder={`Email | ${language.username}`} name="username" onChange={handleChange} value={form.value.login.username} type="text"></input>
                        </>
                        :
                        <>
                            <input required data-section="login" autoComplete="email" placeholder="Email" name="email" onChange={handleChange} value={form.value.login.email} type="email"></input>
                        </>
                    }

                    <input required data-section="login" autoComplete="current-password" placeholder={language.password} name="password" onChange={handleChange} value={form.value.login.password} type="password"></input>

                    <span onClick={() => forgotPassword.value = true} className="forgot-password">
                        {language.forgotPassword}
                    </span>

                    <button className='email-login'>{language.logIn}</button>

                    <span onClick={() => loginView.value = false} className="form-action-change">
                        {language.signIn}
                    </span>
                </form>
                <form className="form-field" autoComplete="on" data-section="signIn" onSubmit={handleSubmit}>
                    <input required data-section="signIn" autoComplete="off" placeholder="Email" name="username" onChange={handleChange} value={form.value.signIn.username} type="email"></input>

                    <input required data-section="signIn" autoComplete="off" placeholder={`${language.username}`} name="email" onChange={handleChange} value={form.value.signIn.email} type="text"></input>

                    <input required data-section="signIn" autoComplete="off" placeholder={language.password} name="password" onChange={handleChange} value={form.value.signIn.password} type="password"></input>

                    <input required data-section="signIn" autoComplete="off" placeholder={language.confirm_password} name="confirmPassword" onChange={handleChange} value={form.value.signIn.confirmPassword} type="password"></input>

                    <button className='email-login'>{language.signIn}</button>

                    <span onClick={() => loginView.value = true} className="form-action-change">
                        {language.logIn}
                    </span>
                </form>
            </section>
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

    const focusError = useRef<HTMLSpanElement>(null);

    useEffect(() => {

        if (confirmTp && focusError.current) {
            focusError.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [confirmTp]);

    return (
        <section>
            {config.hasToS &&
                <>
                    <label className='login-accept'>
                        <input onChange={handleRadio} type="checkbox" checked={radioValue}></input>
                        {config.hasToS.label}
                    </label>
                    {confirmTp &&
                        <span ref={focusError} className="notify error">
                            {config.hasToS.errorLabel}
                        </span>
                    }
                </>
            }
        </section>
    )
}