import React from "react";
import MyBtn from "./components/MyBtn";

const MyCard = (props) => {
  return (
    <div className="flex p-4 gap-[15px]">
      <div className="pt-[10px]">
        <img src={props.img} alt="" />
      </div>
      <div className="w-[80%]">
        <p className="text-[#252B42] text-[25px] font-bold ">{props.title}</p>
        <article className="text-[#737373] text-[18px]">
         {props.article}
        </article>
        <MyBtn title="Read more" className="text-[red] uppercase font-bold py-[2%]" />
      </div>
    </div>
  );
};

export default MyCard;
