import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-responsive-modal';
import { withRouter } from 'react-router';

import { modalAction } from '../../redux/action/modal'
import { newsAction } from '../../redux/action/news'

const ComfirmNewsComponent = (props) => {
  const { open,data,history } = { ...props }
  return (
    <Modal open={open} onClose={props.hideModal} center>
      <p>Confirm</p>
      <div className="fixed-modal">
        <p>You want to add or edit this news ?</p>
        <p>Title : {data.title}</p>
        <p>Detail : {data.detail}</p>
      </div>
      <button className="f6 link dim br1 ba ph3 pv2 mb2 dib green" onClick={async()=> {await props.hideModal(); await props.onClick(data); history.push('/admin/home') }}>
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
    addNews: (data) => {
      dispatch(newsAction.addNews(data))
    },
    editNew: (data) => {
      dispatch(newsAction.editNews(data))
    }
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)
(ComfirmNewsComponent));
