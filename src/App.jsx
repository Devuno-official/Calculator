import { useState } from "react";
import Container from "./Components/Container";
import Btn from "./Components/Button";

const arr = [
  "C",
  "(",
  ")",
  "<",
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
  "0",
  ".",
  "/",
  "=",
];

export default function Calculator() {
  let [inputVal, setInputVal] = useState("");

  let showValHandle = (e) => {
    let clickVal = e.target.firstChild.data;
    if (clickVal === "=") {
      let evalute = eval(inputVal);
      let ansStr = evalute + "";
      setInputVal(ansStr);
    } else if (clickVal === "C") {
      setInputVal("");
    } else if (clickVal === "<") {
      setInputVal(inputVal.substring(0, inputVal.length - 1));
    } else {
      setInputVal(inputVal + clickVal);
    }
  };

  return (
    <Container>
      <div className="w-full h-full sm:h-auto bg-zinc-900 rounded-none sm:rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col">
        <div className="flex flex-col p-2 sm:p-3 md:p-4 flex-1">
          <input
            type="text"
            name="input"
            id="input"
            className="w-full h-20 sm:h-24 md:h-28 px-3 sm:px-4 md:px-6 
                                bg-zinc-900
                                text-right text-white text-3xl sm:text-4xl md:text-5xl font-light
                                border-none outline-none mb-2 sm:mb-3 md:mb-4"
            value={inputVal}
            readOnly
          />
          <div className="grid grid-cols-4 gap-1 sm:gap-2 md:gap-3 flex-1">
            <Btn symbol={arr} showValHandle={showValHandle} />
          </div>
        </div>
      </div>
    </Container>
  );
}
