import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Register.css'
import { auth } from '../firebase'

const Register = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleRegister = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then(() => {
            alert('User registerd successfully 😃 ')
        }).catch((e) => {
            console.log(e.message);
        })
    }

    return (
        <div className='register_container'>
            <div className="register">
                <h4>Sign Up</h4>
                <form noValidate autoComplete="off">
                    <TextField id="standard-basic" className='nameField' 
                        label="Name" type='text'
                        onChange={(e) => setName(e.target.value)}
                        />
                    <TextField id="standard-basic" label="Email" onChange={(e) => setEmail(e.target.value)} type='email'/>
                    <TextField id="standard-basic" className='passwordField' 
                        label="Password" type='password'
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    <Button id='userButtons' variant="outlined" color="secondary" onClick={handleRegister} >
                        Register
                    </Button>
                    <h5>OR</h5>
                    <Link to='/login'>
                        <Button href="#text-buttons" color="secondary">Login</Button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Register
