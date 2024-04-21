i
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [mychoice, setMychoice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`your name is ${name} and age is ${age} and car is ${mychoice}`);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Age
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <select value={mychoice} onChange={(e) => setMychoice(e.target.value)}>
          <option value="Baleno">Baleno</option>
          <option value="siaz">Siaz</option>
          <option value="lambo">Lambo</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

//Capgemini interview question on checkbox(3 max)
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [checkedCount, setCheckedCount] = useState(0);

  const handleCheckboxChange = () => {
    setCheckedCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          disabled={checkedCount === 3}
        />
        Checkbox 1
      </label>
      <label>
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          disabled={checkedCount === 3}
        />
        Checkbox 2
      </label>
      <label>
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          disabled={checkedCount === 3}
        />
        Checkbox 3
      </label>
      <label>
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          disabled={checkedCount === 3}
        />
        Checkbox 4
      </label>
      <label>
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          disabled={checkedCount === 3}
        />
        Checkbox 5
      </label>
    </div>
  );
}
