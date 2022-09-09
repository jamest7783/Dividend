import Client from './api'

export const register=async (form)=>{
    try{
        const res=await Client.post('/api/investor/register',form)
        return res.data
    }catch(error){throw error}
}
export const logIn=async (form)=>{
    try{
        const res=await Client.post('/api/investor/login',form)
        localStorage.setItem('token',res.data.token)
        return res.data.investor
    }catch(error){throw error}
}
export const checkSession=async ()=>{
    try{
        const res=await Client.get('api/investor/check-session')
    }catch(error){throw error}
}


 