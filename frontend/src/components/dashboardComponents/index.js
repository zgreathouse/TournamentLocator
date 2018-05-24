import React, { Component } from 'react';
import { connect } from 'react-redux';

const Dashboard = ({ currentUser }) => {
  if (!currentUser) {
    return (
      <h3 style={{margin: '20px 40px'}}>
        Loading...
      </h3>
    )
  }

  return (
    <h3 style={{margin: '20px 40px'}}>
      Welcome, {currentUser.username}
    </h3>
  )
}

const mapStateToProps = state => ({
  currentUser: state.auth
});

export default connect(mapStateToProps)(Dashboard);
