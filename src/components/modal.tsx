import { useContext, useEffect, useRef } from "react";
import { IModal } from "../interfaces";
import { ModalContext } from "../context";
import "../css/modal.scss"
import { DotsLoader } from ".";

export const Modal = ({ children, title, isLoading }: IModal) => {

    const { closeAction, isOpen, message } = useContext(ModalContext);

    const handleDialog = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (handleDialog.current) {
            if (isOpen) {
                handleDialog.current.showModal()
            } else {
                handleDialog.current.close()
            }
        }
    }, [isOpen]);

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
            <section>
                <p>INgresa el correo:</p>
            </section>
        </dialog>
    )
}
