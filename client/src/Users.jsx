// import { set } from 'mongoose';
import axios from 'axios'
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './style.css'


function Users () {
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:3001')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    }, [users])

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/deleteUser/'+id)
        .then(res => console.log(res))
        .catch(error => console.log(error))
    }
    return (
        <div className="d-flex flex-column justify-content-center align-items-center container">
            <div className="w-50 bg-white rounded p-3">
                <Link to="/create" className="btn btn-success add">Add +</Link>
                {/* <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user)=>{
                                return <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                    <Link to={`/update/${user._id}`} className="btn btn-success">Update</Link>
                                        <button className="btn btn-danger" onClick={(e) => handleDelete(user._id)}>Delete</button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table> */}

                

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