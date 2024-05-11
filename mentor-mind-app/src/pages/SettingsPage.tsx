import {FormLabel, Stack, TextField} from "@mui/material";
import PinnedContainer from "../components/containers/PinnedContainer";
import RegisterComponent from "../components/login-register/RegisterComponent";
import LogInComponent from "../components/login-register/LogInComponent";
import SettingsMainComponent from "../components/settings/SettingsMain";
import SettingsPassword from "../components/settings/SettingsPassword";

const SettingsPage = () => {
    return (
        <Stack direction={"column"} justifyContent={"space-evenly"} minHeight={"calc( 120% - 100px );"} height={"calc( 120% - 100px );"} alignItems={"center"} margin={"auto"} sx={{pb: 20, pt: 10}}>
            <PinnedContainer width="50%" height="50%">
                <SettingsMainComponent />
            </PinnedContainer>
             <PinnedContainer width="50%" height="50%">
                 <SettingsPassword />
             </PinnedContainer>
        </Stack>
    );
};
export default SettingsPage;