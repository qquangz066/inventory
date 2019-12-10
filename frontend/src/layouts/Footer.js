import React from "react";

const Footer = () => (
  <footer className="py-5">
    <div className="container">
      <div className="row align-items-center justify-content-xl-between">
        <div className="col-xl-6">
          <div className="copyright text-center text-xl-left text-muted">
            © 2018{" "}
            <a
              href="https://www.creative-tim.com"
              className="font-weight-bold ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Creative Tim
            </a>
          </div>
        </div>
        <div className="col-xl-6">
          <ul className="nav nav-footer justify-content-center justify-content-xl-end">
            <li className="nav-item">
              <a
                href="https://www.creative-tim.com"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Creative Tim
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://www.creative-tim.com/presentation"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a
                href="http://blog.creative-tim.com"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                MIT License
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
