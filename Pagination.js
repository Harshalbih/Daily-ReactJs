import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [todo, setTodo] = useState([]);
  const [todosperpage, settodoperpage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const numberofpages = Math.ceil(todo.length / todosperpage);
  const pages = [...Array(numberofpages).keys()].map((i) => i + 1);

  const indexofLastTodo = currentPage * todosperpage; //4rthpage * 10=40
  const indexofFirstTodo = indexofLastTodo - todosperpage; //30
  const visiblePages = todo.slice(indexofFirstTodo, indexofLastTodo);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);
  return (
    <div className="App">
      {visiblePages.map((val) => (
        <p key={val.id}>{val.title}</p>
      ))}
      <p>
        {pages.map((page) => (
          <span
            key={page}
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page} |{" "}
          </span>
        ))}
      </p>
    </div>
  );
}
