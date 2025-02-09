"use client"
import React from 'react';
import { useState } from 'react';
const CommentSection = () => {
    const [comment,setComment] = useState('');
    const [comments,setComments] = useState<string[]>([]);

    const addComment = () => {
        if(comment.trim()!== ""){
            setComments([...comments,comment]);
            setComment("");
        }
    }
  return (
    <div className='bg-gray-100 p-6 max-w-md mx-auto rounded-lg shadow-md mt-52'>
        <h1 className=' mb-4 text-center text-2xl font-bold text-green-700'>Comment Section</h1>
        <input
        type="text"
        value={comment}
        onChange={(e)=>setComment(e.target.value)}
        placeholder='write your comment...'
        className='border border-gray-300 rounded-md w-full p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500  ' 
        />
        <button 
        onClick={addComment}
        className='bg-green-500 text-white w-full py-2 rounded-md hover:bg-green-600 transition duration-300'>Add Comment</button>
       <div className="mt-6">
        <h2 className='text-lg font-semibold mb-2 text-gray-700'>All Comments:</h2>
        {comments.length === 0 ? (<p>No comments yet. Be the first to comment!</p>)
        : (
          <ul className='list-disc pl-5 space-y-2'>
            {comments.map((cmt,index)=>(
              <li key={index} className='text-gray-800'>{cmt}</li>
            ))}
          </ul>
        )}
       </div>
    </div>
  )
}

export default CommentSection
