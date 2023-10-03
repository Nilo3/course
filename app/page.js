"use client";

import { useEffect } from 'react';

// Resto de tus importaciones
import { useState } from 'react';
import { API } from 'aws-amplify';
import { listPosts } from '@/src/graphql/queries';




export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const postData = await API.graphql({
      query: listPosts,
    });
    setPosts(postData.data.listPosts.items);
  }

  return (
    <div>
      <h1 className="text-4xl text-cyan-500  font-bold underline">My Posts</h1> 
      {
        posts.map((post, index) => (
          <p key={index}> {post.title}</p>
        ))
      }
    </div>
  );
}
