import React, { Component } from 'react'
import Modal from 'react-responsive-modal';
import FontAwesomeIcon from 'react-fontawesome';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import _ from 'lodash';

import { newsAction } from '../../redux/action/news'
import Admim_LeftNavComponent from '../../components/new/Admin_LeftNavComponent';
import Admin_NewsFormComponent from '../../components/new/Admin_NewsFormComponent';
import apiUrl from '../../js/config';
import Admin_EditNewsFormComponent from '../../components/new/Admin_EditNewsFormComponent';
import {modalAction} from '../../redux/action/modal';
import ComfirmNewsComponent from '../../components/new/ConfirmNewsComponent';

class EditNewspage extends Component {
  submit = values => {
    this.props.showModal(values)
  }
  render() {
    const { news, match: { params } } = { ...this.props }
    if (news.length === 0) {
      this.props.getNewsAll()
      console.log('news', news)
      return (
        <ReactLoading type='bubbles' color="#000" />
      )
    } else {
      const newsdata = _.find(news, { id: JSON.parse(params.postId) })
      console.log('newsdata', newsdata)
      return (
        <div>
          <Admin_EditNewsFormComponent newsdata={newsdata} onSubmit={this.submit}/>
          <ComfirmNewsComponent onClick={this.props.editNews}/>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  news: state.News.data
})

const mapDispatchToProps = (dispatch, state) => {
  return {
    getNewsAll: () => {
      dispatch(newsAction.getNewsAll())
    },
    showModal: (data) => {
      dispatch(modalAction.showModal(data))
    },
    editNews: (data) => {
      dispatch(newsAction.editNews(data))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditNewspage);
