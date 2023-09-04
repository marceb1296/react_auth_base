import { useContext, useEffect, useRef } from "react";
import { useSignal } from "@preact/signals-react";
import { IModal, IHandleErrorData } from "../interfaces";
import { ModalContext } from "../context";
import { usePasswordResetMutation } from "../services";
import { config } from "../config";
import { getLanguage, getSignInMethod, parseFirebaseErrorCode } from "../core";
import "../css/modal.scss"
import { DotsLoader } from ".";
import { FetchErrors } from "../lib/auth";

export const Modal = ({ children, title, isLoading, scrollPosition, language, toastMessage }: IModal) => {

    const email = useSignal("")
    const handleError = useSignal({} as IHandleErrorData)
    const [triggerResetPassword, { data, isSuccess, isError, isLoading: resetPasswordIsLoading, error }] = usePasswordResetMutation();
    const { closeAction, isOpen, message } = useContext(ModalContext);


    const handleDialog = useRef<HTMLDialogElement>(null);

    const handleFormSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isSuccess) return

        triggerResetPassword({
            email: email.value
        })
    }

    useEffect(() => {
        if (handleDialog.current) {
            if (isOpen) {
                handleDialog.current.showModal();
            } else {
                handleDialog.current.close()
            }
        }
    }, [isOpen]);

    useEffect(() => {
        if (handleDialog.current) {
            const elementWidth = handleDialog.current.offsetWidth;
            handleDialog.current.scrollTo(scrollPosition.value ? elementWidth : 0, 0);
        }
    }, [scrollPosition.value])

    useEffect(() => {
        if (error) {
            if ("data" in error) {
                handleError.value = {
                    code: "auth/password-reset-error",
                    message: error.data && (Object.values(error.data).find(el => typeof el === "string") ?? error.data)
                }
            } else if ("status" in error) {
                handleError.value = {
                    code: "auth/fetch-failed",
                    message: 'error' in error ? error.error : "Unexpected Error"
                }
            }
        } else {
            if (handleError.value.message) {
                handleError.value = {} as IHandleErrorData
            }
        }
    }, [error])

    useEffect(() => {
        if (isSuccess) {
            toastMessage.value = language.forgotPasswordLabel
        }
    }, [isSuccess]);

    return (
        <dialog ref={handleDialog} className="modal-container mandatory-scroll-snapping">
            <section className="modal-data">
                {closeAction &&
                    <button onClick={() =>
                        typeof closeAction === "function"
                            ? closeAction(prev => !prev)
                            : closeAction.value = !closeAction.value
                    } className="modal-close">
                        X
                    </button>
                }
                <header className="modal-title">
                    <label>
                        {title}
                    </label>
                </header>
                <main className="modal-message">
                    {!isLoading
                        ? typeof message === "string" ?
                            (
                                <p>
                                    {message}
                                </p>
                            )
                            :
                            message
                        : <DotsLoader />
                    }
                </main>
                <footer className="modal-footer">
                    {children}
                </footer>
            </section>
            <section className="password-recovery">
                <span className="go-back" onClick={() => scrollPosition.value = false}>
                    {"<"}
                </span>
                <form onSubmit={handleFormSubmit}>
                    <h3>{language.forgotPasswordLabel}</h3>
                    <label>
                        Email:
                        <input required onChange={(e) => email.value = e.currentTarget.value} value={email.value} type="email" />
                    </label>
                    <button className="is-btn blue">
                        {language.submit}
                    </button>
                </form>

                <FetchErrors error={handleError.value} />

                {resetPasswordIsLoading &&
                    <DotsLoader />
                }
            </section>
            {toastMessage.value &&
                <div className="simple-toast show">
                    <button onClick={
                        () => toastMessage.value = undefined
                    }>X</button>
                    <div className="toast-message">
                        {
                            toastMessage
                        }
                    </div>
                </div>
            }
        </dialog>
    )
}
