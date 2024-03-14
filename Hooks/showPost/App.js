import { useState } from "react";
import Post from "./Posts";

function App() {
  const [show, setShow] = useState(false);

  const showpost = () => {
    setShow(!show);
  };
  return (
    <>
      <button onClick={showpost}>click to show posts</button>
      {show && <Post />}
    </>
  );
}
export default App;
