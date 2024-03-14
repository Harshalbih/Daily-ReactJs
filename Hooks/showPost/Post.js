import { useState, useEffect } from "react";

function Post() {
  const [post, setPost] = useState([]);
  const [error, setEroor] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("https://jsonplaceholder.typicode.com/posts", { signal: signal })
      .then((resp) => resp.json())
      .then((data) => setPost(data))
      .catch((err) => setEroor(err));
  }, []);

  return (
    <div>
      {!error ? (
        post.map((post) => <ul key={post.id}>{post.title}</ul>)
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
}
export default Post;
