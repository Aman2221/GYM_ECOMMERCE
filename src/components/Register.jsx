import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import '../styles/Register.css'
import { auth } from '../firebase'
import { useStateValue } from '../StateProvider'
const Register = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history = useHistory();
    const [{user}, dispatch] = useStateValue();
    const handleRegister = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((result) => {
            alert('User registerd successfully 😃 ')
            dispatch({
                type : 'SET_USER',
                user : result.user
            })
            history.push('/');
        }).catch((e) => {
            alert(e.message);
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
                    <Link to='/login'>
                        <Button href="#text-buttons" color="secondary">Login<i className="fas fa-arrow-circle-up"></i></Button>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Register
