import React, { Component } from "react";
import { connect } from "react-redux";

import { requestCurrentUser } from "../../session/sessionActions";

class Dashboard extends Component {
  public render() {
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestCurrentUser: () => dispatch(requestCurrentUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
