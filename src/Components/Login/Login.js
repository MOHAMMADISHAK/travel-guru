import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './loginManager';
import { Container, Button } from 'react-bootstrap';
import './Login.css'
import { FormControlLabel, Switch } from '@material-ui/core';
function Login() {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: '',
        password: ''
    })

    initializeLoginFramework();
    const [loggedInUser, setloggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    console.log(loggedInUser);

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                handleResponses(res, true);
            })
    }

    const signOut = () => {
        handleSignOut()
            .then(res => {
                handleResponses(res, false);
            })
    }
    const fbSignIn = () => {
        handleFbSignIn()
            .then(res => {
                handleResponses(res, true)
            })
    }

    const handleResponses = (res, redirect) => {
        setUser(res);
        setloggedInUser(res);
        if (redirect) {
            history.replace(from);
        }
    }

    const handleBlur = (e) => {

        let isFieldValid = true;
        if (e.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);

        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = (isPasswordValid && passwordHasNumber);
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handleSubmit = (e) => {
        console.log(user.name, user.password)
        if (newUser && user.email && user.password) {
            createUserWithEmailAndPassword(user.name, user.email, user.password)
                .then(res => {
                    handleResponses(res, true);
                })
        }

        if (!newUser && user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponses(res, true);
                })
        }

        e.preventDefault();
    }
    return (
        <Container style={{ textAlign: 'center',paddingBottom:"1px" }} className="input-control">


            <div style={{ margin: '100px', padding: '10px',backgroundColor:'white' }}>
            {newUser ? <h3 style={{color : 'white'}}>Create an Account </h3> : <h3 style={{color : 'white'}}>Login</h3> 

                    }
                <form onSubmit={handleSubmit} >
                    {newUser && <div>
                        
                        <input name="name" type="text" onBlur={handleBlur} placeholder="Your Name" />
                    </div>

                    }
                    <br />
                    <input type="email" name="email" onBlur={handleBlur} placeholder="Enter your Email" required />
                    <br />
                    <input type="password" name="password" onBlur={handleBlur} placeholder="password" required />
                    <br />
                    {newUser && <input name="confirmPassword" type="password" onBlur={handleBlur} placeholder="Confirm Password" required />
                    }
                    <br />
                    <input type="submit" style={{ background: '#ffbf00', borderRadius: '5px', padding: '10px' }} value={newUser ? 'Sign Up' : 'Sign In'} />
                    {/* <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" /> */}
                    <br />
                    <FormControlLabel
                        control={
                            <Switch

                                onChange={() => setNewUser(!newUser)}
                                name="newUser"
                                color="primary"
                            />
                        }
                        label="SignUp for New User"
                    />
                </form>
                <p style={{ color: 'red' }}>{user.error}</p>
                    <p>{}</p>

                {user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'Logged In'} Successfully</p>}

                {user.isSignedIn ? <Button variant="light" onClick={signOut}>Sign Out</Button> : <Button variant="light" onClick={googleSignIn}>Sign In Using Google</Button>}
                <br />
                <br />
                <Button onClick={fbSignIn}>Login Using Facebook</Button>
            </div>
        </Container>
    );
}

export default Login;