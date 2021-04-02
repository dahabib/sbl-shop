import React, { useContext } from 'react';
import firebase from 'firebase/app';
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const googleProvider = new firebase.auth.GoogleAuthProvider();


    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app();
    }

    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { isSignedIn: true, name: displayName, email, photo: photoURL };
                // setUser(signedInUser);
                setLoggedInUser(signedInUser);
                history.replace(from);
            }).catch((error) => {
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    return (
        <div className="container col-md-7">

            <div className="row d-flex">
                <div className="col-12">
                    <h3 className="text-center">Sign In Using</h3>
                </div>
                <div className="col d-flex justify-content-center gx-3">
                    <button onClick={handleGoogleSignIn} type="button" className="mx-auto p-3 btn btn-outline-danger btn-lg rounded-pill">
                        <FontAwesomeIcon icon={['fab', 'google']} />
                        Google
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;