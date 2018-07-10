import React, { Component } from 'react'
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';

import Admim_NewsListComponent from '../../components/new/Admin_NewsListComponent';
import {newsAction} from '../../redux/action/news'


class Adminpage extends Component {
  render() {
    const { news } = { ...this.props }
    if (news.length === 0) {
      this.props.getNewsAll()
      return (
        <ReactLoading type='bubbles' color="#000" />
      )
    } else {
      return (
        <Admim_NewsListComponent />
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
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adminpage);
