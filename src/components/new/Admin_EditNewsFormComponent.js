import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import ReactLoading from 'react-loading';

import { newsAction } from '../../redux/action/news'

let Admin_EditNewsFormComponent = props => {
  const { handleSubmit, newsdata } = props
  return (
    <div className='boxNews'>
      <form onSubmit={handleSubmit}>
        <Field name="id" component="input" type='hidden' />
        <label>title</label>
        <Field name="title" component="input" type='text' />
        <label>detail</label>
        <Field name="detail" component="textarea" type='text' />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

function mapStateToProps(state, ownProps) {
  return {
    initialValues: {
      title: ownProps.newsdata.title,
      detail: ownProps.newsdata.detail,
      id: ownProps.newsdata.id
    }
  }
}

Admin_EditNewsFormComponent = reduxForm({
  form: 'Admin_EditNewsFormComponent',
},mapStateToProps)(Admin_EditNewsFormComponent)

export default connect(mapStateToProps)(Admin_EditNewsFormComponent);