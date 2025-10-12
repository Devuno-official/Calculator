let Btn = function ({ symbol, showValHandle }) {
  return symbol.map((arr) => {
    const getButtonStyle = () => {
      // Top row buttons (C, (, ), <)
      if (arr === "C")
        return "bg-gradient-to-b from-rose-400 to-rose-500 hover:from-rose-300 hover:to-rose-400 active:from-rose-500 active:to-rose-600 text-white shadow-rose-500/30";
      if (arr === "(" || arr === ")" || arr === "<")
        return "bg-gradient-to-b from-zinc-400 to-zinc-500 hover:from-zinc-300 hover:to-zinc-400 active:from-zinc-500 active:to-zinc-600 text-white shadow-zinc-500/30";
      // Operator buttons (+, -, *, /, =)
      if (["+", "-", "*", "/"].includes(arr))
        return "bg-gradient-to-b from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400 active:from-blue-500 active:to-blue-600 shadow-blue-500/30";
      if (arr === "=")
        return "bg-gradient-to-b from-indigo-400 to-indigo-500 hover:from-indigo-300 hover:to-indigo-400 active:from-indigo-500 active:to-indigo-600 shadow-indigo-500/30";
      // Number buttons
      return "bg-gradient-to-b from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 active:from-gray-800 active:to-gray-900 shadow-black/20";
    };

    // Special styling for zero button
    const isZero = arr === "0";
    const buttonWidth = isZero ? "col-span-1" : "";

    return (
      <button
        key={arr}
        type="button"
        className={`${getButtonStyle()} ${buttonWidth}
                   aspect-square w-full min-h-[80px] sm:min-h-[70px]
                   flex items-center justify-center
                   text-white text-[28px] sm:text-[32px] font-medium
                   rounded-full
                   transition-all duration-200
                   shadow-lg hover:shadow-xl active:shadow
                   hover:-translate-y-0.5 active:translate-y-0
                   backdrop-blur-sm
                   border border-white/5
                   touch-manipulation
                   m-0 p-0`}
        onClick={showValHandle}
      >
        {arr}
      </button>
    );
  });
};

export default Btn;
