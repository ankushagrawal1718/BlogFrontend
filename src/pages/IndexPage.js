import React, { useEffect, useState } from 'react';
import Post from "../Post";
import { BASE_URL } from '../backendUrl';

export default function IndexPage(){
  const [posts,setPosts] = useState([]);

  useEffect(()=>{
    
    fetch(BASE_URL+'/post').then(response=>{
      response.json().then(posts=>{
        setPosts(posts);
      });
    });
  },[])
  return (
    <div>
        {posts.length>0 && posts.map(post=>(
          <Post {...post}/>
        ))}
    </div>
  )
}

