import './App.css'
import {Routes,Route} from 'react-router-dom'
import Nav from './components/Nav'
import Landing from './pages/Landing'

const App=()=>{
  return(
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route/>
      </Routes>
    </div>
  )
}

export default App;
