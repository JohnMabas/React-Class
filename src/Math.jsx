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

  function Div() {
    console.log("Div");
    return 44 / 55;
  }

  function mod() {
    console.log("Div");
    setMath(55 % 22);
  }

  function clear() {
    console.log("clear");
    return 0;
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
            sub();
          }}
        >
          sub
        </button>
        <button
        className="border border-white p-1"
          onClick={() => {
            Div();
          }}
        >
          Div
        </button>
        <button
        className="border border-white p-1"
          onClick={() => {
            mod();
          }}
        >
          mod
        </button>
        <button
        className="border border-white p-1"
          onClick={() => {
            clear();
          }}
        >
          clear
        </button>
      </div>
    </div>
  );
};

export default Math;
