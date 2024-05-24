import React from "react";
import "../../colors.css";
import "../../index.css";
import { useNavigate, useLocation } from "react-router-dom";
import { remove } from "../../util/localStorage";
import { trackButtonClick } from "../../util/trackerUtil";

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
  const navigate = useNavigate();
  const location = useLocation();

  const gotToNewPage = (path: string) => {
    navigate(path);
  };

  const logOut = () => {
    trackButtonClick("LogOutClicked");
    remove("userId");
    remove("userName");
    remove("userEmail");
    remove("userRole");
    remove("userLastName");
    remove("userPassword");
    window.location.href = "/log-in";
  };

  const redirectToMainPage = () => {
    trackButtonClick("MainPageLogoClick");
    navigate("/"); // Redirect to the main page
  };

  // Check if the current path is "/log-in"
  const isLoginPage = location.pathname === "/log-in";

  const goBack = () => {
    trackButtonClick("BackButtonClick");
    navigate(-1); // Go back to the previous page
  };

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
      <h1
        style={{
          textAlign: "center",
          color: "white",
          fontWeight: "normal",
          fontFamily: "Kotta One",
          cursor: "pointer", // Hint that the title is clickable
          paddingLeft: "10%",
        }}
        onClick={redirectToMainPage}
      >
        {title2}
      </h1>
      <div
        className="button-container"
        style={{
          visibility: isLoginPage ? "hidden" : "visible",
          pointerEvents: isLoginPage ? "none" : "auto",
        }}
      >
        <button className="button" onClick={goBack}>
          Back
        </button>
        <button className="button" onClick={() => gotToNewPage("/settings")}>
          {buttonText1}
        </button>
        <button className="button" onClick={logOut}>
          {buttonText2}
        </button>
      </div>
    </div>
  );
};

export default Heading;
