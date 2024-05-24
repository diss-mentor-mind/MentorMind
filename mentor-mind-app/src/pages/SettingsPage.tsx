import { FormLabel, Stack, TextField, Box } from "@mui/material";
import PinnedContainer from "../components/containers/PinnedContainer";
import RegisterComponent from "../components/login-register/RegisterComponent";
import LogInComponent from "../components/login-register/LogInComponent";
import SettingsMainComponent from "../components/settings/SettingsMain";
import SettingsPassword from "../components/settings/SettingsPassword";
import { useEffect } from "react";
import { trackPageView } from "../util/trackerUtil";

const SettingsPage = () => {

  useEffect(() => {
    trackPageView("SettingsPage");
  }, []);

  return (
    <Stack
      direction={"column"}
      justifyContent={"space-evenly"}
      //   minHeight={"calc( 120% - 100px );"}
      height="85%"
      alignItems={"center"}
      //   margin={"auto"}
      //   sx={{ pb: "32px" }}
      spacing={3}
      sx={{ marginTop: "18px" }}
    >
      <PinnedContainer width="40%" height="43%">
        <SettingsMainComponent />
      </PinnedContainer>
      <PinnedContainer width="40%" height="43%">
        <SettingsPassword />
      </PinnedContainer>
    </Stack>
  );
};
export default SettingsPage;
