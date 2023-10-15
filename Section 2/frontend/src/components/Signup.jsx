import { useFormik } from "formik";
import React from 'react'
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  name: Yup.string().required('Name is required').min(3, 'Too short'),
  password: Yup.string().required('Password is required').min(6, 'Too short')
  .matches(/[a-zA-Z]/,'Password is Invalid')
});

const Signup = () => {

  // initialize formik
  const signupForm = useFormik({
    initialValues:{
      name : '',
      email: '',
      password: ''
    },

    onSubmit: (values) => { console.log(values); },
    
    validationSchema: SignupSchema
  })

  return (
    <div className='vh-100 bg-body-secondary'>
      <div className="col-md-4 mx-auto py-5">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center my-5">Signup Form</h2>

            <form onSubmit={signupForm.handleSubmit}>
              <label>Full Name</label>
              <span className="error-label">{signupForm.touched.name && signupForm.errors.name}</span>
              <input type="text" className='form-control mb-3' id="name" onChange={signupForm.handleChange} value={signupForm.values.name} />
              <label>Email</label>
              <span className="error-label">{signupForm.touched.email && signupForm.errors.email}</span>
              <input type="text" className='form-control mb-3' id="email" onChange={signupForm.handleChange} value={signupForm.values.email} />
              <label>Password</label>
              <span className="error-label">{signupForm.touched.password && signupForm.errors.password}</span>
              <input type="password" className='form-control mb-3' id="password" onChange={signupForm.handleChange} value={signupForm.values.password} />

              <button type="submit" className='btn btn-primary mt-3'>Submit</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup;