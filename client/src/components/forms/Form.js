import React, { useEffect, useState } from "react";
import FileBase from "react-file-base64";

import "./Form.css";
import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tag: "",
    selectFile: "",
  });

  const handelSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setPostData({
      creator: "",
      title: "",
      message: "",
      tag: "",
      selectFile: "",
    });
  };
  return (
    <div className="Form">
      <form onSubmit={handelSubmit}>
        <label>{`${currentId ? "Editing" : "creating"}`}</label>
        <input
          type="text"
          placeholder="Creator"
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
          value={postData.creator}
        />
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          value={postData.title}
        />
        <textarea
          rows={5}
          cols={25}
          placeholder="description"
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
          value={postData.message}
        />
        <input
          type="text"
          placeholder="Tags(comma seprated)"
          onChange={(e) => setPostData({ ...postData, tag: e.target.value })}
          value={postData.tag}
        />
        <FileBase
          className="filebase"
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            setPostData({ ...postData, selectFile: base64 })
          }
        />
        <button type="submit" className="btn1">
          Submit
        </button>
        <button className="btn2" onClick={clear}>
          clear
        </button>
      </form>
    </div>
  );
};

export default Form;
