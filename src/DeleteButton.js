import React from "react";

function DeleteButton(props) {
  //maybe I can pass the index with the id to create a unique ID
  // const handleClick = () => {
  //    props.onClick(`${props.index}${props.id}`);
  //  }
  //
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
