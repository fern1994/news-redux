import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';

import { alertconfirmAction } from '../../redux/action/alertconfirm'

const AlertConfirmComponent = (props) => {
  const {open,text} = {...props}
  return (
    <Modal open={open} onClose={props.hideAlert} center>
      <p>Alert</p>
      <div className="fixed-modal">
        <p>{text}</p>
        <button className="f6 link dim br1 ba ph3 pv2 mb2 dib green" onClick={props.onClick}>
        Yes
          </button>
      </div>
    </Modal>
  )
}

const mapStateToProps = state => ({
  open: state.AlertConfirm.open,
  text: state.AlertConfirm.text
})

const mapDispatchProps = (dispatch) => {
  return{
    hideAlert: () => {
      dispatch(alertconfirmAction.hideAlertConfirm());
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchProps)
  (AlertConfirmComponent);