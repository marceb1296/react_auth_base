import { Signal, batch, useSignal } from "@preact/signals-react";
import { config } from "../config";
import { FormProps, IHandleErrorData, ILanguages, ILoginForm, IUser, SECTION, SignInFormProps, TAuthManager, THandleAction } from "../interfaces";
import { GoogleAuthProvider, UserCredential, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider, OAuthProvider, signOut } from 'firebase/auth';
import { signInWithFacebookPopup, signInWithGooglePopup, signInWithTwitterPopup, signInWithGitHubPopup, signInWithMicrosoftPopup } from "../authMethods";
import { auth, useLoginMutation, useSignInMutation, useUpdateLoginMutation } from "../services";
import { IS_FACEBOOK, IS_GITHUB, IS_GOOGLE, IS_MICROSOFT, IS_TWITTER } from "../const";


const toMilliseconds: number = 1000;
const restMilliseconds: number = 5000;

const initialValueForm: FormProps = {
    login: {
        email: "",
        password: "",
        username: ""
    },
    signIn: {
        email: "",
        username: "",
        password1: "",
        password2: ""

    }
}

const passwordValidation = (signInForm: FormProps[SECTION.SIGN_IN], language: ILanguages) => {
    let errors = ""

    const { password1, password2 } = signInForm;

    if (password1.length > 0 && password1.length < 8) {
        errors = language.minLength
    } else if (password2.length > 0 && password2 !== password1) {
        errors = language.passwordNotMatch
    }

    return errors
}


