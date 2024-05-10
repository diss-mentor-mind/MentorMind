import {FormLabel, Stack, TextField} from "@mui/material";
import PinnedContainer from "../components/containers/PinnedContainer";
import RegisterComponent from "../components/login-register/RegisterComponent";
import LogInComponent from "../components/login-register/LogInComponent";
import SettingsMainComponent from "../components/settings/SettingsMain";
import SettingsPassword from "../components/settings/SettingsPassword";

const SettingsPage = () => {
    return (
        <Stack direction={"column"} justifyContent={"space-evenly"} minHeight={"calc( 100% - 100px );"} height={"calc( 100% - 100px );"} alignItems={"center"} margin={"auto"}>
            <PinnedContainer width="50%" height="60%">
                <SettingsMainComponent />
            </PinnedContainer>
             <PinnedContainer width="50%" height="60%">
                 <SettingsPassword />
             </PinnedContainer>
        </Stack>
    );
};
export default SettingsPage;