import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'

const ProductList = () => {

    const [productList, setProductList] = useState([])

    const fetchProductData = async () => {
        const res = await fetch('http://localhost:5000/product/getall');
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setProductList(data);
    };

    const deleteProductData = async (id) => {
      const res = await fetch('http://localhost:5000/product/delete/'+id, {
        method: 'DELETE'
      });
      console.log(res.status);
      if(res.status === 200){
        fetchProductData();
        enqueueSnackbar('Product Deleted', {
          variant: 'info',
          anchorOrigin:{
            vertical: 'top',
            horizontal: 'right'
          }
        })
      }
    }

    useEffect(() => {
      fetchProductData();
    }, [])
    

  return (
    <div>
        <div className="container">
            <h2 className="text-center">Product List</h2>
            <hr />

            <table className="table">
                
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Company Name</th>
                    <th>Model</th>
                    <th>Price</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  { productList.map((product) => (
                    <tr>
                      <td>{product._id}</td>
                      <td>{product.pid}</td>
                      <td>{product.pname}</td>
                      <td>{product.cname}</td>
                      <td>{product.pmodel}</td>
                      <td>{product.price}</td>
                      <td>
                        <button className='btn btn-primary rounded-pill'>
                          <i class="fa-regular fa-pen-to-square"></i>&nbsp;Edit
                        </button>
                      </td>
                      <td>
                        <button className='btn btn-danger rounded-pill' onClick={() => {deleteProductData(product._id)}}>
                          <i class="fa-solid fa-trash"></i>&nbsp;Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

            </table>
        </div>
    </div>
  )
}

export default ProductList