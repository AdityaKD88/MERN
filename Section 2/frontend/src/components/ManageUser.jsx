import { enqueueSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ManageUser = () => {

    const [userList, setUserList] = useState([])

    const [selUser, setSelUser] = useState(null)

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/user/getall');
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setUserList(data);
    };

    const deleteUserData = async (id) => {
        console.log(id);
        const res = await fetch('http://localhost:5000/user/delete/'+id, {
            method: 'DELETE',
        });
        console.log(res.status);
        if(res.status === 200){
            fetchUserData();
            enqueueSnackbar('User Deleted', {
                variant: 'info',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            })
        }  
    }

    const viewModel = () => {
        return(
                            <>
            {/* Button trigger modal */}
            
            {/* Modal */}
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                        Modal title
                    </h1>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    />
                    </div>
                    <div className="modal-body">{
                        selUser !== null && (
                            <div>
                                <h2>Name: {selUser.name}</h2>
                                <p>Email: {selUser.email}</p>
                                <p>User ID: {selUser._id}</p>
                            </div>
                        )
                    }</div>
                    <div className="modal-footer">
                    <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Close
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </>

        )
    }

    const editUserData = async (id) => {
        console.log(id);
        const res = await fetch('http://localhost:5000/user/update/'+id, {
            method: 'PUT'
        });
        console.log(res.status);
        if(res.status === 200){
            fetchUserData();
            enqueueSnackbar('User Updated', {
                variant: 'info',
                anchorOrigin: {
                    vertical: 'top',
                    horizontal: 'right'
                }
            })
        }
    }

    useEffect(() => {
      fetchUserData();
    }, [])
    

  return (
    <div>
        {viewModel()}

        <div className="container">
            <h2 className='text-center'>Manage User</h2>
            <hr />
            <table className='table table-dark'>

                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Password</th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userList.map( (user) => (
                            <tr>
                                <td>
                                    <img height={50} src={"http://localhost:5000/"+user.avatar} alt="" />
                                </td>
                                <td>{user._id}</td>
                                <td>{user.email}</td>
                                <td>{user.name}</td>
                                <td>{user.password}</td>
                                <td>
                                    <Link to={'/updateuser/'+user._id} className='btn btn-primary rounded-pill'>
                                        <i class="fa-regular fa-pen-to-square"></i>&nbsp;Edit
                                    </Link>
                                </td>
                                <td>
                                    <button className='btn btn-danger rounded-pill' onClick={() => {deleteUserData(user._id)}}>
                                        <i class="fa-solid fa-trash"></i>&nbsp;Delete
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => {setSelUser(user)}}
                                        type="button"
                                        className="btn btn-primary"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                    >
                                        View User
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
        
    </div>
  )
}

export default ManageUser