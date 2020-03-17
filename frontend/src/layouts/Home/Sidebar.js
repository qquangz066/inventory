/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const SideBar = () => {
  const auth = useSelector(state => state.auth);
  return (
    <nav
      className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white"
      id="sidenav-main"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#sidenav-collapse-main"
          aria-controls="sidenav-main"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link className="navbar-brand pt-0" to="/">
          <img
            src="/assets/img/brand/blue.png"
            className="navbar-brand-img"
            alt="..."
          />
        </Link>
        <ul className="nav align-items-center d-md-none">
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div className="media align-items-center">
                <span className="avatar avatar-sm rounded-circle">
                  <img
                    alt="placeholder"
                    src="/assets/img/theme/team-1-800x800.jpg"
                  />
                </span>
              </div>
            </a>
            <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
              <div className="dropdown-item">
                <p className="mb-0">{auth.name}</p>
              </div>
              <a href="/examples/profile.html" className="dropdown-item">
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
        <div className="collapse navbar-collapse" id="sidenav-collapse-main">
          <div className="navbar-collapse-header d-md-none">
            <div className="row">
              <div className="col-6 collapse-brand">
                <a href="/index.html">
                  <img src="/assets/img/brand/blue.png" alt="home" />
                </a>
              </div>
              <div className="col-6 collapse-close">
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#sidenav-collapse-main"
                  aria-controls="sidenav-main"
                  aria-expanded="false"
                  aria-label="Toggle sidenav"
                >
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>

          <ul
            className="navbar-nav"
            data-toggle="collapse"
            data-target="#sidenav-collapse-main"
          >
            <li className="nav-item  active">
              <Link className="nav-link" to="/dashboard">
                <i className="ni ni-tv-2 text-primary"></i> Dashboard
              </Link>
            </li>

            {auth.is_superuser && (
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/users">
                  <i className="ni ni-single-02 text-yellow"></i> Users
                </Link>
              </li>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/inventories">
                <i className="ni ni ni-shop text-red"></i> Inventories
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default SideBar;
