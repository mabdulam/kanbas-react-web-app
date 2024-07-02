import React, { useState } from "react";

export default function ArrayStateVariable() {
    const [array, setArray] = useState([1, 2, 3, 4, 5]);
    const addElement = () => {
      setArray([...array, Math.floor(Math.random() * 100)]);
    };
    const deleteElement = (index: number) => {
      setArray(array.filter((item, i) => i !== index));
    };  

  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button 
        onClick={addElement}
        id="wd-add-element-click"
        className="btn btn-success mb-2"
            >
            Add Element
            </button>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {array.map((item, index) => (
          <li key={index} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px", border: "1px solid #ddd", margin: "0px 0" }}>
            <span>{item}</span>
            <button 
              onClick={() => deleteElement(index)} 
              id="wd-delete-element-click" 
              className="btn btn-danger"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr/>
    </div>
  );
}

