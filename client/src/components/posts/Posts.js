import React from "react";
import Post from "./post/Post";
import "./Posts.css";
import { useSelector } from "react-redux";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post.id} post={post} setCurrentId={setCurrentId} />
      ))}
    </div>
  );
};

export default Posts;
