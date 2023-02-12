import React from "react";

const Header = ({ ...props }) => {
  return (
    <h1 {...props}>
      <samp className="color-accent">{"#->"}</samp>Task
    </h1>
  );
}

export default Header;
