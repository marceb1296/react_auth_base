import { Signal, batch, useSignal } from "@preact/signals-react";
import { config } from "../config";
import { FormProps, IHandleErrorData, ILanguages, ILoginForm, IUser, SECTION, SignInFormProps, TAuthManager } from "../interfaces";
import { signInWithGoogleRedirect, signInWithFacebookRedirect, signInWithTwitterRedirect, signInWithMicrosoftRedirect } from "../authMethods";
import { useLoginMutation, useSignInMutation, useUpdateLoginMutation } from "../services";
import { IS_FACEBOOK, IS_GITHUB, IS_GOOGLE, IS_MICROSOFT, IS_TWITTER } from "../const";
import { signInWithGitHubRedirect } from '../authMethods/firebaseGitHubAuthMethod';



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


export const useForm = (authManager: TAuthManager, language: ILanguages, toastMessage: Signal<string | undefined>, onSuccessFn: (() => void) | undefined ) => {

    const [triggerAuth] = useLoginMutation();
    const [triggerSignIn] = useSignInMutation();
    const [triggerUpdate] = useUpdateLoginMutation();


    const form = useSignal(initialValueForm)


    const radio = useSignal(false);
    const confirmTp = useSignal(false);
    const isLoading = useSignal(false);
    const handleError = useSignal({} as IHandleErrorData);


    const successAuthentication = () => {
        isLoading.value = false
        if (onSuccessFn) onSuccessFn()
    }


    const handleErrorCredentials = (error: any) => {
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

        isLoading.value = false
    }


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

        handleToken(tokenId)
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
                .catch(handleErrorCredentials)

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
                .catch(handleErrorCredentials)
        }

    }


    const handleAuthManager = async (userState: IUser) => {
        authManager(userState, toastMessage, triggerUpdate)
            .then(successAuthentication)
    }


    const handleToken = async (token: string) => {

        isLoading.value = true;

        triggerAuth({ token })
            .unwrap()
            .then(handleAuthManager)
            .catch(handleErrorCredentials)
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

                signInWithGoogleRedirect(handleError)
                break;

            case IS_FACEBOOK:
                // await signInWithFacebookPopup(handleError).then(
                //     (res: UserCredential | void) => {
                //         if (res) {
                //             const credential = FacebookAuthProvider.credentialFromResult(res);
                //             if (credential === null) {
                //                 handleError.value = {
                //                     code: "response/empty-credentials",
                //                     message: "Firebase: Unavailable to get credentials"
                //                 };
                //             };

                //             //res.user.getIdToken().then(token => triggerAuth({ token }));
                //             res.user.getIdToken().then(handleToken);

                //         }
                //     }
                // );
                signInWithFacebookRedirect(handleError)
                break;


            case IS_TWITTER:
                signInWithTwitterRedirect(handleError)
                break;


            case IS_GITHUB:
                signInWithGitHubRedirect(handleError)
                break;

            case IS_MICROSOFT:
                signInWithMicrosoftRedirect(handleError)
                break;

            default:
                break;
        }
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
