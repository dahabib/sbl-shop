import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="row container">
      <div className="brand col">

      </div>
      <div className="menu col mr-auto">
        <ul className="inline-block">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/deals">Deals</Link></li>
        </ul>
      </div>

    </nav>
  );
};

export default Header;