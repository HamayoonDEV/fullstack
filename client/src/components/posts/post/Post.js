import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";
import "./Post.css";

const Post = ({ post, setCurrentId }) => {
  return (
    <div className="post">
      {/* post top content part!!! */}
      <div
        className="post-top"
        style={{
          backgroundImage: `url(${post.selectFile})`,
        }}
      >
        <div className="post-top-content">
          <div className="post-top-left-content">
            <h1>{post.creator}</h1>
            <span>{moment(post.createdAt).fromNow()}</span>
          </div>
          <div className="icon" onClick={() => setCurrentId(post._id)}>
            ...
          </div>
        </div>
      </div>
      {/*Post body part */}
      <div className="post-body">
        <span className="tags">{post.tag.map((tag) => `#${tag} `)}</span>
        <h1 className="title">{post.title}</h1>
        <p className="message">{post.message}</p>
      </div>
      {/*post footer!!! */}

      <div className="post-footer">
        <div className="like" onClick={() => {}}>
          <ThumbUpIcon style={{ color: "#4267b2" }} />
          <span>Like {post.likeCount}</span>
        </div>
        <div className="delete" onClick={() => {}}>
          <DeleteIcon style={{ color: "#4267b2" }} />
          <span>Delete</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
