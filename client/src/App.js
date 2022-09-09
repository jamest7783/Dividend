import './App.css'
import {Routes,Route} from 'react-router-dom'
import {useState,useEffect} from 'react'
import {checkSession} from './services/auth'
import Search from './components/Search'
import Nav from './components/Nav'
import Canvas from './components/Canvas'

const App=()=>{

  const [authenticated,toggleAuthenticated]=useState(false)
  const [investor,setInvestor]=useState(null)
  const [focus,setFocus]=useState(null)
  const [profile,setProfile]=useState({})
  const checkToken=async ()=>{
    const investor=await checkSession()
    setInvestor(investor)
    toggleAuthenticated(true)
  }
  useEffect(()=>{
    const token=localStorage.getItem('token')
    if(token){checkToken()}
  },[])

  return(
    <div id='app'>
      <div id='header'>
        <Search />
        <Nav 
          setFocus={setFocus}
          authenticated={authenticated}
        /> 
      </div>
      <Routes>
        <Route path='/' element={<Canvas 
          setInvestor={setInvestor}
          investor={investor}
          toggleAuthenticated={toggleAuthenticated}
          focus={focus}
          setFocus={setFocus}
        />}/>
      </Routes>
    </div>
  )
}

export default App;
