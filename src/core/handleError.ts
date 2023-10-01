import { Signal } from "@preact/signals-react";
import { IHandleErrorData } from "../interfaces"

export const parseFirebaseErrorCode = (parser: IHandleErrorData[], obj: IHandleErrorData) => {
    return parser.find(el => el.code === "*" ? true : (el.code === obj.code))?.message ?? obj.message
}

export const signInError = (error: any, errorHandler: Signal<IHandleErrorData>) => {
    const { code, message, customData } = error;
    const { email } = customData;


    errorHandler.value = {
        code,
        message,
        email
    }
}