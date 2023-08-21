import { createContext } from "react";
import { IModalProp } from "../interfaces";

export const ModalContext = createContext<IModalProp>({} as IModalProp);