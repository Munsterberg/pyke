import React from "react";
import { Link } from "@reach/router";

const Header: React.SFC = () => (
  <header>
    <nav>
      <li>
        <Link to="/dashboard">dashboard</Link>
      </li>
      <li>
        <a href="http://localhost:3000/api/user/auth/google">Login</a>
      </li>
      <li>
        <a href="http://localhost:3000/api/user/auth/logout">Logout</a>
      </li>
    </nav>
  </header>
);

export default Header;
