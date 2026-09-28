
const technologies=["react","html","js"];
const students=[
  {
    id:1,
    firstName:"student 1",
    age:16
  },
  {
    id:2,
    firstName:"student 2",
    age:17
  },
  {
    id:3,
    firstName:"student 3",
    age:18
  },
]
function App() {

  return (
    <>
    {
   technologies.map((technology)=>(
    <p key={technology}>{technology}</p>
   ))
    }

    {
      students.map((student)=>(
        <h1 key={student.firstName}>{student.firstName}</h1>
        
      ))
    }
 
    </>
  )
}

export default App
