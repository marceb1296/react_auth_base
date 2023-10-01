import { IS_FACEBOOK, IS_GITHUB, IS_GOOGLE, IS_MICROSOFT, IS_TWITTER } from "../const";
import { ISignInMethodsParser, TMethods } from "../interfaces";

const methods: ISignInMethodsParser[] = [
    {
        method: "google",
        constName: IS_GOOGLE,
        name: "Google",
        className: "google-btn"
    },
    {
        method: "facebook",
        constName: IS_FACEBOOK,
        name: "Facebook",
        className: "facebook-btn"
    },
    {
        method: "twitter",
        constName: IS_TWITTER,
        name: "Twitter",
        className: "twitter-btn",
    },
    {
        method: "github",
        constName: IS_GITHUB,
        name: "GitHub",
        className: "github-btn",
    },
    {
        method: "microsoft",
        constName: IS_MICROSOFT,
        name: "Microsoft",
        className: "microsoft-btn"
    },
]

export const getSignInMethod = (signInMethods: TMethods[]) => {
    return methods.filter(method => signInMethods.find(element => method.method === element))
}