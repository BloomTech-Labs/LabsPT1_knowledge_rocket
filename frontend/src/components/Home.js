import React, { Component } from "react";
import { Button } from "reactstrap";

class Home extends Component {
 
  handleLogout = e => {
    e.preventDefault();
    return localStorage.clear();
  };
  render() {
    console.log('STATE', this.state)
    return (
      <div>
        <Button color="info" onClick={this.handleLogout}>
          Logout!
        </Button>
        <h1>Redirected!!!</h1>
      </div>
    );
  }
}

export default Home;