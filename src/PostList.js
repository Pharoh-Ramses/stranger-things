import React, { useState, useEffect } from 'react';
import { getPosts } from './api';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
          const resp = await fetch(
            "https://strangers-things.herokuapp.com/api/2112-ftb-et-web-pt/posts"
          );
    
          const data = await resp.json();
          console.log(data.data.posts);
          setPosts(data.data.posts);
        };
        getPosts();
      }, []);

    return (
        <div>
            {posts.map(post =>
                <div key={post._id}>
                    <h2>{post.title}</h2>
                    <p>{post.description}</p>
                </div>
            )}
        </div>
    );
};

export default PostList;