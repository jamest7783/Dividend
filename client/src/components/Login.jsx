import {useState} from 'react'

const Login=({setFocus})=>{

    const [form,setForm]=useState({email:'',password:''})
    const handleChange=(e)=>{setForm({...form,[e.target.name]:e.target.value})}

    return(
        <div id='login'>
            <div id='login-form-icon'>logo</div>
            <div id='switch-to-register-wrapper'>
                <div>Don't have an account?</div>
                <button onClick={(e)=>{setFocus('register')}} id='sign-up'>
                    Sign Up.
                </button>
            </div>
            <div id='login-form-wrapper'>
                <div id='login-input-wrapper'>email
                    <input
                        onChange={handleChange}
                        name='email'
                        type='email'
                        placeholder='email'
                        value={form.value}
                        required
                    />
                </div>
                <div id='login-input-wrapper'>password
                    <input
                        onChange={handleChange}
                        name='password'
                        type='password'
                        placeholder='password'
                        value={form.value}
                        required
                    />
                </div>
                <button disabled={!form.email||!form.password}>
                    log in
                </button>
            </div>
        </div>
    )
}
export default Login