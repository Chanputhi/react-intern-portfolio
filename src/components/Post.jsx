
import React, {useEffect, useState} from 'react';
import '../style/PostCard.css';
import PostCard from './PostCard';
import postList from './postList';

function postComponent (post, i) {
  return <PostCard 
  key={i}
  userId = {post.userId}
  id = {post.id}
  title = {post.title}
  body = {post.body} />
      
}

function Post() {

  const [searchTerm, setSearchTerm] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(()=>{
    console.log('useEffect called');
    fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json()).then(data => setPosts(post => {post=data})).catch(e=>console.log("e:", e));
    if(posts.length===0){
      setPosts(postList);
    }
  },[])

    return (
      <div>
  
        <h1>Post</h1>

        {/* Search Bar Component */}
        <br />
        <div className='filterSearchBar'>
                <form>
                    <span>Search Post: </span>
                    <input type='text' 
                    value={searchTerm}
                    placeholder='Search and Filter Post by User id' 
                    onChange={(event) => {
                      console.log(event.target.value);
                        setSearchTerm(event.target.value);  
                    }}
                    />
            </form>
        </div>

        {/* Post Component */}
        <div className='post-row'>

          {console.log("posts:", posts)}

            { 
            // posts
            postList
            .filter((post) => {
              if (searchTerm === "") {
                return post
              }
              else if (post.userId.toString().includes(searchTerm)) {
                return post
              }
              else {return null} 
              })
            .map(postComponent)
            }
            
        </div>
  
      </div>
    );
  }
  
  export default Post;