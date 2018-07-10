import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

let Admin_NewsFormComponent = props => {
  const { handleSubmit } = props
  return (
    <div className='boxNews'>
      <form onSubmit={handleSubmit}>
        <label>title</label>
        <Field name="title" component="input" type='text'/>
        <label>detail</label>
        <Field name="detail" component="textarea" type='text'/>
        < Field name="user" component="input" type='hidden'/>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

Admin_NewsFormComponent = reduxForm({
  form : 'Admin_NewsFormComponent'
})(Admin_NewsFormComponent)

Admin_NewsFormComponent = connect(
  state => ({
    initialValues: {
      user: JSON.parse(localStorage.getItem("userId"))
    }
  })
)(Admin_NewsFormComponent)

export default Admin_NewsFormComponent;