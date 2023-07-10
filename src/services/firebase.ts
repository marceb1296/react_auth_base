import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, OAuthProvider, TwitterAuthProvider } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { config } from '../config/config';


export const validateFirebaseConfig = () => {
    return Object.keys(config.firebaseConfig).length !== 0
}


export const auth = () => {
    const app = initializeApp(config.firebaseConfig);
    return getAuth(app);
};


// Google
export const providerGoogle = new GoogleAuthProvider();
providerGoogle.setCustomParameters({ prompt: 'select_account' });

// Facebook
export const providerFacebook = new FacebookAuthProvider();
providerFacebook.addScope("public_profile")

// Twitter
export const providerTwitter = new TwitterAuthProvider();

// GitHub
export const providerGitHub = new GithubAuthProvider();

// Microsoft
export const providerMicrosoft = new OAuthProvider('microsoft.com').setCustomParameters({
    // Force re-consent.
    prompt: 'consent',
    // Target specific email with login hint.
    login_hint: 'user@firstadd.onmicrosoft.com',
    tenant: "1bd1e0fb-f970-45f0-a49d-e80107b0e6f3"
  });
