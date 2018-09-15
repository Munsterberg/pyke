import React from "react";

const Header = () => (
  <header>
    <nav>
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
