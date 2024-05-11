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
    gap: '5%'
});


const SettingsMainComponent = () => {
    const handleSettingsChange = () => {}

    return (
        <Stack direction={"row"} justifyContent={"space-evenly"} minHeight={"calc( 100% - 100px );"}
               height={"calc( 100% - 100px );"} alignItems={"center"} marginLeft={'-3%'}>

            <Box component="form" onSubmit={handleSettingsChange} noValidate
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
                        <FormLabel sx={{ width: '120px', color: 'white', fontSize: '120%'  }}>Name</FormLabel>
                        <CssTextField
                            margin="normal"
                            required
                            id="settings-name"
                            placeholder=""
                            name="name"
                            autoComplete=""
                            sx={{ width: 'calc(100% - 120px)' }}
                        />
                        </StyledContainer>
                        <StyledContainer>
                        <FormLabel sx={{ width: '120px', color: 'white', fontSize: '120%'  }}>Username</FormLabel>
                        <CssTextField
                            margin="normal"
                            required
                            id="settings-username"
                            placeholder=""
                            name="username"
                            autoComplete=""
                            sx={{ width: 'calc(100% - 120px)' }}
                        />
                        </StyledContainer>
                        <StyledContainer>
                        <FormLabel sx={{ width: '120px',color: 'white', fontSize: '120%'  }}>E-mail</FormLabel>
                        <CssTextField
                            margin="normal"
                            required
                            id="settings-email"
                            placeholder=""
                            name="email"
                            autoComplete=""
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
            <Avatar
                alt="Cute Puppy"
                src={Image}
                sx={{ width: 120, height: 120, marginTop: 10 }}
            />

        </Stack>
    )
}

export default SettingsMainComponent;