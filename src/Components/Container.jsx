let Container = (props) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="w-full h-full sm:h-auto max-w-[100vw] sm:max-w-[360px] md:max-w-[400px] flex flex-col items-center justify-center sm:justify-start">
        {props.children}
      </div>
    </div>
  );
};

export default Container;
