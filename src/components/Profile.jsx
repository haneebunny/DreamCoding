import React from "react";
import Avatar from "./Avatar";

export default function Profile({ image, name, desc, isNew }) {
  return (
    <div className="profile">
      {/* <img className="photo" src={image} alt="avatar" />
      {isNew && <span className="new">NEW</span>} */}
      <Avatar image={image} isNew={isNew} />
      <h1>{name}</h1>
      <p>{desc}</p>
    </div>
  );
}
