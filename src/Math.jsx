import { useState } from "react";

const Math = () => {
  const [result, setResult] = useState(0);

  function add(num1, num2) {
    console.log("Adding");
    setResult(num1 + num2);
  }

  function sub(num1, num2) {
    console.log("Sub");
    setResult(num1 + num2)
  }

  function Div(num1, num2) {
    console.log("Div");
    setResult(num1 + num2)
  }

  function mod(num1, num2) {
    console.log("Div");
    setResult(num1 + num2)
  }

  function clear() {
    console.log("clear");
    setResult(0)
  }
  return (
    <div>
      <h1>Calculator</h1>
      <p>Result: {result}</p>
      <div className="flex justify-center items-center gap-2">
        <button
          className="border border-white p-1"
          onClick={() => {
            add(3,5);
          }}
        >
          Add
        </button>
        <button
        className="border border-white p-1"
          onClick={() => {
            sub(34,55);
          }}
        >
          sub
        </button>
        <button
        className="border border-white p-1"
          onClick={() => {
            Div(66,2);
          }}
        >
          Div
        </button>
        <button
        className="border border-white p-1"
          onClick={() => {
            mod(44,5);
          }}
        >
          mod
        </button>
        <button
        className="border border-white p-1"
          onClick={() => {
            clear(0);
          }}
        >
          clear
        </button>
      </div>
    </div>
  );
};

export default Math;
