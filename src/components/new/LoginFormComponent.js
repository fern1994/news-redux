import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

let LoginFormComponent = props => {
  const { handleSubmit } = props; 
  return (
    <div className='boxNews'>
      <form onSubmit={ handleSubmit }>
        <label>Username</label>
        <Field name="username" component='input' type='text'/>
        <label>Password</label>
        <Field name="password" component='input' type='text'/>
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

LoginFormComponent = reduxForm({
  form: 'LoginFormComponent'
})(LoginFormComponent)

export default LoginFormComponent;