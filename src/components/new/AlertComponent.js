import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';

import { alertAction } from '../../redux/action/alert'

const AlertComponent = (props) => {
  const {open,text} = {...props}
  console.log(props)
  return (
    <Modal open={open} onClose={props.hideAlert} center>
      <p>Alert</p>
      <div className="fixed-modal">
        <p>{text}</p>
      </div>
    </Modal>
  )
}

const mapStateToProps = state => ({
  open: state.Alert.open,
  text: state.Alert.text
})

const mapDispatchProps = (dispatch) => {
  return{
    showAlert: () => {
      dispatch(alertAction.showAlert())
    },
    hideAlert: () => {
      dispatch(alertAction.hideAlert());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchProps)
  (AlertComponent);