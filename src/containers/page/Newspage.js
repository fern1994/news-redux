import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import ReactLoading from 'react-loading';

import pictest from '../../image/pictest.jpg'
import apiUrl from '../../js/config';
import { newsAction } from '../../redux/action/news'

class Newspage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { news } = { ...this.props }
    const { match: { params } } = this.props;
    const getNewById = _.find(news, { id: parseInt(params.postId) })
    if (news.length === 0) {
      this.props.getNewsAll()
      return (
        <ReactLoading type='bubbles' color="#000" />
      )
    } else {
      return (
        <div className='showNewsContainer'>
          <div className='showNews'>
            <div className='newsTitle'>
              <h2>
                {getNewById.title}
              </h2>
            </div>
            <div className='newsContent'>
              <img src={pictest} />
            </div>
            <div className='newsContent'>
              {getNewById.detail}
            </div>
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    news: [...state.News.data],
  }
}

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
)
  (Newspage);