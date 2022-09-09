import {useState} from 'react'
import {register} from '../services/auth'
import axios from 'axios'

const Register=({setFocus})=>{

    const [form,setForm]=useState({user_name:'',email:'',password:'',confirm_password:''})
    const handleChange=(e)=>{setForm({...form,[e.target.name]:e.target.value})}
    const handleSubmit=async (e)=>{
        e.preventDefault()
        const portfolio=await axios.post('http://localhost:3002/api/portfolio/create')
        await register({
            user_name:form.user_name,
            email:form.email,
            initialPassword:form.password,
            portfolios:[portfolio.data.id]
        })
        setForm({user_name:'',email:'',password:'',confirm_password:''})
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
                <div id='auth-input-wrapper'>user name
                    <input
                        onChange={handleChange}
                        name='user_name'
                        type='user_name'
                        placeholder='user_name'
                        value={form.value}
                        required
                    />
                </div>
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
                <div id='auth-input-wrapper'>confirm password
                    <input
                        onChange={handleChange}
                        name='confirm_password'
                        type='confirm_password'
                        placeholder='confirm_password'
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