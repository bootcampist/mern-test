// import { set } from 'mongoose';
import axios from 'axios'
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './style.css'


function Users () {
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        axios.get('https://mern-test-mauve.vercel.app')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    }, [users])

    axios.defaults.withCredentials = true;

    const handleDelete = (id) => {
        axios.delete('https://mern-test-mauve.vercel.app/deleteUser/'+id)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
    return (
        <div className="d-flex flex-column justify-content-center align-items-center container">
            <div className="w-50 bg-white rounded p-3">
                <Link to="/create" className="btn btn-success add">Add +</Link>              

            </div>
            <div id="container" className = "d-flex">
                {
                            users.map((user)=>{
                                 
                                return <div className="card m-3 p-3">
                                    <div className="details">
                                        <div className="name">{user.name}</div>
                                        <div className="email">{user.email}</div>
                                        <div className="bio">{user.bio}</div>
                                        <div >
                                        <Link to={`/update/${user._id}`} className="btn m-1 update">Update</Link>
                                            <button className="btn btn-danger m-1 delete" onClick={(e) => handleDelete(user._id)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                    
                            })
                        }
            </div>
        </div>
    )
}

export default Users;
