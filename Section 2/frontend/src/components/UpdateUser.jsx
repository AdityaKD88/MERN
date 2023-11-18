import { Formik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UpdateUser = () => {
    const {id} = useParams();

    const [userData, setUserData] = useState(null);

    const fetchUser = async () => {
        const res = await fetch('http://localhost:5000/user/getbyid/'+id);
        console.log(res.status);
        const data = await res.json();
        setUserData(data);
        console.log(data);
    }

    useEffect(() => {
      fetchUser()
    }, [])

    const formSubmit = async (values, {resetForm}) => {
      console.log(values);
      const res = await fetch('http://localhost:5000/user/update/'+id, {
        method: 'PUT',
        body: JSON.stringify(values),
        headers: {
          'Content-Type' : 'application/json'
        },
      });
      console.log(res.status);

      if(res.status === 200){
        resetForm()
        enqueueSnackbar('User Updated Successfully', {
          variant:'success',
          anchorOrigin:{
            vertical:'top',
            horizontal:'right'
          }
        })
        // navigate('/login')
      }else{
        enqueueSnackbar('Something went Wrong', {
          variant:'error',
          anchorOrigin:{
            vertical:'top',
            horizontal:'right'
          }
        })
      }
    }

    const displayUpdateForm = () => {
      if(userData !== null){
        return <div className="card">
            <div className="card-body">
              <h2 className="text-center my-5">Signup Form</h2>

              <Formik initialValues={userData} onSubmit={formSubmit}>
                { (signupForm) => (
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
                ) }
              </Formik>

            </div>
          </div>
      }else{
        return <h1 className='my-5 text-center text-muted'>Loading...</h1>
      }
    }
    

  return (
    <div>
        {displayUpdateForm()}
    </div>
  )
}

export default UpdateUser