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
    

  return (
    <div>
        <h1>{id}</h1>
    </div>
  )
}

export default UpdateUser