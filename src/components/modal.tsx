import { IModal } from "../interfaces";
import "../css/modal.scss"

export const Modal = ({children, closeAction, title, message}: IModal) => {
    return (
        <div className="modal-container">
            <div className="modal-data">
                { closeAction &&
                    <button onClick={() =>
                        typeof closeAction === "function"
                            ? closeAction(prev => !prev)
                            : closeAction.value = !closeAction.value
                    } className="modal-close">
                        X
                    </button>
                }
                <div className="space modal-title">
                    <label>
                        {title}
                    </label>
                </div>
                <div className="space modal-message">
                    {
                        typeof message === "string" ?
                            (
                                <label>
                                    {message}
                                </label>
                            )
                            :
                            message
                    }
                </div>
                <div className="space modal-footer">
                    {children}
                </div>
            </div>
        </div>
    )
}
