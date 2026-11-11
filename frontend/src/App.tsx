import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [rank, setRank] = useState(0);
  const [place, setPlace] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    console.log("react amal", name, rank, place);
    axios
      .post("http://localhost:5000/user", { name, rank, place })
      .then(response => {
        console.log(response.data);
      });
    setName("");
    setRank(0);
    setPlace("");
  };
  return (
    <div>
      <h2>amal</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            onChange={e => {
              setName(e.target.value);
            }}
            type="text"
          />
        </div>
        <div>
          <label>Rank</label>
          <input
            onChange={e => {
              setRank(e.target.value);
            }}
            type="text"
          />
        </div>
        <div>
          <label>place</label>
          <input
            onChange={e => {
              setPlace(e.target.value);
            }}
            type="text"
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
