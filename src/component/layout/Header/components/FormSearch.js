import React from 'react';
import { Field, reduxForm } from 'redux-form';

const FormSearch = ({handleSubmit }) => {
  return (
    <form className="formSearch" onSubmit={handleSubmit}>
      <div>
        <Field name="find" component="input" type="text" placeholder="Search"/>
      </div>
      <div>
        <button type="submit"><i className="icon-search"/></button>
      </div>
    </form>

  )
};

export default reduxForm({form: 'search'})(FormSearch);
