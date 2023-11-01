import React from 'react'

const AddProduct = () => {
  return (
    <div className="vh-120 bg-body-secondary">
      <div className="col-md-4 mx-auto py-5">
        <div className="card">
          <div className="card-body">
            <h2 className="text center my-5">Add Product</h2>

            <form>
              <label>Product ID</label>
              <input type="number" className='form-control mb-3' id='pid' />
              <label>Product Name</label>
              <input type="text" className='form-control mb-3' id='pname' />
              <label>Company</label>
              <input type="text" className='form-control mb-3' id='cname' />
              <label>Model</label>
              <input type="text" className='form-control mb-3' id='pmodel' />
              <label>Price</label>
              <input type="text" className='form-control mb-3' id='price' />

              <button type='submit' className="btn btn-primary mt-3">Submit</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct