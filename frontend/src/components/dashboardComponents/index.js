import React from 'react';
import { connect } from 'react-redux';

const Dashboard = ({ currentUser }) => {
  return (
    <h3 style={{margin: '20px 40px 0 20px'}}>
      Welcome, {currentUser.username}
    </h3>
  )
}

const mapStateToProps = state => ({
  currentUser: state.auth
});

export default connect(mapStateToProps)(Dashboard);
