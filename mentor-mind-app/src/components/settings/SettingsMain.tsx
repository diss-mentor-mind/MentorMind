import {
  Box,
  Button,
  TextField,
  Typography,
  styled,
  FormLabel,
  Stack,
  Avatar,
} from "@mui/material";
import Image from "../pics/puppy.png"; // Import the CSS file for styling
import StyledContainer from "../containers/StyledContainer";

const CssTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    backgroundColor: "var(--secondary-color)",
    borderRadius: "10px",
  },
});

const SettingsMainComponent = () => {
  const handleSettingsChange = () => {};

  return (
    <Stack
      direction={"row"}
      justifyContent={"space-evenly"}
      //   minHeight={"calc( 100% - 100px );"}
      width="100%"
      height="100%"
      alignItems={"center"}
      //   marginLeft={"-3%"}
    >
      <Box
        component="form"
        onSubmit={handleSettingsChange}
        noValidate
        sx={{
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "80%",
          //   marginTop: -5,
        }}
      >
        <Box
          sx={{
            margin: "5px",
            flexDirection: "column",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "100%",
              //   marginLeft: "10px",
            }}
          >
            <Typography component="h4" variant="h4" sx={{ marginTop: "10px" }}>
              Settings
            </Typography>
          </Box>

          <Box sx={{ width: "100%" }}>
            <StyledContainer>
              <FormLabel
                htmlFor="settings-name"
                sx={{
                  width: "170px",
                  color: "var(--secondary-color)",
                  fontSize: "120%",
                }}
              >
                Name
              </FormLabel>
              <CssTextField
                margin="dense"
                required
                fullWidth
                id="settings-name"
                placeholder="Student name"
                name="name"
                autoComplete="off"
                size="small"
              />
            </StyledContainer>
            <StyledContainer>
              <FormLabel
                htmlFor="settings-username"
                sx={{
                  width: "170px",
                  color: "var(--secondary-color)",
                  fontSize: "120%",
                }}
              >
                Username
              </FormLabel>
              <CssTextField
                margin="dense"
                required
                fullWidth
                id="settings-username"
                placeholder="Username"
                name="username"
                autoComplete="off"
                size="small"
              />
            </StyledContainer>
            <StyledContainer>
              <FormLabel
                htmlFor="settings-email"
                sx={{
                  width: "170px",
                  color: "var(--secondary-color)",
                  fontSize: "120%",
                }}
              >
                E-mail
              </FormLabel>
              <CssTextField
                margin="dense"
                required
                fullWidth
                id="settings-email"
                placeholder="student@university.com"
                name="email"
                autoComplete="off"
                size="small"
              />
            </StyledContainer>
          </Box>
        </Box>
        <Box width={"100%"} display="flex" justifyContent="flex-end">
          <Box margin="dense" width={"40%"}>
            <Button
              className={"button"}
              variant="contained"
              style={{ textTransform: "none" }}
              fullWidth
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "30%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar
          alt="studentAvatar"
          src={Image}
          sx={{
            width: "120px",
            height: "120px",
          }}
        />
      </Box>
    </Stack>
  );
};

export default SettingsMainComponent;
