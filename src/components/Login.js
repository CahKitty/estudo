import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Login = () => {
    return (
        <div className="loginForm">
            <div> 
             <TextField
                fullWidth
                margin='dense'
                label='login'
                placeholder='Email'
                value={''}
                type='text'
                />

                 <TextField
                fullWidth
                margin='dense'
                label='login'
                placeholder='Email'
                value={''}
                type='text'
                />
            </div>
        </div>
        );
        }

    export default Login;