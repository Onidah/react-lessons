import {Routes,Route,Link} from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Courses from './pages/Courses'
import NotFound from './pages/NotFound'
import Contact from './pages/Contact'

function App() {
  
  return (
    <>
    <nav style={{
      display:"flex",
      gap:"20px",
      fontSize:"30px",
      backgroundColor:"lightyellow",
      padding:"20px",
    }}>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/courses'>Courses</Link>
      <Link to='/contact'>Contact</Link>
    </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/courses' element={<Courses/>}/>
         <Route path='/contact' element={<Contact/>}/>
         <Route path='*' element={<NotFound/>}/>
         
      </Routes>
    </>
  )
}

export default App
