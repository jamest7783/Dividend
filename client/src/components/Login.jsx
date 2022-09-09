import {useState} from 'react'
import {logIn} from '../services/auth'

const Login=({setFocus,setInvestor,toggleAuthenticated})=>{

    const [form,setForm]=useState({email:'',password:''})
    const handleChange=(e)=>{setForm({...form,[e.target.name]:e.target.value})}
    const handleSubmit=async (e)=>{
        e.preventDefault()
        const payload=await logIn({email:form.email,passwordInput:form.password})
        setForm({email:'',password:''})
        setInvestor(payload)
        toggleAuthenticated(true)
        setFocus('dashboard')
    }

    return(
        <div id='login'>
            <div id='login-form-icon'>logo</div>
            <div id='switch-auth-wrapper'>
                <div>Don't have an account?</div>
                <button onClick={(e)=>{setFocus('register')}} id='sign-up'>
                    Sign Up.
                </button>
            </div>
            <div id='auth-form-wrapper'>
                <div id='auth-input-wrapper'>email
                    <input
                        onChange={handleChange}
                        name='email'
                        type='email'
                        placeholder='email'
                        value={form.value}
                        required
                    />
                </div>
                <div id='auth-input-wrapper'>password
                    <input
                        onChange={handleChange}
                        name='password'
                        type='password'
                        placeholder='password'
                        value={form.value}
                        required
                    />
                </div>
                <button 
                    onClick={(e)=>{handleSubmit(e)}}
                    disabled={!form.email||!form.password}>
                    log in
                </button>
            </div>
        </div>
    )
}
export default Login