import {useState} from 'react'
import {register} from '../services/auth'

const Register=({setFocus})=>{

    const [form,setForm]=useState({email:'',password:''})
    const handleChange=(e)=>{setForm({...form,[e.target.name]:e.target.value})}
    const handleSubmit=async (e)=>{
        e.preventDefault()
        await register({email:form.email,initialPassword:form.password})
        setForm({email:'',password:''})
        setFocus('login')
    }

    return(
        <div id='register'>
            <div id='switch-auth-wrapper' style={{marginTop:'9%'}}>
                <div>Already have an account?</div>
                <button onClick={(e)=>{setFocus('login')}} id='sign-up'>
                    Sign In.
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
                    create account
                </button>
            </div>
        </div>
    )
}
export default Register