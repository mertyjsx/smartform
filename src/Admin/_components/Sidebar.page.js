import React from "react";
// import { getToken, logout } from "../_services/user.service";
import {Link} from "react-router-dom"
class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };
  }
  render() {
    return (
      <nav className="sidebar">
        <div className="sidebar-header">
          <a href="#" className="sidebar-brand">
            <img
              src={process.env.PUBLIC_URL + "/admin-assets/images/logo.svg"}
            />
          </a>
          <div className="sidebar-toggler not-active">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="sidebar-body">
          <ul className="nav">
            <li className="nav-item nav-category">Main</li>
            <li className="nav-item">
              <a href="javascript:;" className="nav-link">
                <i className="link-icon" data-feather="box"></i>
                <span className="link-title">Dashboard</span>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#forms"
                role="button"
                aria-expanded="false"
                aria-controls="forms"
              >
                <i className="link-icon" data-feather="inbox"></i>
                <span className="link-title">Forms</span>
                <i className="link-arrow" data-feather="chevron-down"></i>
              </a>
              <div className="collapse" id="forms">
                <ul className="nav sub-menu">
                  <li className="nav-item">
                    <a href="javascript:;" className="nav-link">
                      Basic Elements
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#tables"
                role="button"
                aria-expanded="false"
                aria-controls="tables"
              >
                <i className="link-icon" data-feather="layout"></i>
                <span className="link-title">Table</span>
                <i className="link-arrow" data-feather="chevron-down"></i>
              </a>
              <div className="collapse" id="tables">
                <ul className="nav sub-menu">
                  <li className="nav-item">
                    <a href="javascript:;" className="nav-link">
                      Basic Tables
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="javascript:;" className="nav-link">
                      Data Table
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#icons"
                role="button"
                aria-expanded="false"
                aria-controls="icons"
              >
                <i className="link-icon" data-feather="smile"></i>
                <span className="link-title">Icons</span>
                <i className="link-arrow" data-feather="chevron-down"></i>
              </a>
              <div className="collapse" id="icons">
                <ul className="nav sub-menu">
                  <li className="nav-item">
                    <a
                      href="pages/icons/feather-icons.html"
                      className="nav-link"
                    >
                      Feather Icons
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/icons/flag-icons.html" className="nav-link">
                      Flag Icons
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/icons/mdi-icons.html" className="nav-link">
                      Mdi Icons
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#authPages"
                role="button"
                aria-expanded="false"
                aria-controls="authPages"
              >
                <i className="link-icon" data-feather="unlock"></i>
                <span className="link-title">Authentication</span>
                <i className="link-arrow" data-feather="chevron-down"></i>
              </a>
              <div className="collapse" id="authPages">
                <ul className="nav sub-menu">
                <li className="nav-item">
                    <Link to="/admin/edit-user" className="nav-link">
                      edit user
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/delete-user" className="nav-link">
                      delete user
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/admin/create-user" className="nav-link">
                      create user
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
