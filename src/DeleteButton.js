import React from "react";

function DeleteButton(props){

// this separate component seems pointless since I'm only using 1 button

// const handleClick = () => {
//    props.onClick(`${props.index}${props.id}`);
//  }

return (
  <button
    id={props.id}
    // onClick={handleClick}
    onClick={props.onClick}
    index={props.index}
  >
    delete
  </button>
);

}

export default DeleteButton;
