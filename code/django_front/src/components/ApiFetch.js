import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ApiFetch = () => {

  const [posts, setPosts] = useState([])
  const [id, setId] = useState(1)
  const [clicked, setClicked] = useState(false)

  const handlerClicked = () => {
    setClicked(!clicked)
  }

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => {
      setPosts(res.data)
    })

    // fetch('https://jsonplaceholder.typicode.com/posts', {method:'GET'})
    // .then(res => res.json())
    // .then(data => {
    //   setPosts(data)
    // })
  },[clicked])

  return (
    <div>
      <input type="text" value={id} onChange={evt=>setId(evt.target.value)} ></input><br />
      <button type='button' onClick={handlerClicked}>Get Post</button><br></br>
      {posts.title}
      <ul>
        {/* {
          posts.map(post => <li key={post.id}>{post.title}</li>)
        } */}

      </ul>
    </div>
  )
}

export default ApiFetch
