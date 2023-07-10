import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider } from 'firebase/auth';
export declare const validateFirebaseConfig: () => boolean;
export declare const auth: () => import("@firebase/auth").Auth;
export declare const providerGoogle: GoogleAuthProvider;
export declare const providerFacebook: FacebookAuthProvider;
export declare const providerTwitter: TwitterAuthProvider;
export declare const providerGitHub: GithubAuthProvider;
export declare const providerMicrosoft: import("@firebase/auth").AuthProvider;
