import {useState} from 'react'

const Register=({setFocus})=>{

    const [form,setForm]=useState({email:'',password:''})
    const handleChange=(e)=>{setForm({...form,[e.target.name]:e.target.value})}

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
                    onClick={(e)=>{setFocus('dashboard')}}
                    disabled={!form.email||!form.password}>
                    create account
                </button>
            </div>





        </div>
    )
}
export default Register