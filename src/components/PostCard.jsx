
import React from 'react';
import '../style/PostCard.css';

const PostCard = (props) =>  {
    return (
        <div className='post-column'>

            <h3>User Id:  {props.userId}</h3>

            <p>Id:  {props.id}</p>
            <p>Title: {props.title}</p>
            <p>{props.body}</p>
            
        </div>
    );
}

export default PostCard;