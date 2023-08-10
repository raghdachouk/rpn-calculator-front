import React, { useState, useEffect } from "react";
import StackItem from "./components/StackItem/StackItem";
import InputFields from "./components/InputFields/InputFields";
import "./App.css";

//add fake data for testing the app
const fakeStacks = [
  { id: 1, elements: [5, 10, 15] },
  { id: 2, elements: [3, 6, 9] },
  { id: 3, elements: [2, 5] },
];

function App() {
  const [stacks, setStacks] = useState([]);
  const [selectedStack, setSelectedStack] = useState(null);

  useEffect(() => {
    setStacks(fakeStacks);
  }, []);

  // creat new stack with an unique id
  const addStack = () => {
    setStacks((prev) => [
      ...prev,
      { id: `${Math.floor(Math.random() * 1000)}`, elements: [] },
    ]);
  };
  const handleNumberInput = (number) => {
    setStacks((prev) =>
      prev?.map((item) => {
        if (item.id === selectedStack.id)
          return { ...item, elements: [...item.elements, number] };
        else return { ...item };
      })
    );
  };

  const handleOperationInput = (operation) => {
    console.log("operation: ", operation);
    if (
      operation === "+" ||
      operation === "-" ||
      operation === "*" ||
      operation === "/"
    )
      setStacks((prev) =>
        prev?.map((item) => {
          if (item.id === selectedStack.id) {
            if (item.elements.length > 1) {
              const value1 = item.elements.pop();
              const value2 = item.elements.pop();
              const result = eval(`${value1}${operation}${value2}`);
              return { id: item.id, elements: [...item.elements, result] };
            } else return { ...item };
          } else return { ...item };
        })
      );
  };

  return (
    <div className="App">
      <h1>RPN Calculator</h1>
      <div className="App_create-stack">
        <h3>Add new stack: </h3>
        <button onClick={addStack}>Create stack</button>
      </div>
      {selectedStack && (
        <InputFields
          onNumberInput={handleNumberInput}
          onOperationInput={handleOperationInput}
        />
      )}
      <div className="App-container_stacks">
        {stacks.map((stack) => (
          <StackItem
            key={stack.id}
            stack={stack}
            setSelectedStack={setSelectedStack}
            selectedStack={selectedStack}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
