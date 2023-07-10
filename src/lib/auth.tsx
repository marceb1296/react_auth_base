import { Modal, DotsLoader } from "../components";
import "../css/auth.scss"
import { IModalProp } from "../interfaces";
import { getSignInMethod, parsefirebaseErrorCode } from "../core";
import { config } from "../config/config";
import { useForm } from "../hooks";


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
    } = useForm(authManager, isOpen)


    return (
        
        <Modal
            title='Log In'
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
                                            
                                            <input placeholder="Email | Username" required name="username" onChange={handleChange} value={form.value.username} type="text"></input>
                                        </>
                                    : 
                                        <>
                                            <input placeholder="Email" required name="email" onChange={handleChange} value={form.value.email} type="email"></input>
                                        </>
                                }                                                
                                <input placeholder="Password" required name="password" onChange={handleChange} value={form.value.password} type="password"></input>
                                <button type='submit' className='email-login'>Continuar</button>
                            </form>
                        </div>
                    </div>

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
 