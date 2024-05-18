import { Box, Button, TextField, Typography, styled } from "@mui/material";
import axios from "axios";
import { FormEvent, useState } from "react";
import { save } from "../../util/localStorage";

const CssTextField = styled(TextField)({
    '& .MuiInputBase-root': {
        backgroundColor: "var(--secondary-color)",
        borderRadius: "10px"
    }
})

const LogInComponent = () => {
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

    const [email, setEmail] = useState("");
    const [emailErrorText, setEmailErrorText] = useState("");
    const [password, setPassword] = useState("");
    const [passwordErrorText, setPasswordErrorText] = useState("");

    const handleLogIn = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let canLogIn = true;
        if (!email) {
            setEmailErrorText("Missing email!");
            canLogIn = false;
        } else if (!emailRegex.test(email)) {
            setEmailErrorText("This is not a valid email");
            canLogIn = false;
        } else {
            setEmailErrorText("");
        }
        if (!password) {
            setPasswordErrorText("Missing password!");
            canLogIn = false;
        } else {
            setPasswordErrorText("");
        }
        if (canLogIn) {
            axios.get(`http://localhost:8080/api/account/login/${email}/${password}`, 
                {withCredentials: false}
            ).then((response) => {
                if (response.data) {
                    save("userId", response.data.id);
                    save("userName", response.data.firstName);
                    save("userLastName", response.data.lastName);
                    save("userEmail", response.data.email);
                    save("userPassword", response.data.password);
                    save("userRole", response.data.role);
                    window.location.href = "/courses";
                } else {
                    alert("Wrong username/password combination!");
                }
            }).catch((error) => {
                alert("Registering was not possible! Please try again");
                console.log(error);
            })
        }
    }

    return (
        <Box component="form" onSubmit={handleLogIn} noValidate 
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
                    Log In
                </Typography>
                <Box width={1}>
                    <CssTextField
                        margin="normal"
                        required
                        fullWidth 
                        id="login-email"
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
                        id="login-password"
                        placeholder="Password"
                        name="password"
                        autoComplete="Password"
                        type="password"
                        value={password}
                        error={!!passwordErrorText}
                        helperText={passwordErrorText}
                        onChange={e => setPassword(e.target.value)}
                    />
                </Box>
            </Box>
            <Box textAlign={"center"} margin="normal" marginBottom={"10px"} width={"40%"}>
                <Button className={"button"} variant="contained" style={{textTransform: "none"}} fullWidth type="submit">
                    Log In
                </Button>
            </Box>
        </Box>
    )
}

export default LogInComponent;