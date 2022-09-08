import './App.css'
import {Routes,Route} from 'react-router-dom'
import Canvas from './components/Canvas'
import Nav from './components/Nav'

const App=()=>{
  return(
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Canvas/>}/>
      </Routes>
    </div>
  )
}

export default App;
