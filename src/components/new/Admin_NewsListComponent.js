import React from 'react';
import { connect } from 'react-redux';

import Admim_NewsComponent from './Admin_NewsComponent';
import {newsAction} from '../../redux/action/news'

const Admim_NewsListComponent = props => {
  const {news, myNews} = {...props}
  if (myNews != undefined) {
    return (
      <div className='containerBoxNews'>
        {
          myNews.map((post, i) => {
            return (
              <Admim_NewsComponent
                key={i}
                id={post.id}
                title={post.title}
                detail={post.detail}
                user={post.user}
                username={post.first_name}
              />
            )
          })
        }
      </div>
    )
  } else {
    return (
      <div className='containerBoxNews'>
        {
          news.map((post, i) => {
            return (
              <Admim_NewsComponent
                key={i}
                id={post.id}
                title={post.title}
                detail={post.detail}
                user={post.user}
                username={post.first_name}
              //  onClick={onClick}
              />
            )
          })
        }

      </div>
    )
  }
}

const mapStateToProps = state => ({
  news: state.News.data
})

const mapDispatchToProps = (dispatch, state) => {
  return {
    delNews: (id) => {
      newsAction.deleteNews(id)
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Admim_NewsListComponent);