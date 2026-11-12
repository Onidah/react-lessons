import { useEffect,useState } from "react"

function Post() {
const[posts,setPosts]=useState([]);

 useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response)=>response.json())
  .then((res)=>{
    console.log(res);
    setPosts(res)
  })
 },[])

  return (
    <div>
      {
        posts.map((post)=>(
          <div key={post.id}>
            {post.userId}
            {post.title}
            {post.id}
          </div>
        ))
      }
    </div>
  )
}

export default Post