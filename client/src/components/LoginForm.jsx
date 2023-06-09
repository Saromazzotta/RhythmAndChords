import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginForm = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })

    const changeHandler = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/login", userInfo, { withCredentials: true })
            .then(res => {
                console.log(res)
                navigate("/dashboard")
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="col-5 mt-3 text-white fw-bold">
            <form onSubmit={submitHandler}>
                <h2 className="text-center fw-bold fst-italic">Login</h2>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Email:</label>
                    <input type="email" className="form-control" name="email" value={userInfo.email} onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Password:</label>
                    <input type="password" className="form-control" name="password" value={userInfo.password} onChange={changeHandler} />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary mt-3 fw-bold">Login</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm