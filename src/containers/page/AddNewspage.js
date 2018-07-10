import React, { Component } from 'react'
import { connect } from 'react-redux';

import Admin_NewsFormComponent from '../../components/new/Admin_NewsFormComponent';
import {modalAction} from '../../redux/action/modal';
import ComfirmNewsComponent from '../../components/new/ConfirmNewsComponent';
import { newsAction } from '../../redux/action/news'

class EditNewspage extends Component {
  submit = values => {
    this.props.showModal(values)
  }
  render() {
    return (
      <div>
        <Admin_NewsFormComponent onSubmit={this.submit}/>
        <ComfirmNewsComponent onClick={this.props.addNews}/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch,state) => {
  return{
    showModal: (data) => {
      dispatch(modalAction.showModal(data))
    },
    addNews: (data) => {
      dispatch(newsAction.addNews(data))
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(EditNewspage);
