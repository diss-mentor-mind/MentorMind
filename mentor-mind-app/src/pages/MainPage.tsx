import { Box, Container } from "@mui/material";
import PinnedContainer from "../components/containers/PinnedContainer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { load } from "../util/localStorage";

const MainPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userId = load("userId");
    if (!userId) {
      // Redirect to login if user is not logged in
      navigate("/log-in");
    } else {
      // Redirect to courses if user is logged in
      navigate("/courses");
    }
  }, [navigate]);

  return <div></div>;
};
export default MainPage;
