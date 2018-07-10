import React from 'react';
import { connect } from 'react-redux';
import NewsComponent from './NewsComponent';


const NewsListComponent = ({news}) => {
  return (
    <div className='containerNews'>
      <div className='otherNews'>
      
      {
        
        news.map((post, i) => {
          return(
            <NewsComponent 
            key={i}
             id={post.id}
             title={post.title}
             detail={post.detail}
             user={post.user}
            />
          )
        })
        
      }
      </div>
    </div>
  )
}

function mapStateToProps(state){
  return {
    news: state.News.data
  }
}

export default connect(mapStateToProps)
(NewsListComponent);