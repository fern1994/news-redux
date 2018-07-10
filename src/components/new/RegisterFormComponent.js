import React from 'react';
import { connect } from 'redux';
import { Field, reduxForm } from 'redux-form';

let RegisterFormComponent = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <label>FirstName</label>
      <Field name="first_name" component="input" type='text'/>
      <label>LastName</label>
      <Field name="last_name" component="input" type='text'/>
      <label>Username</label>
      <Field name="username" component="input" type='text'/>
      <label>Password</label>
      <Field name="password" component="input" type='password'/>
      <label>RePassword</label>
      <input name="repassword" type='password'/>
      <button type="submit">submit</button>
    </form>
  )
}

RegisterFormComponent = reduxForm({
  form : 'RegisterFormComponent'
})(RegisterFormComponent)



export default RegisterFormComponent;