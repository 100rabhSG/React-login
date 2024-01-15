import React from 'react';
import { Button } from 'react-bootstrap'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';

import LoginForm from './LoginForm/LoginForm';
import Nav from './Navbar/Nav';

function Home(){
    const navigate = useNavigate();
    var user = localStorage.getItem("token");
    
    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //         if(user){
    //             console.log("User logged in! useEffect")
    //             console.log(user.uid);
    //         }
    //         else{
    //             console.log("User logged out! useEffect");
    //         }
    //     });
    // }, [])

    const handleLogout = () =>{
        signOut(auth).then(() =>{
            localStorage.removeItem("token")
            console.log("signed out successfully!");
            navigate('/');
        })
        .catch((error) =>{
            console.log(error);
        });
    }

    const handleClick = () =>{
        if(user){
            handleLogout();
        }
        else{
            navigate('/login');
        }
    }

    return(
        <div>
            {console.log(user)}
            {console.log(localStorage.getItem("token"))}
            {/* <Button onClick={handleClick}> { user ? "LogOut" : "Log In" } </Button> */}
            <Nav />
            
            {user? <h1>Welcome to our app</h1> : <LoginForm />}
        </div>
    );
}

export default Home