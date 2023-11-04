import { useFormik } from 'formik';
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import * as Yup from 'yup'

const AddProductSchema = Yup.object().shape({
  pid: Yup.string().required('Product ID is required').min(8, 'Min 8 characters'),
  pname: Yup.string().required('Product name is required'),
  cname: Yup.string().required('Company name is required'),
  price: Yup.string().required('Price is required')
});

const AddProduct = () => {

  const addProductForm = useFormik({
    initialValues: {
      pid: '',
      pname: '',
      cname: '',
      pmodel: '',
      price: ''
    },

    onSubmit: async (values, {resetForm}) => {
      console.log(values);
      const res = await fetch('http://localhost:5000/product/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      console.log(res.status);

      if(res.status === 200){
        resetForm()
        enqueueSnackbar('Product Added', {
          variant: 'success',
          anchorOrigin: {
            horizontal: 'right',
            vertical: 'top'
          }
        })
      } else {
        enqueueSnackbar('Try Again', {
          variant: 'warning',
          anchorOrigin: {
            horizontal: 'right',
            vertical: 'top'
          }
        })
      }
    },

    validationSchema: AddProductSchema
  })

  return (
    <div className="vh-120 bg-body-secondary">
      <div className="col-md-4 mx-auto py-5">
        <div className="card">
          <div className="card-body">
            <h2 className="text center my-5">Add Product</h2>

            <form onSubmit={addProductForm.handleSubmit}>
              <label>Product ID</label>
              <span className="error-label">{addProductForm.touched.pid && addProductForm.errors.pid}</span>
              <input type="text" className='form-control mb-3' id='pid' onChange={addProductForm.handleChange} value={addProductForm.values.pid} />
              <label>Product Name</label>
              <span className="error-label">{addProductForm.touched.pname && addProductForm.errors.pname}</span>
              <input type="text" className='form-control mb-3' id='pname' onChange={addProductForm.handleChange} value={addProductForm.values.pname} />
              <label>Company</label>
              <span className="error-label">{addProductForm.touched.cname && addProductForm.errors.cname}</span>
              <input type="text" className='form-control mb-3' id='cname' onChange={addProductForm.handleChange} value={addProductForm.values.cname} />
              <label>Model</label>
              <input type="text" className='form-control mb-3' id='pmodel' onChange={addProductForm.handleChange} value={addProductForm.values.pmodel} />
              <label>Price</label>
              <span className="error-label">{addProductForm.touched.price && addProductForm.errors.price}</span>
              <input type="text" className='form-control mb-3' id='price' onChange={addProductForm.handleChange} value={addProductForm.values.price} />

              <button type='submit' className="btn btn-primary mt-3">Submit</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct