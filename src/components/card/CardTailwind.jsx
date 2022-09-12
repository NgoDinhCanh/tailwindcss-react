import React from "react";
import imageHeart from "../../assets/image/coolicon.svg";

const CardTailwind = (props) => {
  const amountClasses = `text-lg font-bold text-transparent bg-clip-text ${
    props.primary
      ? "bg-primary-gradient"
      : props.secondary
      ? "bg-secondary-gradient"
      : "bg-primary-gradient"
  }`;
  return (
    <div className="relative w-auto">
      <div className="h-[400px] w-[400px] rounded-lg">
        <img
          className="block w-full h-full object-cover rounded-lg"
          src={props.src}
          alt=""
        />
      </div>
      <div className="absolute w-[calc(100%-76px)] left-2/4 -translate-x-2/4 translate-y-2/4 bottom-0 bg-white z-10 rounded-[20px] p-5">
        <div className="flex items-center justify-between mb-[30px]">
          <div className="flex items-center gap-x-3">
            <img
              className="w-[30px] h-[30px] object-cover rounded-full flex-shrink-0"
              src={props.src}
              alt=""
            />
            <div className="font-light text-base text-[#3333]">@zndrson</div>
          </div>
          <div className="flex items-center justify-center p-0 gap-x-3">
            <img src={imageHeart} alt="" />
            <span>256</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <h3 className={`font-medium ${props.fontSize || "text-lg"}`}>
            {props.author}
          </h3>
          <span className={amountClasses}>12,000 PSL</span>
        </div>
      </div>
    </div>
  );
};

export default CardTailwind;
