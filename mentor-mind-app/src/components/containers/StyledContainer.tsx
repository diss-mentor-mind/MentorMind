import { Box } from "@mui/material";

//@ts-ignore
const StyledContainer = ({ children }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={
        {
          // gap: "10%", // Uncomment if needed
        }
      }
    >
      {children}
    </Box>
  );
};

export default StyledContainer;
