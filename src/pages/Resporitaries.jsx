import React, { useEffect, useState } from "react";
import RepoCard from './components/RepoCard'

function Resporitaries() {
  const [username, setUsername] = useState("Onidah");
  const [repos, setRepos] = useState([]);
  const [errors, setErrors] = useState("");

  const getRepos = () => {
    fetch(`https://api.github.com/users/${username}?tab=repositories`)
    .then((res)=>{
      if(!res.ok){
        throw new Error("github is not working")
      }
      return rex.json()
    }) .then((data)=>setRepos(data))
    .catch((error)=>setErrors(error))
  };

  useEffect(()=>{
    getRepos();
  },[])


  return <div>
    <h1>Find Repos</h1>
    <div className="search">
      <input type="text" value={username} onChange={((e)=>e.target.value)} />
      <button onClick={getRepos}>Search</button>
    </div>
    <div className="repo-grid">
      {
        repos.map((repo)=>{
          <RepoCard repo={repo} key={repo.id}/>
        })
      }
    </div>
  </div>;
}

export default Resporitaries;
