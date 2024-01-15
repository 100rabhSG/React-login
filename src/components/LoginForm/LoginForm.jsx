import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase'
import email_icon from '../../Assets/email.png'
import password_icon from '../../Assets/password.png'
import './styles.css'

const LoginForm = () => {
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


    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>Log In</div>
                <div className='underline'></div>
            </div>

            <div className='inputs'>
                <div className='input'>
                    <img src={email_icon} />
                    <input type = "email" placeholder='Email' name = "email" value = {formData.email} onChange = {handleChange} />
                </div>

                <div className='input'>
                    <img src={password_icon} />
                    <input type = "password" placeholder='Password' name = "password" value = {formData.password} onChange = {handleChange} />
                </div>
            </div>

            <div className="submit_container">
                <div className="submit" onClick={handleSubmit}> Log In </div>
            </div>
            
        </div>
    );
}

export default LoginForm;