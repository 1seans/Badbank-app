import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(15, 'Must be less than 15 characters')
    .required('Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password must be at most 20 characters')
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+-=])(?!.*\s).{8,}$/,
      'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
    )
    .required('Password is required'),
});

function Login() {
  const history = useHistory();

  const initialValues = {
    username: '',
    password: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      console.log(JSON.stringify(values, null, 2));
      setSubmitting(false);
      history.push('/home');
    }, 400);
  };

  return (
    <div>
        
      <Formik
      
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        
        {({ isSubmitting }) => (
          <Form className='login-container'>
            <h1 className='login-heading'>Log In</h1>
            <label htmlFor="username">Username:</label>
            <Field className='login-field' type="text" name="username" />
            <ErrorMessage name="username" component="div" />
            <br />
            <label htmlFor="password">Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <br />
            <button type="submit" disabled={isSubmitting}>
              Log In
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
