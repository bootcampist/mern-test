import React, {useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './style.css'

function UpdateUser () {
    const {id} = useParams();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [bio, setBio] = useState();
    const navigate = useNavigate()

    useEffect(()=> {
        axios.get('http://localhost:3001/getUser/'+id)
        .then(result => {console.log(result)
            setName(result.data.name)
            setEmail(result.data.email)
            setBio(result.data.bio)
        })
        .catch(err => console.log(err))
    }, [])

    const Update = (e) => {
        e.preventDefault();
        console.log(name, email, bio);
        axios.put("http://localhost:3001/updateUser/"+id, {name, email, bio})
        .then(result => {
            console.log(result)
            navigate('/')})
        .catch(err => console.log(err))
    }

    return (
        <div className="d-flex vh-100 justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Update}>
                    <h2>Update Info</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder="Enter Name" className="form-control"
                        value={name} onChange={(e)=> setName(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="text" placeholder="Enter Email" className="form-control"
                        value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Bio</label>
                        <input type="text" placeholder="Write Something..." className="form-control"
                        value={bio} onChange={(e)=> setBio(e.target.value)}/>
                    </div>
                    <button className="btn update">Update</button>
                </form>
            </div>
        </div>
    )
}

export default UpdateUser;