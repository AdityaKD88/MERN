import { useFormik } from 'formik'
import React from 'react'
import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required').min(6, 'Too short')
});

const Login = () => {

  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },

    onSubmit: (values) => { console.log(values); },

    validationSchema: LoginSchema
  })

  return (
    <div className='vh-100 bg-body-secondary'>
      <div className="col-md-4 mx-auto py-5">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center my-5">Login Form</h2>

            <form onSubmit={loginForm.handleSubmit}>
              <label>Email</label>
              <span className="error-label">{loginForm.touched.email && loginForm.errors.email}</span>
              <input type="text" className='form-control mb-3' id='email' onChange={loginForm.handleChange} value={loginForm.values.email} />
              <label>Password</label>
              <span className="error-label">{loginForm.touched.password && loginForm.errors.password}</span>
              <input type="password" className='form-control mb-3' id='password' onChange={loginForm.handleChange} value={loginForm.values.password} />

              <button type="submit" className='btn btn-primary mt-3'>Submit</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Login