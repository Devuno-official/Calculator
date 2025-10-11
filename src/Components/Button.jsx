let Btn = function ({ symbol, showValHandle }) {
  return symbol.map((arr) => {
    const getButtonStyle = () => {
      if (arr === "C")
        return "bg-gray-500 hover:bg-gray-400 active:bg-gray-600";
      if (arr === "=")
        return "bg-orange-500 hover:bg-orange-400 active:bg-orange-600";
      if (["+", "-", "*", "/", "(", ")", "<"].includes(arr))
        return "bg-orange-500 hover:bg-orange-400 active:bg-orange-600";
      return "bg-gray-800 hover:bg-gray-700 active:bg-gray-900";
    };

    return (
      <button
        key={arr}
        type="button"
        className={`${getButtonStyle()}
                         aspect-square w-full min-h-[80px] sm:min-h-[70px] md:min-h-[80px]
                         flex items-center justify-center
                         rounded-none sm:rounded-full text-white text-3xl sm:text-2xl md:text-3xl font-medium
                         transition-all duration-100
                         touch-manipulation
                         border border-gray-700 sm:border-transparent`}
        onClick={showValHandle}
      >
        {arr}
      </button>
    );
  });
};

export default Btn;
