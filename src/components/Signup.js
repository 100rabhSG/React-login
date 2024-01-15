import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase'

const initialState = { email: '', password: '', confirmPassword: '' };

function Signup(){
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    }

    const resetForm = () => {
        setFormData(initialState)
        console.log("form reset")
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();

        if(formData.password !== formData.confirmPassword){
            alert("Passwords do not match!");
            resetForm()
            return;
        }

        console.log('Form submitted');
        console.log(formData);

        await createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredentials) =>{
                //signed in
                const user = userCredentials.user;
                console.log(user);
                navigate("/login")
            })
            .catch((error) => {
                alert('Invalid email')
                resetForm()
                console.log(error.message);
            });
    }

    const switchMode = () => {
        navigate('/login');
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

            <label>
                Re-enter password:
                <input 
                    type = "password"
                    name = "confirmPassword"
                    value = {formData.confirmPassword}
                    onChange = {handleChange}
                />
            </label>

            <button type="submit">Sign Up</button>

            <button onClick={switchMode}> {"already have an account? Log In"} </button>
        </form>
    );
}

export default Signup;