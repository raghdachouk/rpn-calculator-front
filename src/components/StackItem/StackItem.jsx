import React from "react";
import "./StackItem.style.css";

const StackItem = ({ stack, setSelectedStack, selectedStack }) => {
  return (
    <div className="containerStack">
      <button
        className={selectedStack?.id === stack.id && "containerStack_selected"}
        onClick={() => setSelectedStack(stack)}
      >
        <h2>Stack {stack?.id}</h2>
        <ul>
          {stack?.elements?.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </button>
    </div>
  );
};

export default StackItem;
