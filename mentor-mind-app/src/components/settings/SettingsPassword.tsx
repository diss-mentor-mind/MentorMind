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
                     gap: 5,
                     marginTop:-5
                 }}
            >
                <Box sx={{
                    marginLeft: -9,
                    marginTop: 10,
                    flexDirection: 'column',
                    display: 'flex',
                    width: 600,
                    alignItems: 'center'
                }}>
                    <Box width={1}>
                        <StyledContainer>
                            <FormLabel sx={{ width: '200px', color: 'white', fontSize: '120%'  }}>Current Password</FormLabel>
                            <CssTextField
                                margin="normal"
                                required
                                fullWidth
                                id="settings-current-password"
                                placeholder=""
                                name="current-password"
                                autoComplete=""
                                sx={{ width: 'calc(100% - 200px)' }}
                            />
                        </StyledContainer>
                        <StyledContainer>
                            <FormLabel sx={{ width: '200px', color: 'white', fontSize: '120%'  }}>New Password</FormLabel>
                            <CssTextField
                                margin="normal"
                                required
                                fullWidth
                                id="settings-new-password"
                                placeholder=""
                                name="new-password"
                                autoComplete=""
                                sx={{ width: 'calc(100% - 200px)' }}
                            />
                        </StyledContainer>
                        <StyledContainer>
                            <FormLabel sx={{ width: '200px',color: 'white', fontSize: '120%'  }}>Repeat New Password</FormLabel>
                            <CssTextField
                                margin="normal"
                                required
                                fullWidth
                                id="settings-repeat-password"
                                placeholder=""
                                name="repeat-password"
                                autoComplete=""
                                sx={{ width: 'calc(100% - 200px)' }}
                            />
                        </StyledContainer>

                    </Box>
                </Box>
                <Box textAlign={"center"} margin="normal" width={"40%"}>
                    <Button
                        className={"button"}
                        variant="contained"
                        style={{textTransform: "none", fontSize: '120%'}}
                        fullWidth>
                        Change Password
                    </Button>
                </Box>
            </Box>
    )
}

export default SettingsMainComponent;