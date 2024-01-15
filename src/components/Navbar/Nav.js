import React from 'react';
import './styles.css';
import { Button } from 'react-bootstrap';

import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
    const navigate = useNavigate();
    const user = localStorage.getItem('token');

    const handleLogout = () =>{
        signOut(auth).then(() =>{
            localStorage.removeItem("token")
            alert("signed out successfully!");
            navigate('/');
        })
        .catch((error) =>{
            console.log(error);
        });
    }


    return (
        <div className='nav-container'>
            <h2 className='name'>React LogIn</h2>

            {user?<Button onClick={handleLogout} className='btn'>LogOut</Button>:<div/>}
        </div>
    );
}

export default Nav;