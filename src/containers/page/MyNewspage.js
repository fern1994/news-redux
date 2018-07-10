import React, { Component } from 'react'
import _ from 'lodash';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';

import Admim_NewsListComponent from '../../components/new/Admin_NewsListComponent';
import {newsAction} from '../../redux/action/news';
import { loginAction } from '../../redux/action/login';


class MyNewspage extends Component {
  render() {
    const { news,myId } = { ...this.props }
    if (news.length === 0) {
      this.props.checkLogin()
      this.props.getNewsAll()
      return (
        <ReactLoading type='bubbles' color="#000" />
      )
    } else {
      const myNews = _.filter(news, function(obj){ return obj.user === myId })
      return (
        <Admim_NewsListComponent myNews={myNews}/>
      );
    }
  }
}

const mapStateToProps = state => ({
  news: state.News.data,
  myId: state.Login
})

const mapDispatchToProps = (dispatch, state) => {
  return {
    getNewsAll: () => {
      dispatch(newsAction.getNewsAll())
    },
    checkLogin: () => {
      dispatch(loginAction.checkLogin())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyNewspage);
