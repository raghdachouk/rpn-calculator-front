import React, { useState } from "react";
import "./InputFields.style.css";

const InputFields = ({ onNumberInput, onOperationInput }) => {
  const [numberInput, setNumberInput] = useState("");
  const [operationInput, setOperationInput] = useState("");

  const handleNumberChange = (event) => {
    setNumberInput(event.target.value);
  };

  const handleOperationChange = (event) => {
    setOperationInput(event.target.value);
  };

  const handleNumberSubmit = (event) => {
    event.preventDefault();
    onNumberInput(Number(numberInput));
    setNumberInput("");
  };

  const handleOperationSubmit = (event) => {
    event.preventDefault();
    onOperationInput(operationInput);
    setOperationInput("");
  };

  return (
    <div className="container-inputs">
      <form onSubmit={handleNumberSubmit}>
        <input
          type="text"
          value={numberInput}
          onChange={handleNumberChange}
          placeholder="Enter a number"
        />
        <button type="submit">Push to Stack</button>
      </form>
      <form onSubmit={handleOperationSubmit}>
        <input
          type="text"
          value={operationInput}
          onChange={handleOperationChange}
          placeholder="Enter an operation (+, -, *, /)"
        />
        <button type="submit">Execute Operation</button>
      </form>
    </div>
  );
};

export default InputFields;
