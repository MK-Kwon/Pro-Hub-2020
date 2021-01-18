import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu {...props}>
      <a className="menu-item" href="/createProject">
        Create Project
      </a>

      <a className="menu-item" href="/profile">
        Profile
      </a>

      <a className="menu-item" href="/projectProfile">
        Your Project
      </a>

      <a className="menu-item" href="/searchusers">
        Search Users
      </a>
    </Menu>
  );
};



  