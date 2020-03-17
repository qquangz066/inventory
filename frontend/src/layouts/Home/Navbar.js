/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
  const auth = useSelector(state => state.auth);
  return (
    <nav
      className="navbar navbar-top navbar-expand-md navbar-dark"
      id="navbar-main"
    >
      <div className="container-fluid">
        <a
          className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
          href="./index.html"
        >
          Dashboard
        </a>
        <ul className="navbar-nav align-items-center d-none d-md-flex">
          <li className="nav-item dropdown">
            <a
              className="nav-link pr-0"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="media align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img
                    alt="avatar"
                    src="/assets/img/theme/team-1-800x800.jpg"
                  />
                </span>
                <div className="media-body ml-2 d-none d-lg-block">
                  <span className="mb-0 text-sm  font-weight-bold">
                    {auth.name}
                  </span>
                </div>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
              <a href="./examples/profile.html" className="dropdown-item">
                <i className="ni ni-single-02"></i>
                <span>My profile</span>
              </a>

              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="/logout">
                <i className="ni ni-user-run"></i>
                <span>Logout</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
