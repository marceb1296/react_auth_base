import { IHandleErrorData } from "../interfaces"

export const parsefirebaseErrorCode = (parser: IHandleErrorData[], obj: IHandleErrorData) => {
    return parser.find(el => el.code === "*" ? true : (el.code === obj.code))?.message ?? obj.message
}