import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks'; // Update the path to your hooks file
import Post from './Post';
import PostForm from './PostForm';
import { fetchPostsAsync, selectPosts, selectStatus, Statuses, updatePostAsync } from './postSlice';

function Posts() {
  const posts = useAppSelector(selectPosts);
  const status = useAppSelector(selectStatus);
  const dispatch = useAppDispatch();

  const [postToEdit, setPostToEdit] = useState(0);

  useEffect(() => {
    dispatch(fetchPostsAsync());
  }, [dispatch]);

  function toggleEditForm(post_id?: number) {
    setPostToEdit(postToEdit === post_id ? 0 : post_id || 0);
  }

  function submitEdit(formData: any) {
    dispatch(updatePostAsync(formData));
    toggleEditForm();
  }

  let contents;

  if (status !== Statuses.UpToDate) {
    contents = <div>{status}</div>;
  } else {
    contents = (
      <div className="">
        <div>
          <h3>{status}</h3>
          <PostForm />
          {posts &&
            posts.length > 0 &&
            posts.map((post) => (
              <div key={post.id} style={{ margin: '5em' }}>
                <Post
                  dispatch={dispatch}
                  post={post}
                  toggleEditForm={() => toggleEditForm(post.id)}
                  postToEdit={postToEdit}
                  submitEdit={submitEdit}
                />
              </div>
            ))}
        </div>
      </div>
    );
  }

  return (
    <div className=''>
      <h1 className='grid justify-center font-bold text-2xl' >Posts</h1>
      {contents}
    </div>
  );
}

export default Posts;