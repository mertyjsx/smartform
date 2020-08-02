import React from "react";
import MultipleSelect from 'react-select';
import Navigation from "../../pages/_components/Navigation.page";
import {editUser } from "../_services/user.service";

// Encrypt



class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      email: "",
      password: "",
      id: "",
      status:"",
      error: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  // USING METHOD TO SUMBIT FORM DETAILS TO SERVER
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });

    //Then cipher any text:
  

    editUser(this.state).then(
      (response) => {
      console.log(response)

        if (response.success) {
            this.setState({ loading: false });
        } else {
          this.setState({ loading: false });
        }
      },
      (error) => this.setState({ error, loading: false })
    );
  }

  render() {
    const { loading, error } = this.state;
    return (
      <div className="warper ">
        {/* <!--header-content-here--> */}
    
        {/* <!--header-content-end--> */}

        {/* <!--site-container-start--> */}
        <div className="site_content">
          <div className="heading-banner text-center">
            <div className="container">
              <h1>Edit user!</h1>
            </div>
          </div>
          <div className="login-form">
            <div className="container">
              <div className="login-form-box">
                <form method="post" onSubmit={this.handleSubmit}>
                  <div className="form-group">
                  <div className="form-group">
                    <input
                      type="text"
                      name="id"
                      placeholder="id"
                      className="form-control"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  
                  
                  
                    <input
                      type="email"
                      name="email"
                      placeholder="new Email"
                      className="form-control"
                      onChange={this.handleChange}
                      required
                      autoFocus
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      placeholder=" new Password"
                      className="form-control"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="new status"
                      placeholder="status"
                      className="form-control"
                      onChange={this.handleChange}
                      required
                    />
                  </div>
                
                  <button className="btn btn-purpal w-100" disabled={loading}>
                    {loading ? "Creating..." : "Create user"}
                  </button>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <!--site-container-end--> */}

        {/* <!--footer-here--> */}
     
        {/* <!--footer-end--> */}
      </div>
    );
  }
}

export default SignUp;