export const useForm = (authManager: TAuthManager, handleClose: THandleAction<boolean>, language: ILanguages, toastMessage: Signal<string | undefined>) => {

    const [triggerAuth] = useLoginMutation();
    const [triggerSignIn] = useSignInMutation();
    const [triggerUpdate] = useUpdateLoginMutation();


    const form = useSignal(initialValueForm)


    const radio = useSignal(false);
    const confirmTp = useSignal(false);
    const isLoading = useSignal(false);
    const handleError = useSignal({} as IHandleErrorData);


    const handleRadio = () => {
        batch(() => {
            radio.value = !radio.value;

            if (confirmTp.value) {
                confirmTp.value = !confirmTp.value
            }
        })
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = e;

        const section = target.getAttribute("data-section") as SECTION ?? SECTION.LOGIN;

        form.value = {
            ...form.value,
            [section]: {
                ...form.value[section],
                [target.name]: target.value
            }
        }

        if (section === SECTION.SIGN_IN) {

            const error = passwordValidation(form.value[section], language)

            if (error) {
                handleError.value = {
                    code: "sign-in/password",
                    message: error
                }
            } else {
                handleError.value = {} as IHandleErrorData
            }
        }

    }


    const handleSubmitUserAlreadyLogged = (tokenId: string) => {

        if (config.hasToS && !radio.value) {
            confirmTp.value = true
            return
        }

        isLoading.value = true

        handleToken(
            tokenId,
            () => isLoading.value = false
        )
    }


    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault();

        handleError.value = {} as IHandleErrorData;

        if (config.hasToS && !radio.value) {
            confirmTp.value = true
            return
        }

        if (isLoading.value) return
        isLoading.value = true

        const section = e.currentTarget.getAttribute("data-section") as SECTION ?? SECTION.LOGIN;

        let formObj: ILoginForm = {}

        if (section === SECTION.LOGIN) {


            if (config.acceptUsername) {
                formObj = {
                    username: form.value[section].username,
                    password: form.value[section].password
                }
            } else {
                formObj = {
                    email: form.value[section].email,
                    password: form.value[section].password
                }
            }

            if (config.bodyAsBase64) {
                const body = Object.entries(formObj).map(([key, value]) => `${key}=${value}`).join("&")
                const encodedBody = btoa(body);

                formObj = {
                    encodedBody
                }
            }

            triggerAuth(formObj)
                .unwrap()
                .then(handleAuthManager)
                .catch(error => {
                    if ("data" in error) {
                        handleError.value = {
                            code: "auth/firebase-credential-not-provided",
                            message: error.data && (Object.values(error.data).find(el => typeof el === "string") ?? error.data)
                        }
                    } else if ("status" in error) {
                        handleError.value = {
                            code: "auth/fetch-failed",
                            message: 'error' in error ? error.error : "Unexpected Error"
                        }
                    }
                })
                .finally(() => isLoading.value = false);

        } else if (section === SECTION.SIGN_IN) {

            let body: SignInFormProps | string = form.value[section];

            if (config.bodyAsBase64) {
                const bodyAsString = Object.entries(body).map(([key, value]) => `${key}=${value}`).join("&")
                body = btoa(bodyAsString);
            }

            triggerSignIn({
                body,
                encodedBody: config.bodyAsBase64
            })
                .unwrap()
                .then(handleAuthManager)
                .catch(error => {
                    if ("data" in error) {
                        handleError.value = {
                            code: "auth/firebase-credential-not-provided",
                            message: error.data && (Object.values(error.data).find(el => typeof el === "string") ?? error.data)
                        }
                    } else if ("status" in error) {
                        handleError.value = {
                            code: "auth/fetch-failed",
                            message: 'error' in error ? error.error : "Unexpected Error"
                        }
                    }
                })
                .finally(() => isLoading.value = false);
        }



    }


    const handleAuthManager = (userState: IUser) => {
        authManager(async (user, interval, updateError, logOut) => {
            // @ts-expect-error interval by default is number
            clearInterval(interval.current)
            interval.current = undefined

            if (userState.message) {
                toastMessage.value = userState.message
                return;
            }

            interval.current = setInterval(() => {
                triggerUpdate()
                    .unwrap()
                    .then(result => user.value = result)
                    .catch(authUpdateError => {
                        user.value = undefined;
                        // @ts-expect-error interval by default is number
                        clearInterval(interval.current);
                        if ("data" in authUpdateError) {
                            updateError.value = {
                                code: "auth/firebase-credential-not-provided",
                                message: authUpdateError.data && (Object.values(authUpdateError.data).find(el => typeof el === "string") ?? authUpdateError.data)
                            }
                        } else if ("status" in authUpdateError) {
                            updateError.value = {
                                code: "auth/fetch-failed",
                                message: 'error' in authUpdateError ? authUpdateError.error : "Unexpected Error"
                            }
                        }
                    })
            }, ((userState.expiry! * toMilliseconds) - restMilliseconds))

            user.value = userState;

            logOut.value = async () => {
                // @ts-expect-error interval by default is number
                await signOut(auth()).finally(() => clearInterval(interval.current));
                logOut.value = undefined
            }

        });

        if (userState.message) return

        if (typeof handleClose === "function") {
            handleClose(prev => !prev)
        } else {
            handleClose.value = !handleClose.value
        }

    }


    const handleToken = async (token: string, finallyFn?: () => void) => {

        triggerAuth({ token })
            .unwrap()
            .then(handleAuthManager)
            .catch(error => {
                if ("data" in error) {
                    handleError.value = {
                        code: "auth/firebase-credential-not-provided",
                        message: error.data && (Object.values(error.data).find(el => typeof el === "string") ?? error.data)
                    }
                } else if ("status" in error) {
                    handleError.value = {
                        code: "auth/fetch-failed",
                        message: 'error' in error ? error.error : "Unexpected Error"
                    }
                }
            }).finally(finallyFn)
    }


    const handleSocialLogin = async (loginType: string) => {

        if (config.hasToS && !radio.value) {
            confirmTp.value = true;
            return;
        }

        if (isLoading.value) return;
        isLoading.value = true


        switch (loginType) {
            case IS_GOOGLE:

                await signInWithGooglePopup(handleError).then(
                    async (res: UserCredential | void) => {
                        if (res) {
                            const credential = GoogleAuthProvider.credentialFromResult(res);
                            if (credential === null) {
                                handleError.value = {
                                    code: "response/empty-credentials",
                                    message: "Firebase: Unavailable to get credentials"
                                };
                            };

                            res.user.getIdToken().then(handleToken);

                        }
                    }
                );
                break;

            case IS_FACEBOOK:
                await signInWithFacebookPopup(handleError).then(
                    async (res: UserCredential | void) => {
                        if (res) {
                            const credential = FacebookAuthProvider.credentialFromResult(res);
                            if (credential === null) {
                                handleError.value = {
                                    code: "response/empty-credentials",
                                    message: "Firebase: Unavailable to get credentials"
                                };
                            };

                            //res.user.getIdToken().then(token => triggerAuth({ token }));
                            res.user.getIdToken().then(handleToken);

                        }
                    }
                );
                break;


            case IS_TWITTER:
                await signInWithTwitterPopup(handleError).then(
                    async (res: UserCredential | void) => {
                        if (res) {
                            const credential = TwitterAuthProvider.credentialFromResult(res);
                            if (credential === null) {
                                handleError.value = {
                                    code: "response/empty-credentials",
                                    message: "Firebase: Unavailable to get credentials"
                                };
                            };

                            //res.user.getIdToken().then(token => triggerAuth({ token }));
                            res.user.getIdToken().then(handleToken);

                        }
                    }
                );
                break;


            case IS_GITHUB:
                await signInWithGitHubPopup(handleError).then(
                    async (res: UserCredential | void) => {
                        if (res) {
                            const credential = GithubAuthProvider.credentialFromResult(res);
                            if (credential === null) {
                                handleError.value = {
                                    code: "response/empty-credentials",
                                    message: "Firebase: Unavailable to get credentials"
                                };
                            };

                            //res.user.getIdToken().then(token => triggerAuth({ token }));
                            res.user.getIdToken().then(handleToken);

                        }
                    }
                );
                break;

            case IS_MICROSOFT:
                await signInWithMicrosoftPopup(handleError).then(
                    async (res: UserCredential | void) => {
                        if (res) {
                            const credential = OAuthProvider.credentialFromResult(res);
                            if (credential === null) {
                                handleError.value = {
                                    code: "response/empty-credentials",
                                    message: "Firebase: Unavailable to get credentials"
                                };
                            };

                            //res.user.getIdToken().then(token => triggerAuth({ token }));
                            res.user.getIdToken().then(handleToken);

                        }
                    }
                );
                break;

            default:
                break;
        }


        isLoading.value = false;
    }


    return {
        form,
        radio,
        isLoading,
        handleError,
        confirmTp,
        handleChange,
        handleRadio,
        handleSocialLogin,
        handleSubmit,
        handleSubmitUserAlreadyLogged,
        handleToken
    };
}
