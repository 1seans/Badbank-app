import React from 'react'
import {Form, Formik, useField} from 'formik';
import * as Yup from 'yup';


const TextImput = ({ label, ...props}) =>{
  const [field, meta] = useField(props)

  return (
    <>
    <label htmlFor={props.id || props.name}>{label}</label>
    <input className='text-input' {...field} {...props}/>
    {meta.touched && meta.error ? (
      <div className='error'>{meta.error}</div>
    ) : null}
    </>
  );
};


const Checkbox = ({ children, ...props}) =>{
  const [field, meta] = useField(props, 'checkbox')

  return (
    <>
    <label className='checkbox'>
    <input type='checkbox' {...field} {...props}/>
    {children}
    </label>
    {meta.touched && meta.error ? (
      <div className='error'>{meta.error}</div>
    ) : null}
    </>
  );
};


const Select = ({ label, ...props}) =>{
  const [field, meta] = useField(props)

  return (
    <>
    <label htmlFor={props.id || props.name}>{label}</label>
    <select {...field} {...props}/>
    {meta.touched && meta.error ? 
      <div className='error'>{meta.error}</div>
    : null}
    </>
  );
};

const PasswordInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label className='passwerd' htmlFor={props.id || props.name}>{label}</label>
      <input type="password" {...field} {...props} />
      {meta.touched && meta.error ? (<div className="error">{meta.error}</div>) : null}
    </>
  );
};

const CreateAccount = () => {

  return (
    <Formik
    initialValues={{
     name: '',
     gender: '',
     email: '',
     password: '',
     aceptedTerms: false,
    }}
     validationSchema={Yup.object({
       name: Yup.string()
         .min(3, 'Must be at least 3 characters')
         .max(15, 'Must be lest than 15 charatres')
         .required('Required'),
       gender: Yup.string()
       .oneOf(['Male', 'Female', 'Other'])
       .required('Required'),
       email: Yup.string()
         .email('Invalide email address')
         .required('Required'),
       password: Yup.string()
         .required('Password is required')
         .min(8, 'Password must be at least 8 characters')
         .max(20, 'Password must be at most 20 characters')
         .matches(
           /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()_+-=])(?!.*\s).{8,}$/,
           'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
         ),
       aceptedTerms: Yup.boolean()
         .required('Required')
         .oneOf([true], 'You must accept the trems and conditions ')
     })}
   onSubmit={(values, {setSubmitting, resetForm }) => {
     setTimeout(() => {
       alert(JSON.stringify(values, null, 2));
       localStorage.setItem('formData', JSON.stringify(values));
       resetForm();
       setSubmitting(false);
     },2000)
   }}

 >
 {props => (
   <div className="container">
     <Form>
       <h1>Sign Up</h1>
       <TextImput label='Name' name='name' type='text' placeholder='First and Last Nmae'/>
       <TextImput label='Email' name='email' type='email' placeholder='example@email.com'/>
       <Select label='Gender' name='gender'>
         <option value=''>Select</option>
         <option value='Male'>Male</option>
         <option value='Female'>Female</option>
         <option value='Other'>Other</option>
       </Select>
       <PasswordInput label="Password" name="password" placeholder='Password'/>
       <Checkbox name='aceptedTerms'>
          I accept the trems and conditions 
       </Checkbox>
       <button type="submit">{props.isSubmitting ? 'Loading...' : 'Submit'}</button>
     </Form>
   </div>
 )}
    </Formik> 
  )
}

export default CreateAccount
export const values = {
  name: '',
  gender: '',
  email: '',
  password: '',
  aceptedTerms: false,
};