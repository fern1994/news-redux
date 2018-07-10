import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';

import NewsListComponent from '../../components/new/NewsListComponent';
import HighlightListComponent from '../../components/new/HighlightListComponent';
import {newsAction} from '../../redux/action/news'

class Homepage extends Component {
  render() {
    const {news} = {...this.props}
    if(news.length === 0){
      this.props.getNewsAll()
      return(
        <ReactLoading type='bubbles' color="#000" />
        )
    }else{
      return (
        <div>
        <HighlightListComponent/>
        <h1>ข่าว</h1>
        <NewsListComponent/>
        </div>
      )
    } 
  }
}

const mapStateToProps = state => ({
  news: state.News.data
})

const mapDispatchToProps = (dispatch,state) => {
  return {
    getNewsAll: () => {
     dispatch(newsAction.getNewsAll())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
