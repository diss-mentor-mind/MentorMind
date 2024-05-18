import { Container, Stack } from "@mui/material";
import PinnedContainer from "../components/containers/PinnedContainer";
import LogInComponent from "../components/login-register/LogInComponent";
import RegisterComponent from "../components/login-register/RegisterComponent";

const LogInRegister = () => {
    return (
        <Stack direction={"row"} justifyContent={"space-evenly"} minHeight={"calc( 100% - 150px );"} height={"80%"} alignItems={"flex-start"} margin={"40px 0"}>
            <PinnedContainer width="30%" height="95%">
                <RegisterComponent />
            </PinnedContainer>
            <PinnedContainer width="30%" height="95%">
                <LogInComponent />
            </PinnedContainer>
        </Stack>
    )
}

export default LogInRegister;