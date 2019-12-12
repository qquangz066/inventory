import React from "react";
import useForm from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions";
import Footer from "../Footer";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const onSubmit = data =>
    dispatch(login({ username: data.username, password: data.password }));
  return (
    <div className="bg-default">
      <div className="main-content">
        <nav className="navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark">
          <div className="container px-4">
            <a className="navbar-brand" href="./index.html">
              <img src="/assets/img/brand/white.png" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbar-collapse-main"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbar-collapse-main">
              <div className="navbar-collapse-header d-md-none">
                <div className="row">
                  <div className="col-6 collapse-brand">
                    <a href="./index.html">
                      <img src="/assets/img/brand/blue.png" alt="logo_blue" />
                    </a>
                  </div>
                  <div className="col-6 collapse-close">
                    <button
                      type="button"
                      className="navbar-toggler"
                      data-toggle="collapse"
                      data-target="#navbar-collapse-main"
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
            </div>
          </div>
        </nav>
        <div className="header bg-gradient-primary py-7 py-lg-8">
          <div className="container">
            <div className="header-body text-center mb-5">
              <div className="row justify-content-center">
                <div className="col-lg-5 col-md-6">
                  <h1 className="text-white">Welcome!</h1>
                  <p className="text-lead text-light">
                    Use these awesome forms to login or create new account in
                    your project for free.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              x="0"
              y="0"
              viewBox="0 0 2560 100"
              preserveAspectRatio="none"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
        <div className="container mt--8 pb-5">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-7">
              <div className="card bg-secondary shadow border-0">
                <div className="card-body px-lg-5 py-lg-5">
                  {/* form */}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <p className="text-danger font-weight-bold">
                      {auth.message}
                    </p>

                    <div className="form-group mb-3">
                      <div className="input-group input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="ni ni-email-83"></i>
                          </span>
                        </div>
                        <input
                          className="form-control"
                          placeholder="Username"
                          type="text"
                          name="username"
                          ref={register({ required: true })}
                        />
                      </div>
                      {errors.username && (
                        <p className="text-danger">This field is required</p>
                      )}
                    </div>
                    <div className="form-group">
                      <div className="input-group input-group-alternative">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="ni ni-lock-circle-open"></i>
                          </span>
                        </div>
                        <input
                          className="form-control"
                          placeholder="Password"
                          type="password"
                          name="password"
                          ref={register({ required: true })}
                        />
                      </div>
                      {errors.password && (
                        <p className="text-danger">This field is required</p>
                      )}
                    </div>

                    <div className="text-center">
                      <button type="submit" className="btn btn-primary my-4">
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Login;
