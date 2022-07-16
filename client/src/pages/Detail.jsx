import React from 'react'
import { useLocation } from 'react-router-dom'
import {posts} from '../data.js'    

export const Detail = () => {
  
  const location = useLocation()
  const path = location.pathname.split('/')[2]

  const post = posts.find((item) => item.id === Number(path))
  
 

  return (
    <div className='post'>
        <img src={post.img} alt="postImg" className='postImg'/>
        <h2 className="postTitle">{post.title}</h2>
        <p className="postDesc">{post.desc}</p>
        <p className="postLongDesc">{post.longDesc}</p>
    </div>
  )
}
