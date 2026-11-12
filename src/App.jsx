import { Route,Routes,Link } from "react-router-dom"
import Home from "./pages/Home"
import Post from "./pages/Post"
import Comments from "./pages/Comments"
import Photos from "./pages/Photos"

function App() {
 
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/post">Post</Link>
        <Link to="/comments">Comments</Link>
        <Link to="/photos">Photos</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/post" element={<Post/>}/>
        <Route path="/comments" element={<Comments/>}/>
        <Route path="/photos" element={<Photos/>}/>
      </Routes>
    </>
  )
}

export default App
