const Links = () => {
  return (
    <div className="">
      <div className="flex absolute bottom-0 left-2/4">
        <span className="w-[1px] h-[200px] border-white border"></span>
        <div className="bg-violet-700 p-5 rounded-full h-min flex-col-reverse -translate-x-[30px]">
          <p className="">My Work</p>
        </div>
      </div>
      <div className="flex absolute bottom-0 left-2/4 flex-col-reverse">
        <span className="w-[1px] h-[200px] border-white border rotate-45 translate-x-[70px] translate-y-[30px]"></span>
        <div className="bg-violet-700 p-5 rounded-full h-min translate-x-[70px] translate-y-[30px]">
          <p className="">My Work</p>
        </div>
      </div>
      <div className="flex absolute bottom-0 left-2/4">
        <span className="w-[1px] h-[200px] border-white border -rotate-45 -translate-x-[70px] translate-y-[30px]"></span>
        <div className="bg-violet-700 p-5 rounded-full h-min -translate-x-[70px] translate-y-[30px]">
          <p className="">My Work</p>
        </div>
      </div>
    </div>
  );
};

export default Links;
