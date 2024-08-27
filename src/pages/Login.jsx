import React, { useState } from 'react'
import { post } from '../services/ApiEndPoints';
import {toast} from 'react-hot-toast';


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, password);
        try {
            const request = await post('/api/auth/login', { email, password })
            const response = request.data;
            if(request.status == 200) {
                toast.success(response.message);
            }
            console.log(response);
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div className='sign-up-container'>
            <form className='sign-up-form'
                onSubmit={handleSubmit}
            >
                <h2>Login</h2>

                <label htmlFor='email'>Email:</label>
                <input type="email" autoComplete='off' placeholder='email'
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor='password'>Password:</label>
                <input type="password" autoComplete='off' placeholder='*******'
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type='submit' >Login</button>

                <span>don't have an account ?  <span to={'/signup'}>Sign up</span> </span>
            </form>
        </div>
    )
}
