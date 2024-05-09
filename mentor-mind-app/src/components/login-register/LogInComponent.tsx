import { Box, Button, TextField, Typography, styled } from "@mui/material";

const CssTextField = styled(TextField)({
    '& .MuiInputBase-root': {
        backgroundColor: "var(--secondary-color)",
        borderRadius: "10px"
    }
})

const LogInComponent = () => {
    const handleLogIn = () => {}

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
                margin: 5,
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
                </Box>
            </Box>
            <Box textAlign={"center"} margin="normal" marginBottom={"10px"}>
                <Button className={"button"} variant="contained">
                    Log In
                </Button>
            </Box>
        </Box>
    )
}

export default LogInComponent;