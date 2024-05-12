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
import StyledContainer from "../containers/StyledContainer";

const CssTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    backgroundColor: "var(--secondary-color)",
    borderRadius: "10px",
  },
});

const SettingsMainComponent = () => {
  const handleSettingsPassword = () => {};

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
        onSubmit={handleSettingsPassword}
        noValidate
        sx={{
          marginRight: "13%",
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "90%",
          gap: "5px",
          // marginTop: -5,
        }}
      >
        <Box
          sx={{
            //   marginLeft: -9,
            //   marginTop: 10,
            margin: "5px",
            flexDirection: "column",
            display: "flex",
            width: "100%",
            //   width: 600,
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
              Change Password
            </Typography>
          </Box>
          <Box sx={{ width: "100%" }}>
            <StyledContainer>
              <FormLabel
                htmlFor="settings-current-password"
                sx={{
                  width: "260px",
                  color: "var(--secondary-color)",
                  fontSize: "100%",
                }}
              >
                Current Password
              </FormLabel>
              <CssTextField
                margin="dense"
                required
                fullWidth
                id="settings-current-password"
                placeholder="Password"
                name="current-password"
                autoComplete="off"
                size="small"
              />
            </StyledContainer>
            <StyledContainer>
              <FormLabel
                htmlFor="settings-new-password"
                sx={{
                  width: "260px",
                  color: "var(--secondary-color)",
                  fontSize: "100%",
                }}
              >
                New Password
              </FormLabel>
              <CssTextField
                margin="dense"
                required
                fullWidth
                id="settings-new-password"
                placeholder="New Password"
                name="new-password"
                autoComplete="off"
                size="small"
              />
            </StyledContainer>
            <StyledContainer>
              <FormLabel
                htmlFor="settings-repeat-password"
                sx={{
                  width: "260px",
                  color: "var(--secondary-color)",
                  fontSize: "100%",
                }}
              >
                Repeat New Password
              </FormLabel>
              <CssTextField
                margin="dense"
                required
                fullWidth
                id="settings-repeat-password"
                placeholder="Repeat new password"
                name="repeat-password"
                autoComplete="off"
                size="small"
              />
            </StyledContainer>
          </Box>
        </Box>
        <Box width={"100%"} display="flex" justifyContent="flex-end">
          <Box
            //   textAlign={"center"}
            margin="dense"
            width={"40%"}
          >
            <Button
              className={"button"}
              variant="contained"
              style={{ textTransform: "none" }}
              fullWidth
            >
              Change Password
            </Button>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default SettingsMainComponent;
