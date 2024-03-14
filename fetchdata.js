import { useEffect, useState } from "react";

export default function App() {
  const [products, setProduct] = useState([]);
  const [loading, setloading] = useState(true);
  const [err, seterr] = useState(false);

  const api = "https://dummyjson.com/products";

  useEffect(() => {
    const fetchapi = async () => {
      setloading(true);
      await fetch(api)
        .then((result) => result.json())
        .then((result) => {
          setProduct(result.products);
          setloading(false);
        })
        .catch((err) => {
          seterr(true);
          setloading(false);
          setProduct(false);
        });
    };
    fetchapi();
  }, []);

  return (
    <div className="App">
      {err && "Error: Not found"}
      {loading && "Loading....."}
      {!loading &&
        products?.map((value) => {
          return (
            <>
              <p key={val.id}> {val.title}</p>
              <img src={val.thumbnail} alt="image" />
            </>
          );
        })}
    </div>
  );
}

//Cleaning Timeouts
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCount((prevCount) => prevCount + 1);
    }, 3000);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return <div>Count: {count}</div>;
}

