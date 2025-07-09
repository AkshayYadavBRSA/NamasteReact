import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => {
  const [para, setPara] = useState("");
  const [para1, setPara1] = useState([]);

  const onChangeEvent = (e) => {
    setPara(e.target.value);
  };

  const onClickEvent = () => {
    let newArray = [...para1, para];
    setPara1(newArray);
    setPara("");
  };

  return (
    <div className="App">
      

      <label htmlFor="Gender">Gender</label>
      <input type="checkbox" id="Gender" />

      <input type="text"  value = {para} onChange={onChangeEvent} />
      <button onClick={onClickEvent}>Button</button>
      <ol> 
      {para1.map((value, index) => (
        <li key={index} type="1">{value}</li>
))}
</ol>
    </div>
  );
}

// React 18+ root render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
