import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import BigHighlightComponent from './BigHighlightComponent';
import NewsComponent from './NewsComponent';
import Newspage from '../../containers/page/Newspage';

const HighlightListComponent = ({ news }) => {
	if (news.length != 0) {
		const hilight = _.last(news)
		return (
			<div className='containerNews'>
				<BigHighlightComponent
				id={hilight.id}
				title={hilight.title}
				detail={hilight.detail}
				user={hilight.user}
			/>
				<div className='smallHightlightNews'>
					{
						news.reverse().map((post, i) => {
							return (
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
	}else{
		return ""
	}
}

function mapStateToProps(state) {
	return {
		news: [...state.News.data],
	}
}

export default connect(mapStateToProps)
	(HighlightListComponent);
