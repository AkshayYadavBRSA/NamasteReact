import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

function AppPa() {
  const [para, setpara] = useState(""); // Input field value
  const [para1, setpara1] = useState([]); // List of items

  const Onchnageevent = (e) => {
    setpara(e.target.value);
  };

  const Onclickbutton = () => {
    if (para.trim() !== "") {
      setpara1( [...para1, para]);
      setpara("");
    }
  };

  const handleRemove = (indexToRemove) => {
    // Remove the item by filtering out its index
    setpara1(para1.filter((_, index) => index !== indexToRemove));
    
  };

  const OnClickListItem = (item) => {
    setpara(item); // Optional: allow clicking an item to edit it in input
  };

  return (
    <div>
      <label>Input Field</label>
      <input
        type="text"
        placeholder="Enter Text"
        onChange={Onchnageevent}
        value={para}
      />
      <button onClick={Onclickbutton}>Add Item</button>

      <ul>
        {para1.map((item, index) => (
          <li key={index}>
            <span onClick={() => OnClickListItem(item)}>{item}</span>
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppPa />);
