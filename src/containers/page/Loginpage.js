import React, { Component } from 'react';
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';

import LoginFormComponent from '../../components/new/LoginFormComponent';
import apiUrl from '../../js/config';
import { loginAction } from '../../redux/action/login';
import { alertAction } from '../../redux/action/alert';
import AlertComponent from '../../components/new/AlertComponent';

class Loginpage extends Component {
  submit = value => {
    const {history} = this.props
    this.props.login(value,history)
  }
  render() {
    return (
      <div>
        <LoginFormComponent onSubmit={this.submit} />
        <AlertComponent />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data,history) => {
      dispatch(loginAction.login(data,history))
    },
    showAlert: (text) => {
      dispatch(alertAction.showAlert(text))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps)
  (Loginpage);
