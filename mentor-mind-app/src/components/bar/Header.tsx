import React from "react";
import "../../colors.css";
import "../../index.css";

interface HeadingProps {
  title1: string;
  title2: string;
  buttonText1: string;
  buttonText2: string;
}

const Heading: React.FC<HeadingProps> = ({
  title1,
  title2,
  buttonText1,
  buttonText2,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "var(--primary-color)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "white",
          marginLeft: "1%",
          fontWeight: "normal",
        }}
      >
        {title1}
      </h1>
      <h1 style={{ textAlign: "center", color: "white", fontWeight: "normal" }}>
        {title2}
      </h1>
      <div className="button-container">
        <button className="button">{buttonText1}</button>
        <button className="button">{buttonText2}</button>
      </div>
    </div>
  );
};

export default Heading;
