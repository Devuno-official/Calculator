let Btn = function ({ symbol, showValHandle }) {
  return symbol.map((arr) => {
    const getButtonStyle = () => {
      if (arr === "C") return "bg-zinc-600 hover:bg-zinc-700";
      if (arr === "=") return "bg-orange-500 hover:bg-orange-600";
      if (["+", "-", "*", "/", "(", ")", "<"].includes(arr))
        return "bg-orange-500 hover:bg-orange-600";
      return "bg-zinc-800 hover:bg-zinc-700";
    };

    return (
      <button
        key={arr}
        type="button"
        className={`${getButtonStyle()}
                         aspect-square w-full min-h-[60px] sm:min-h-[70px] md:min-h-[80px]
                         flex items-center justify-center
                         rounded-full text-white text-xl sm:text-2xl md:text-3xl font-medium
                         transition-colors duration-150
                         active:brightness-75
                         touch-manipulation`}
        onClick={showValHandle}
      >
        {arr}
      </button>
    );
  });
};

export default Btn;
