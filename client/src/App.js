import './App.css'
import {Routes,Route} from 'react-router-dom'
import {useState} from 'react'
import Search from './components/Search'
import Nav from './components/Nav'
import Canvas from './components/Canvas'

const App=()=>{

  const [authenticated,toggleAuthenticated]=useState(false)
  const [user,setUser]=useState(null)
  const [focus,setFocus]=useState(null)

  return(
    <div id='app'>
      <div id='header'>
        <Search />
        <Nav setFocus={setFocus}/> 
      </div>
      <Routes>
        <Route path='/' element={<Canvas 
          focus={focus}
          setFocus={setFocus}
        />}/>
      </Routes>
    </div>
  )
}

export default App;
