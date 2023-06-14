import React, { useState } from "react";
import allsong from "../services/Data";
import Uploader from "./Uploader";
const Bottom = ({playsongs}) => {
  const imgurl="https://th.bing.com/th/id/OIP.bLCU8HwL546JIVk9vLV3NAHaHa?pid=ImgDet&rs=1"
const[img,setimg]=useState(imgurl);
function play(e){
  setimg(imgurl)
  playsongs(e)
}
console.log(allsong[0])
  return (
    <div className="bottom">

      {allsong.map((item, index) => {
        return <div className="songs" key={index} onClick={()=>{play(item)}} ><img src={item.imgurl} className="icon"/><p className="title">{item.title}</p><p className="timer">{item.timer}</p></div>;
      })}
      {/* <Uploader/> */}

    </div>
  );
};

export default Bottom;
