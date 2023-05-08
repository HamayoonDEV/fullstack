import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Posts from "./components/posts/Posts";
import Form from "./components/forms/Form";
import { getPost } from "./actions/posts";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

function App() {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPost());
  }, [currentId, dispatch]);
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="posts">
          <Posts setCurrentId={setCurrentId} />
        </div>
        <div className="forms">
          <Form currentId={currentId} setCurrentId={setCurrentId} />
        </div>
      </div>
    </div>
  );
}

export default App;
