import {useState,useEffect} from 'react'
import axios from 'axios'

const Community=({investor})=>{

    const [threads,setThreads]=useState([])
    const [form,setForm]=useState({author:investor._id,name:'',symbol:'',tag:''})
    const handleChange=(e)=>{setForm({...form,[e.target.name]:e.target.value})}
    const handleSubmit=async (e)=>{
        e.preventDefault()
        const res=await axios.post('http://localhost:3001/api/thread/create',form)
        console.log(res)
    }

    return(
        <div id='glass'>
            <div id='trending'>
                <div className='trending-tile'></div>
                <div className='trending-tile'></div>
                <div className='trending-tile'></div>
                <div className='trending-tile'></div>
                <div className='trending-tile'></div>
            </div>
            <div id='thread-container'>
                <div id='threads'>
                    <div id='thread-nav'>
                        <div id='thread-search'>
                            <input id='thread-search-input'></input>
                            <button className='thread-button'>search</button>
                            <button className='thread-button'>top</button>
                            <button className='thread-button'>hot</button>
                        </div>
                    </div>
                    <div id='thread'></div>
                    <div id='thread'></div>
                    <div id='thread'></div>
                    <div id='thread'></div>
                    <div id='thread'></div>
                    <div id='thread'></div>
                    <div id='thread'></div>
                    <div id='thread'></div>
                    <div id='thread'></div>
                    <div id='thread'></div>
                </div>
                <div id='top-performers'>
                    <div id='create-thread'>
                        <form>
                            <input
                                onChange={handleChange}
                                name='name'
                                type='name'
                                placeholder='name'
                                value={form.value}
                                required
                            ></input>
                            <input
                                onChange={handleChange}
                                name='symbol'
                                type='symbol'
                                placeholder='symbol'
                                value={form.value}
                                required
                            ></input>
                            <input
                                onChange={handleChange}
                                name='tag'
                                type='tag'
                                placeholder='tag'
                                value={form.value}
                                required
                            ></input>
                            <button 
                                onClick={(e)=>{handleSubmit(e)}}
                                >create thread
                            </button>
                        </form>
                    </div>
                    <div className='top-performer'></div>
                    <div className='top-performer'></div>
                </div>
            </div>

        </div>
    )
}
export default Community