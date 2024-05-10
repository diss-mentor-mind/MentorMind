import { Box, Button, FormControl, MenuItem, Select, TextField, Typography, styled } from "@mui/material";
import { useState } from "react";

const CssTextField = styled(TextField)({
    '& .MuiInputBase-root': {
        backgroundColor: "var(--secondary-color)",
        borderRadius: "10px"
    }
});

const CssSelect = styled(FormControl)({
    '& .MuiInputBase-root': {
        backgroundColor: "var(--secondary-color)",
        borderRadius: "10px"
    }
})
  
const RegisterComponent = () => {
    const [role, setRole] = useState("");
    const handleRegister = () => {}

    return (
        <Box component="form" onSubmit={handleRegister} noValidate 
            sx={{
                flexDirection: 'column',
                display: 'flex',
                alignItems: 'center',
                height: 1,
                justifyContent: 'space-between'        
            }}
        >
            <Box sx={{
                margin: 5,
                flexDirection: 'column',
                display: 'flex',
                alignItems: 'center'
            }}>
                <Typography component="h4" variant="h4">
                    Register
                </Typography>
                <Box width={1}>
                    <CssTextField
                        margin="normal"
                        required
                        fullWidth 
                        id="register-email"
                        placeholder="E-mail Address"
                        name="email"
                        autoComplete="E-mail Address"
                    />
                    <CssTextField
                        margin="normal"
                        required
                        fullWidth 
                        id="register-first-name"
                        placeholder="First Name"
                        name="firstName"
                        autoComplete="First Name"
                    />
                    <CssTextField
                        margin="normal"
                        required
                        fullWidth 
                        id="register-last-name"
                        placeholder="Last Name"
                        name="lastName"
                        autoComplete="Last Name"
                    />
                    <CssTextField
                        margin="normal"
                        required
                        fullWidth 
                        id="login-password"
                        placeholder="Password"
                        name="password"
                        autoComplete="Password"
                    />
                    <CssSelect margin="normal" fullWidth>
                        <Select
                            value={role}
                            required
                            id="login-role"
                            name="role"
                            displayEmpty
                            onChange={event => setRole(event.target.value)}
                            renderValue={
                                role !== "" ? undefined : () => <div className="placeholder">Role</div>
                            }
                        >   
                            <MenuItem value={"Teacher"}>Teacher</MenuItem>
                            <MenuItem value={"Student"}>Student</MenuItem>
                        </Select>
                    </CssSelect>
                </Box>
            </Box>
            <Box textAlign={"center"} margin="normal" marginBottom={"10px"} width={"40%"}>
                <Button className={"button"} variant="contained" style={{textTransform: "none"}} fullWidth>
                    Create Account
                </Button>
            </Box>
        </Box>
    )
}

export default RegisterComponent;