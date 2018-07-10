import React, { Component } from 'react';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';

import RegisterFormComponent from '../../components/new/RegisterFormComponent';
import apiUrl from '../../js/config';
import { userAction } from '../../redux/action/user'
import ConfirmRegisComponent from '../../components/new/ConfirmRegisComponent'
import {modalAction} from '../../redux/action/modal'

class Registerpage extends Component{
  submit = values => {
    const {form} = {...this.props}
    this.props.showModal(values)
  }
  render(){
    return(
      <div>
        <RegisterFormComponent onSubmit={this.submit}/>
        <ConfirmRegisComponent/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    showModal: (data) => {
      dispatch(modalAction.showModal(data))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Registerpage);
