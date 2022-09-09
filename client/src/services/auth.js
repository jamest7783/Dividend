import Client from './api'

export const register=async (data)=>{
    try{
        const res=await Client.post('/api/investor/register',data)
        return res.data
    }catch(error){
        throw error
    }
}

export const logIn=async (data)=>{
    try{
        const res=await Client.post('/api/investor/login',data)
        return res.data
    }catch(error){throw error}
}

 