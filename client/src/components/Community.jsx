import {useState,useEffect} from 'react'
import axios from 'axios'

const Community=({investor})=>{

    const [threads,setThreads]=useState([])
    const [insights,setInsights]=useState([])

    const getThreads=async ()=>{
        const res=await axios.get('http://localhost:3001/api/thread/all')
        setThreads(res.data)
    }
    const getInsights=async()=>{
        const res=await axios.get('http://localhost:3001/api/insight/all')
        setInsights(res.data)
    }
    useEffect(()=>{
        getThreads()
        getInsights()
    },[])
    const [form,setForm]=useState({author:investor._id,name:'',symbol:'',tag:'',textBody:''})
    const [insight,setInsight]=useState({author:investor._id,text:'',thread:0})
    const handleInsight=(e)=>{setInsight({...insight,[e.target.name]:e.target.value})}
    const handleChange=(e)=>{setForm({...form,[e.target.name]:e.target.value})}
    const createReply=async (e,thread)=>{
        e.preventDefault()
        setInsight({...insight,thread})
        const res=await axios.post('http://localhost:3001/api/insight/create',insight)
        console.log(res.data)
    }
    const handleSubmit=async (e)=>{
        e.preventDefault()
        const res=await axios.post('http://localhost:3001/api/thread/create',form)
        getThreads()
        getInsights()
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
                    {threads.map((thread)=>(
                        <div id='thread'>
                            <div>
                                <div id='thread-name'>{thread.name}</div>
                                <div>{thread.textBody}</div>
                                <button>upVote</button>
                                <button>downVote</button>
                                <div>
                                    <button onClick={(e)=>{createReply(e,thread._id)}}>
                                        reply
                                    </button>
                                    <textarea
                                        id='text'
                                        onChange={handleInsight}
                                        name='text'
                                        type='text'
                                        placeholder=''
                                        value={insight.value}
                                    ></textarea>   
                                </div>
                                {insights?.map((insight)=>(
                                    insight.thread===thread._id &&
                                    <div>{insight.text}</div>
                                ))}
                            </div> 
                        </div>
                    ))}
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
                            <textarea
                                id='text-body'
                                onChange={handleChange}
                                name='textBody'
                                type='textBody'
                                placeholder=''
                                value={form.value}
                                required
                            ></textarea>
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