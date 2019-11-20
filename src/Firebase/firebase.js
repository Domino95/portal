import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';




export const firebaseConfig = {
    apiKey: "AIzaSyCdB71xsZQB4peboxI7yoUntzX0DTk_zTg",
    authDomain: "portal-26a57.firebaseapp.com",
    databaseURL: "https://portal-26a57.firebaseio.com",
    projectId: "portal-26a57",
    storageBucket: "",
    messagingSenderId: "509439819769",
    appId: "1:509439819769:web:9cc982293c387fff"
};


class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = app.database();

    }



    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = async () => {
        await this.auth.signOut();
    }

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    // getCurrentUser2 = () => this.auth.currentUser;

    getCurrentEmail() {
        return this.auth.currentUser.email
    }

    getCurrentInfoUser() {
        return this.auth.currentUser

    }

    getCurrentUser = () => {
        this.auth.onAuthStateChanged(user => {
        })
    }




    setSession = () => {
        this.auth.setPersistence(app.auth.Auth.Persistence.SESSION)
    }

    // *** User API ***

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');

    component = name => this.db.ref(`Form/${name}`);


    Form = () => this.db.ref('Form');



}


export default Firebase