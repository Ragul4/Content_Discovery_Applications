import React, { Component } from "react";
import axios from "axios";
import './Post.css';
import { Link } from 'react-router-dom';

class Alogin extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    errors: {},
    successMessage: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { username, password, email } = this.state;

    // Create a user object to send to the backend
    const user = {
      username,
      password,
      email,
    };

    // Send a POST request to the signup endpoint
    axios
      .post("http://localhost:8080/api/signup", user)
      .then((response) => {
        // Handle success
        this.setState({
          successMessage: response.data,
          errors: {},
        });
      })
      .catch((error) => {
        // Handle validation errors or other errors
        if (error.response && error.response.data) {
          this.setState({
            errors: error.response.data,
            successMessage: "",
          });
        }
      });
  };

  render() {
    const { username, password, email, errors, successMessage } = this.state;

    return (
      <div>
        <h2 id="l0">Signup</h2>
        <form onSubmit={this.handleSubmit}>
          <div id="l">
            <label >Username   </label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleInputChange}
            />
            {errors.username && <p className="error">{errors.username}</p>}
          </div><br></br><br></br>
          <div id="l1">
            <label>Password   </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div><br></br><br></br>
          <div id="l2">
            <label>Email   </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div><br></br><br></br>
          <button id="l3" type="submit"> 
          <Link to="/Post"> Signup </Link>
          </button>
        </form>
        {successMessage && <p className="success">{successMessage}</p>}
      </div>
    );
  }
}

export default Alogin;