import React, { Component } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { logoutUser } from "../actions";

class Home extends Component {
  state = {
    logged_in: true,
  };
  handleSubmit = e => {
    e.preventDefault();
      console.log('HOME STATE', this.state)
    this.setState({ logged_in: false });
    // this.props.logoutUser(this.state);
    console.log('HOME STATE', this.state)
  };
  render() {
    return (
      <div>
        <Button color="info" onClick={this.handleSubmit}>
          Logout!
        </Button>
        <h1>Redirected!!!</h1>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    state: state
  };
};
export default connect(mapStateToProps, { logoutUser })(Home);
