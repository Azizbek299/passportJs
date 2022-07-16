import React from 'react'
import { Card } from '../components/Card'
import {posts} from '../data.js'

export const Home = () => {
  return (
    <div className='home'>
        {posts.map((post) => {
            return(
                <Card post={post} key={post.id}/>
            )
        })}
    </div>
  )
}
