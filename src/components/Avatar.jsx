import React from "react";

function Avatar(props) {
  console.log(props.image);
  return <img className="circle-img" src={props.image} alt="avatar_img" />;
}

export default Avatar;
