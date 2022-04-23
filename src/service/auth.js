import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { authService } from './mybase';

class AuthService{
    login(providerName){
        const authProvider = this.getProvider(providerName);
        return signInWithPopup(authService, authProvider);
    }

    onAuthChange(onUserChanged){
        authService.onAuthStateChanged(user=>{
            onUserChanged(user);
        })
    }

    logout(){
        authService.signOut();
    }

    getProvider(providerName){
        switch(providerName){
            case 'Google':
                return new GoogleAuthProvider();
            case 'Github':
                return new GithubAuthProvider();
            default:
                throw new Error(`Not Supported Provider ${providerName}`);
        }
    }
}

export default AuthService;