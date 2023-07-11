import { batch, useSignal } from "@preact/signals-react";
import { config } from "../config";
import { IHandleErrorData, ILoginForm, TAuthManager, THandleError } from "../interfaces";
import { GoogleAuthProvider, UserCredential, FacebookAuthProvider, TwitterAuthProvider, GithubAuthProvider, OAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { signInWithFacebookPopup, signInWithGooglePopup, signInWithTwitterPopup, signInWithGitHubPopup, signInWithMicrosoftPopup } from "../authMethods";
import { auth, useLoginMutation, useUpdateLoginMutation } from "../services";
import { IS_FACEBOOK, IS_GITHUB, IS_GOOGLE, IS_MICROSOFT, IS_TWITTER } from "../const";
import { useEffect } from "react";


const toMiliseconds: number = 1000;
const restMiliseconds: number = 5000;


export const useForm = (authManager: TAuthManager, isOpen: THandleError<boolean>) => {

    const [triggerAuth] = useLoginMutation();
    const [triggerUpdate] = useUpdateLoginMutation();


    const form = useSignal({
        email: "",
        username: "",
        password: ""
    })


    const radio = useSignal(false);
    const confirmTp = useSignal(false);
    const isLoading = useSignal(false);
    const handleError = useSignal({} as IHandleErrorData);

    const handlerRadio = () => {
        batch(() => {
            radio.value = !radio.value;

            if (confirmTp.value) {
                confirmTp.value = !confirmTp.value
            }
        })
    }


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        
        form.value = {
            ...form.value,
            [name]: value
        }
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
        if (config.hasToS && !radio.value) {
            confirmTp.value = true
            return
        }

        if (isLoading.value) return
        isLoading.value = true

        let formObj: ILoginForm = {}

        if (config.acceptUsername) {
            formObj = {
                username: form.value.username,
                password: form.value.password
            }
        } else {
            formObj = {
                email: form.value.email,
                password: form.value.password
            }
        }

        if (config.bodyAsBase64) {
            const body = Object.entries(formObj).map(([key, value]) => `${key}=${value}` ).join("&")
            const encodedBody = btoa(body);

            formObj = {
                encodedBody
            }
        }
        

        triggerAuth(formObj);
        isLoading.value = false
        
    }


    const handleToken = async (token: string) => {

        triggerAuth({ token })
            .unwrap()
            .then((userState) => {
                authManager(async (user, interval, updateError) => {
                    if (interval) {
                        clearInterval(interval)
                        interval = undefined
                    }

                    interval = setInterval(() => {
                        triggerUpdate()
                            .unwrap()
                            .then(result => user.value = result)
                            .catch(authUpdateError => {
                                clearInterval(interval)
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
                    }, ((userState.expiry! * toMiliseconds) - restMiliseconds))
                
                    user.value = userState;
                });
                if (typeof isOpen === "function") {
                    isOpen(prev => !prev)
                } else {
                    isOpen.value = !isOpen.value
                }
                
            })
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
    }
    

    const handleSocialLogin = async (e: React.MouseEvent<HTMLButtonElement>, loginType: string) => {
        e.preventDefault();

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

    useEffect(() => {

        const getUser = async () => {
            isLoading.value = true;
            onAuthStateChanged(auth(), async (user) => {
                if (user) {
                    await user.getIdToken()
                        .then(handleToken)
                        .finally(() => isLoading.value = false);
                    
                } 

                isLoading.value = false;
            });
        }

        getUser();
    }, []);


    return {
        form,
        radio,
        isLoading,
        handleError,
        confirmTp,
        handleChange,
        handlerRadio,
        handleSocialLogin,
        handleSubmit
    };
}
