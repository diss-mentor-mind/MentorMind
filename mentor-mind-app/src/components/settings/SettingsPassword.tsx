import {Box, Button, TextField, Typography, styled, FormLabel, Stack, Avatar} from "@mui/material";
import Image from "../pics/puppy.png"; // Import the CSS file for styling

const CssTextField = styled(TextField)({
    '& .MuiInputBase-root': {
        backgroundColor: "var(--secondary-color)",
        borderRadius: "10px"
    }
})

const StyledContainer = styled('div')({
    display: 'flex',
    alignItems: 'center',
    gap: '10%'
});


const SettingsMainComponent = () => {
    const handleSettingsPassword = () => {}

    return (

            <Box component="form" onSubmit={handleSettingsPassword} noValidate
                 sx={{
                     flexDirection: 'column',
                     display: 'flex',
                     alignItems: 'center',
                     height: 1,
                     justifyContent: 'space-between',
                     marginTop:-5
                 }}
            >
                <Box sx={{
                    margin: 5,
                    flexDirection: 'column',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <Typography component="h4" variant="h4"
                                sx={{marginRight:60}}>
                        Settings
                    </Typography>

                    <Box width={1}>
                        <StyledContainer>
                            <FormLabel sx={{ width: '120px', color: 'white', fontSize: '120%'  }}>Username</FormLabel>
                            <CssTextField
                                margin="normal"
                                required
                                fullWidth
                                id="login-email"
                                placeholder="E-mail Address"
                                name="email"
                                autoComplete="E-mail Address"
                                sx={{ width: 'calc(100% - 120px)' }}
                            />
                        </StyledContainer>
                        <StyledContainer>
                            <FormLabel sx={{ width: '120px', color: 'white', fontSize: '120%'  }}>Name</FormLabel>
                            <CssTextField
                                margin="normal"
                                required
                                fullWidth
                                id="login-password"
                                placeholder="Password"
                                name="password"
                                autoComplete="Password"
                                sx={{ width: 'calc(100% - 120px)' }}
                            />
                        </StyledContainer>
                        <StyledContainer>
                            <FormLabel sx={{ width: '120px',color: 'white', fontSize: '120%'  }}>Email</FormLabel>
                            <CssTextField
                                margin="normal"
                                required
                                fullWidth
                                id="login-password"
                                placeholder="Password"
                                name="password"
                                autoComplete="Password"
                                sx={{ width: 'calc(100% - 120px)' }}
                            />
                        </StyledContainer>

                    </Box>
                </Box>
                <Box textAlign={"center"} margin="normal" marginBottom={"10px"} width={"40%"}>
                    <Button
                        className={"button"}
                        variant="contained"
                        style={{textTransform: "none", fontSize: '120%'}}
                        fullWidth>
                        Submit
                    </Button>
                </Box>
            </Box>
    )
}

export default SettingsMainComponent;