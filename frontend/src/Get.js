import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Post.css';
class Get extends Component {
  state = {
  data: []
  }

  componentDidMount() {
  axios.get('http://127.0.0.1:8080/showDetails')
    .then(response => {
      this.setState({ data: response.data });
    })
    .catch(error => {
      console.log(error);
    });
}


  render() {   
    return (
        <div id="f" className="box2">
      <table border={1}>
      <thead>
        <tr>
          <th>id</th>
          <th>c_name</th>
          <th>book_name</th>
          <th>author</th>
          <th>domain</th>
          <th>university</th>
        </tr>
      </thead>
      <tbody>
        {this.state.data.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.c_name}</td>
            <td>{user.book_name}</td>
            <td>{user.author}</td>
            <td>{user.domain}</td>
            <td>{user.university}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <button className="button1">
        <Link to="/">Add</Link>
        </button>
        <button className="button2">
        <Link to="/Put" >Update</Link>
        </button>
        <button className="button3">
        <Link to="/Delete">Delete</Link>
        </button>
    </div>
    );
  }}
  
export default Get;