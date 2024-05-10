import { Container, Stack } from "@mui/material";
import PinnedContainer from "../components/containers/PinnedContainer";
import LogInComponent from "../components/login-register/LogInComponent";
import RegisterComponent from "../components/login-register/RegisterComponent";

const LogInRegister = () => {
    return (
        <Stack direction={"row"} justifyContent={"space-evenly"} minHeight={"calc( 100% - 100px );"} height={"calc( 100% - 100px );"} alignItems={"center"} margin={"auto"}>
            <PinnedContainer width="30%" height="80%">
                <RegisterComponent />
            </PinnedContainer>
            <PinnedContainer width="30%" height="80%">
                <LogInComponent />
            </PinnedContainer>
        </Stack>
    )
}

export default LogInRegister;