import { useEffect,useState } from "react"

function Comments() {
const[comments,setComments]=useState([]);

 useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response)=>response.json())
  .then((res)=>{
    console.log(res);
    setComments(res)
  })
 },[])

  return (
    <div>
      {
        comments.map((comment)=>(
          <div key={comment.id}>
            {comment.name}
            {comment.title}
            {comment.postId}
          </div>
        ))
      }
    </div>
  )
}

export default Comments