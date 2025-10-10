let Container = (props) => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-[320px] sm:max-w-[360px] flex flex-col items-center">
        {props.children}
      </div>
    </div>
  );
};

export default Container;
