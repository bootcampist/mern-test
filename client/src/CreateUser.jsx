import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './style.css';


function CreateUser () {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [bio, setBio] = useState();
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const Submit = (e) => {
        e.preventDefault();
        axios.post("https://mern-test-mauve.vercel.app/createUser", {name, email, bio})
        .then(result => {
            console.log(result)
            navigate('/')})
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Submit}>
                    <h2>Add Info</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control"
                        onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Enter Email" className="form-control"
                        onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Bio</label>
                        <input type="text" placeholder="Write Something..." className="form-control"
                        onChange={(e)=> setBio(e.target.value)}/>
                    </div>
                    <button className="btn update">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser;
