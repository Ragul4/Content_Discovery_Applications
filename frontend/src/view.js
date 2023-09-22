import axios from "axios";
import React, { Component } from "react";
import './Post.css';

class View extends Component {
  state = {
    data: [],
    searchCName: '', // State for the c_name search
    searchResults: [], // Store search results
    searchError: null,
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    axios.get('http://127.0.0.1:8080/showDetails')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleSearchInputChange = (e) => {
    this.setState({ searchCName: e.target.value });
  }

  handleSearch = () => {
    const { searchCName, data } = this.state;

    // Filter data based on c_name
    const searchResults = data.filter(user => user.c_name.includes(searchCName));

    if (searchResults.length > 0) {
      this.setState({
        searchResults,
        searchError: null,
      });
    } else {
    
      this.setState({
        searchResults: [],
        searchError: 'No results found for the given content name.',
      });
    
    }
  }

  render() {   
    return (
      <div className="box2">
        <div id="ff">
          <input
            type="text"
            placeholder="Search by content"
            value={this.state.searchCName}
            onChange={this.handleSearchInputChange}
          /><br></br><br></br>
          <button onClick={this.handleSearch}>Search</button>
        </div>

        {this.state.searchError && <p className="error">{this.state.searchError}</p>}

        {this.state.searchResults.length > 0 ? (
          <div id="fff">
            <h2 id ="f2">Search Results</h2>
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
                {this.state.searchResults.map(user => (
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
          </div>
        ) : (
          <div id="fff">
          <h2 id ="f2">All Results</h2>
            <table border={1}>
              <thead>
                <tr>
                  <th>id</th>
                  <th>c_name</th>
                
                </tr>
              </thead>
              <tbody>
                {this.state.data.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.c_name}</td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}
  
export default View;
