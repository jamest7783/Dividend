import './App.css'
import {Routes,Route} from 'react-router-dom'
import Canvas from './components/Canvas'

const App=()=>{
  return(
    <div>
      <Routes>
        <Route path='/' element={<Canvas/>}/>
      </Routes>
    </div>
  )
}

export default App;
