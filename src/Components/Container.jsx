let Container = (props) => {
  return (
    <div className="min-h-screen w-full bg-black sm:bg-zinc-900 flex items-center justify-center p-0 sm:p-6">
      <div className="w-full h-screen sm:h-auto sm:max-w-[360px] md:max-w-[400px] flex flex-col">
        {props.children}
      </div>
    </div>
  );
};

export default Container;
