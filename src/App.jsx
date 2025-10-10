import { useState } from "react";
import Container from "./Components/Container";
import Btn from "./Components/Button";

const arr = [
  "C",
  "(",
  ")",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "00",
  "0",
  ".",
  "=",
];

export default function Calculator() {
  let [inputVal, setInputVal] = useState("");

  let showValHandle = (e) => {
    let clickVal = e.target.firstChild.data;
    if (clickVal === "=") {
      let ansStr = eval(inputVal) + "";
      setInputVal(ansStr);
    } else if (clickVal === "C") {
      setInputVal("");
    } else {
      setInputVal(inputVal + clickVal);
    }
  };

  const removeCharHandle = (e) => {
    if (e.key === "Backspace") {
      inputVal = inputVal.substring(0, inputVal.length - 1);
      setInputVal(inputVal);
    }
  };

  return (
    <Container>
      <div className="w-full bg-zinc-900 rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.3)] overflow-hidden">
        <div className="flex flex-col p-3 sm:p-4">
          <input
            type="text"
            name="input"
            id="input"
            className="w-full h-24 px-4 sm:px-6 
                                bg-zinc-900
                                text-right text-white text-4xl sm:text-5xl font-light
                                border-none outline-none mb-3 sm:mb-4"
            value={inputVal}
            onKeyDown={removeCharHandle}
          />
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            <Btn symbol={arr} showValHandle={showValHandle} />
          </div>
        </div>
      </div>
    </Container>
  );
}
