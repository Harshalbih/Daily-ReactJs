import { useEffect, useState } from "react";

export default function App() {
  const [products, setProduct] = useState([]);
  const [loading, setloading] = useState(true);
  const [err, seterr] = useState(false);

  const api = "https://dummyjson.com/products";

  useEffect(() => {
    function fetchapi() {
      setloading(true);
      fetch(api)
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
    }
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
          )
        })}
    </div>
  );
}
