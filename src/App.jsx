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
      <div className="w-full h-full bg-gradient-to-b from-gray-900 to-black sm:rounded-3xl overflow-hidden flex flex-col">
        <div className="flex-1 sm:flex-none flex flex-col">
          <div className="flex-1 sm:h-40 flex items-end justify-end px-6 pb-4 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm">
            <input
              type="text"
              name="input"
              id="input"
              className="w-full bg-transparent
                        text-right text-white text-5xl sm:text-6xl font-light
                        border-none outline-none"
              value={inputVal}
              readOnly
            />
          </div>
          <div className="grid grid-cols-4 gap-3 p-4 bg-gradient-to-b from-gray-900/50 to-black/50 backdrop-blur-md">
            <Btn symbol={arr} showValHandle={showValHandle} />
          </div>
        </div>
      </div>
    </Container>
  );
}
