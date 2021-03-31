import React, { useContext } from 'react';
import firebase from 'firebase/app';

import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useForm } from 'react-hook-form';
// export const auth = firebase.auth();

const Login = () => {
    // const history = useHistory();
    // const location = useLocation();
    // const { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    var googleProvider = new firebase.auth.GoogleAuthProvider();
    const { register, onSubmit, handleSubmit, errors } = useForm();


    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    } else {
        firebase.app(); // if already initialized, use that one
    }

    const handleGoogleSignIn = () => {
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                var credential = result.credential;
                console.log(credential);

                // This gives you a Google Access Token. You can use it to access the Google API.
                // var token = credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                // console.log(user);
                setLoggedInUser(user);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <div className="container pt-5">
            <div className="row d-flex vh-100">
                <div className="col-md-6 col-sm-12 col-xs-12 mx-auto">

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" data-toggle="toggle" data-on="Sign In" data-off="Sign Up" />
                                </label>
                            </div>
                        </div>
                        <h3 className="text-center">Sign In</h3>

                        <div className="form-group">
                            <input name="name" className="form-control" ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} placeHolder="Name" />
                            {errors.name && "Name is required"}
                        </div>

                        <div className="form-group">
                            <input name="email" className="form-control" ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} placeHolder="Email" />
                            {errors.email && "Email is required"}
                        </div>

                        <div className="form-group">
                            <input name="password" className="form-control" ref={register({ required: true, pattern: /^[a-zA-Z0-9!@#$%^&*]{6,16}$/ })} placeHolder="Password" />
                            {errors.password && "Password is required"}
                        </div>

                        <button type="submit" className="btn btn-danger btn-block">Login</button>


                        <div className="form-group row d-flex my-2">
                            <div className="col p-2 mx-auto text-right">
                                <button onClick={handleGoogleSignIn} type="button" className="mx-auto p-1 btn btn-outline-danger btn-lg">
                                    Google
                                    {/* <Google color="red" className="m-2 px-auto" size={50} /> */}
                                </button>
                            </div>
                            <div className="col p-2 mx-auto text-left">
                                <button type="button" className="mx-auto p-1 btn btn-outline-primary btn-lg">
                                    Facebook
                                    {/* <Facebook color="royalblue" className="m-2 px-auto" size={50} /> */}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;