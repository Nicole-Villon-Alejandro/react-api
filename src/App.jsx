import axios from "axios"
import { useEffect, useState } from "react"

function App() {

  const endpoint = 'http://localhost:3000/api/posts'

  const [ posts, setPosts ] = useState([]);


  const fetchPost = () => {
    axios.get( endpoint ).then( (res) => setPosts(res.data)).catch (err => console.error(err));
        
  };

  useEffect(fetchPost, [])

  

  return (
    <>
      <h1>Posts</h1>

     <div className="container">
      <div className="table-responsive">
        <table className="table table-primary">
          <thead>
            <tr>
              <th scope="col">
                Id
              </th>
              <th scope="col">Title</th>
              <th scope="col">Image</th>
            </tr>
          </thead>
          <tbody>
            { posts.map((elem) => {
              return (
                <tr key={elem.id}>
                  <td>
                    {elem.id}
                  </td>
                  <td>{elem.title}</td>
                  <td>{elem.image}</td>
                </tr>
              ); 
            }
            )
            }

          </tbody>

        </table>
      </div>
     </div>






      
     
     
     
    </>
  )
}

export default App
