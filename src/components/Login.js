import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase'

function Login(){
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        signInWithEmailAndPassword(auth, formData.email, formData.password) 
         .then((userCredentials) => {
            const user = userCredentials.user;
            console.log("accessToken: ", user.accessToken)
            localStorage.setItem("token", user.accessToken)
            navigate("/")
            // console.log(user);
         })
         .catch((error) => {
            console.log('Invalid credentials');
            console.log(error);
         });
    }

    const switchMode = () => {
        navigate('/signup');
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input 
                    type = "email"
                    name = "email"
                    value = {formData.email}
                    onChange = {handleChange}
                />
            </label>

            <label>
                Password:
                <input 
                    type = "password"
                    name = "password"
                    value = {formData.password}
                    onChange = {handleChange}
                />
            </label>

            <button type="submit">Log In</button>

            <button onClick={switchMode}> {"Don't have an account? Sign Up"} </button>
        </form>
    );
}

export default Login