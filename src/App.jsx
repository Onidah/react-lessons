import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Resporitaries from './pages/Resporitaries'
import RepoDetails from './pages/RepoDetails'
import Navbar from './components/Navbar'


function App() {
  

  return (
    <>
      <div className='container'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/repos' element={<Resporitaries/>}/>
          <Route path='/repos/:username/:repoName' element={<RepoDetails/>}/>

        </Routes>
      </div>
    </>
  )
}

export default App
