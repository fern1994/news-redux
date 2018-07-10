import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import { withRouter } from 'react-router';

import { modalAction } from '../../redux/action/modal'
import { userAction } from '../../redux/action/user'

const ComfirmRegisComponent = (props) => {
  const { open,data,history } = { ...props }
  return (
  
    <Modal open={open} onClose={props.hideModal} center>
      <p>Confirm</p>
      <div className="fixed-modal">
        <p>confirmText</p>
        <p>Firstname : {data.first_name}</p>
        <p>Lastname : {data.last_name}</p>
        <p>Username : {data.username}</p>
      </div>
      <button className="f6 link dim br1 ba ph3 pv2 mb2 dib green" onClick={async()=> {await props.hideModal(); await props.addUser(data); history.push('/admin/home') }}>
        Yes
          </button>
    </Modal>
  )
}

const mapStateToProps = state => ({
  open: state.Modal.open,
  data: state.Modal.data,
})

const mapDispatchToProps = (dispatch, state) => {
  return {
    hideModal: () => {
      dispatch(modalAction.hideModel())
    },
    addUser: (data) => {
      userAction.createUser(data)
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ComfirmRegisComponent));
