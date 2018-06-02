import React from "react";

const header = props => (
  <header className="main-header">
    <a href="/#/" className="logo">
      <span className="logo-mini">
        <i className="fa fa-money" />
      </span>
      <span className="logo-lg">
        <i className="fa fa-money" />
        <b>Money</b>
      </span>
    </a>
    <nav className="navbar navbar-static-top">
      <a href="/#/" className="sidebar-toggle" data-toggle="offcanvas" />
    </nav>
  </header>
);

export default header;
