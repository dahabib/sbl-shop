import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import firebase from 'firebase/app';
import "firebase/auth";

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleSignOut = () => {
    firebase.auth().signOut()
      .then(res => {
        const signedOutUser = {
          isSignedIn: false,
          displayName: '',
          email: '',
          photoURL: ''
        }
        setLoggedInUser(signedOutUser);
      })
      .catch(err => {
        console.log(err);
      })
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white py-4 pl-0">
      <div className="container">
        <Link className="navbar-brand text-primary font-weight-bold" to="/"> SBL SHOP </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/orders">Orders</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/admin">Admin</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/deals">Deals</Link></li>
          </ul>

          <div className="d-flex content-container">
            {
              loggedInUser.isSignedIn ?
                <div className="logged-in d-flex">
                  <div className="h-100">
                    {loggedInUser.name}
                    <img src={loggedInUser.photo} alt="" className="rounded-circle w-25" />
                  </div>

                  <button onClick={handleSignOut} className="btn btn-danger hover-top-shadow">Logout</button>
                </div> :
                <Link className="btn btn-success hover-top-shadow" to="/login">Login</Link>
            }
          </div>
        </div>
      </div>
    </nav>

  );
};

export default Header;