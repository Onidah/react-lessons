import {Routes,Route,Link} from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Courses from './pages/Courses'
import NotFound from './pages/NotFound'

function App() {
  
  return (
    <>
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/courses'>Courses</Link>
    </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/courses' element={<Courses/>}/>
         <Route path='*' element={<NotFound/>}/>
         
      </Routes>
    </>
  )
}

export default App
