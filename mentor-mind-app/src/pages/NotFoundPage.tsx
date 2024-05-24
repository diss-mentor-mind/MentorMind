import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { trackPageView } from "../util/trackerUtil";

const NotFoundPage: React.FC = () => {

  useEffect(() => {
    trackPageView("NotFoundPage");
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80%",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" gutterBottom>
        😞 Sorry, we cannot find this page
      </Typography>
    </Box>
  );
};

export default NotFoundPage;
