import { useState } from "react";

const Math = () => {
  const [math, setMath] = useState(0);

  function add() {
    console.log("Adding");
    return 22 + 44;
  }

  function sub() {
    console.log("Sub");
    return 67 * 8;
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
      <p>{math}</p>
      <div className="flex justify-center items-center gap-2">
        <button
          className="border border-white p-1"
          onClick={() => {
            add();
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
