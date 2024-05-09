import {FormLabel, TextField} from "@mui/material";

const SettingsPage = () => {
    return (
        <form>
            <div>
                <FormLabel>Username</FormLabel>
                <TextField/>
            </div>
            <div>
                <FormLabel>Password</FormLabel>
                <TextField/>
            </div>
        </form>
    );
};
export default SettingsPage;