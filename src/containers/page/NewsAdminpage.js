import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ReactLoading from 'react-loading';

import pictest from '../../image/pictest.jpg'
import apiUrl from '../../js/config';
import { newsAction } from '../../redux/action/news'

class NewsAdminpage extends Component {
  render() {
    const { news, match: { params } } = { ...this.props }
    if (news.length === 0) {
      this.props.getNewsAll()
      return (
        <ReactLoading type='bubbles' color="#000" />
      )
    } else {
      const getNewsById = _.find(news,{id: parseInt(params.postId)})
      return (
        <div className='boxNews'>
          <div className='showNewsContainer'>
            <div className='showNews'>
              <div className='newsTitle'>
                <h2>
                  {getNewsById.title}
                </h2>
              </div>
              <div className='newsContent'>
                <img src={pictest} />
              </div>
              <div className='newsContent'>
                {getNewsById.detail}
              </div>
            </div>
          </div>
        </div>
      )
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
)(NewsAdminpage);