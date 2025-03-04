import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  const endpoint = 'localhost:3000/api/posts'

  const [ posts, setPosts ] = useState([]);


  const fetchPost = () => {
    axios.get( endpoint ).then( (res) => setPosts(res.data)).catch (err => console.error(err));
        
  };

  useEffect(fetchPost, [])

  

  return (
    <>
      <h1>Posts</h1>
      
     
     
     
    </>
  )
}

export default App
