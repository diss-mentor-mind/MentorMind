import { Box, Button, FormControl, FormHelperText, MenuItem, Select, TextField, Typography, styled } from "@mui/material";
import { FormEvent, useState } from "react";
import axios from "axios";
import { save } from "../../util/localStorage";

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
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    const [email, setEmail] = useState("");
        const [emailErrorText, setEmailErrorText] = useState("");
        const [firstName, setFirstName] = useState("");
        const [firstNameErrorText, setFirstNameErrorText] = useState("");
        const [lastName, setLastName] = useState("");
        const [lastNameErrorText, setLastNameErrorText] = useState("");
        const [password, setPassword] = useState("");
        const [passwordErrorText, setPasswordErrorText] = useState("");
        const [role, setRole] = useState("");
        const [roleErrorText, setRoleErrorText] = useState("");
        const handleRegister = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let canRegister = true;
        if (!email) {
            setEmailErrorText("Missing email!");
            canRegister = false;
        } else if (!emailRegex.test(email)) {
            setEmailErrorText("This is not a valid email");
            canRegister = false;
        } else {
            setEmailErrorText("");
        }
        if (!firstName) {
            setFirstNameErrorText("Missing first name!");
            canRegister = false;
        } else {
            setFirstNameErrorText("");
        }
        if (!lastName) {
            setLastNameErrorText("Missing last name!");
            canRegister = false;
        } else {
            setLastNameErrorText("");
        }
        if (!password) {
            setPasswordErrorText("Missing password!");
            canRegister = false;
        } else if (password.length < 8) {
            setPasswordErrorText("The password must be at least 8 characters long");
            canRegister = false;
        } else {
            setPasswordErrorText("");
        }
        if (!role) {
            setRoleErrorText("Missing role!");
            canRegister = false;
        } else {
            setRoleErrorText("");
        }
        if (canRegister) {
            axios.post('http://localhost:8080/api/account/save', {
                "email": email,
                "firstName": firstName,
                "lastName": lastName,
                "role": role,
                "password": password
            }, {withCredentials: false}).then((response) => {
                save("userId", response.data.id);
                save("userName", response.data.firstName);
                save("userLastName", response.data.lastName);
                save("userEmail", response.data.email);
                save("userRole", response.data.role);
                save("userPassword", response.data.password);
                window.location.href = "/courses";
            }).catch((error) => {
                alert("Registering was not possible! Please try again");
                console.log(error);
            })
        }
    }

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
                marginX: 5,
                marginY: 2,
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
                        type="email"
                        value={email}
                        error={!!emailErrorText}
                        helperText={emailErrorText}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <CssTextField
                        margin="normal"
                        required
                        fullWidth 
                        id="register-first-name"
                        placeholder="First Name"
                        name="firstName"
                        autoComplete="First Name"
                        value={firstName}
                        error={!!firstNameErrorText}
                        helperText={firstNameErrorText}
                        onChange={e => setFirstName(e.target.value)}
                    />
                    <CssTextField
                        margin="normal"
                        required
                        fullWidth 
                        id="register-last-name"
                        placeholder="Last Name"
                        name="lastName"
                        autoComplete="Last Name"
                        value={lastName}
                        error={!!lastNameErrorText}
                        helperText={lastNameErrorText}
                        onChange={e => setLastName(e.target.value)}
                    />
                    <CssTextField
                        margin="normal"
                        required
                        fullWidth 
                        id="register-password"
                        placeholder="Password"
                        name="password"
                        autoComplete="Password"
                        type="password"
                        value={password}
                        error={!!passwordErrorText}
                        helperText={passwordErrorText}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <CssSelect margin="normal" fullWidth error={!!roleErrorText}>
                        <Select
                            value={role}
                            required
                            id="register-role"
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
                        {roleErrorText && <FormHelperText>{roleErrorText}</FormHelperText>}
                    </CssSelect>
                </Box>
            </Box>
            <Box textAlign={"center"} margin="normal" marginBottom={"10px"} width={"40%"}>
                <Button className={"button"} variant="contained" style={{textTransform: "none"}} fullWidth type="submit">
                    Create Account
                </Button>
            </Box>
        </Box>
    )
}

export default RegisterComponent;