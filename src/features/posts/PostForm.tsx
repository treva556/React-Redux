import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks'; // Update the path to your hooks file
import { createPostAsync } from './postSlice';

function PostForm() {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  function submitHandler(e: React.FormEvent) {
    e.preventDefault();
    const formData = {
      post: { title, body },
    };
    dispatch(createPostAsync(formData));
    resetState();
  }

  function resetState() {
    setTitle('');
    setBody('');
  }

  return (
    <div className='grid justify-center'>
        <details>
       
        <summary className=' bg-gray-200 rounded w-24 '>Add Posts</summary>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="form-control text-start border border-black"
          placeholder='Title...'
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="form-control text-start border border-black mx-4"
          name="body"
          placeholder='Content...'
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit" className=' border p-2 border-black rounded-lg hover:bg-black hover:text-white'>Submit</button>
      </form>
      </details>
    </div>
  );
}

export default PostForm;