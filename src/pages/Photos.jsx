import { useEffect,useState } from "react"

function Photos() {
const[photos,setPhotos]=useState([]);

 useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response)=>response.json())
  .then((res)=>{
    console.log(res);
    setPhotos(res)
  })
 },[])

  return (
    <div>
      {
        photos.map((photo)=>(
          <div key={photo.id}>
            {photo.id}
            {photo.title}
            {photo.albumId}
          </div>
        ))
      }
    </div>
  )
}

export default Photos