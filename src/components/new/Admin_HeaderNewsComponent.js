import React, { Component } from 'react';
import FontAwesomeIcon from 'react-fontawesome'
import Modal from 'react-responsive-modal';
import { connect } from 'react-redux';

import {newsAction} from '../../redux/action/news';
import AlertConfirmComponent from './AlertConfirmComponent';

class Admin_HeaderNewsComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      user: props.user,
    }
  }

  render() {
    const { id, openConfirmModal, openAlertModal, confirmText, alerText } = this.state;
    if (JSON.parse(localStorage.getItem("userId")) === this.state.user) {
      return (
        <div className='boxNewsHead'>
          <a href={`/admin/editNews/${id}`}>
            <FontAwesomeIcon
              className='super-crazy-colors'
              name='edit' />
          </a>
          <a onClick={this.props.showAlertConfirm}>
            <FontAwesomeIcon
              className='super-crazy-colors'
              name='times' />
          </a>
          <AlertConfirmComponent onClick={()=>this.props.delNews(id)}/>
        </div>
      )
    }else{
      return('');
    }
  }
}

const mapDispatchToProps = (dispatch, state) => {
  return {
    delNews: (id) => {
      dispatch(newsAction.deleteNews(id))
    },
    showAlertConfirm: () => {
      dispatch(newsAction.showDeleteConfirm())
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Admin_HeaderNewsComponent);