import { Box, Button, TextField, Typography, styled } from "@mui/material";

const CssTextField = styled(TextField)({
    '& .MuiInputBase-root': {
        backgroundColor: "var(--secondary-color)",
        borderRadius: "10px"
    }
})

const JoinCoursePopupComponent = () => {
    const handleJoinCourse = () => {}

    return (
        <Box component="form" onSubmit={handleJoinCourse} noValidate 
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
                alignItems: 'center',
                width: 0.8
            }}>
                <Typography component="h4" variant="h4">
                    Join Course
                </Typography>
                <Box width={1}>
                    <CssTextField
                        margin="normal"
                        required
                        fullWidth 
                        id="join-course-code"
                        placeholder="Course Code"
                        name="course-code"
                        autoComplete="Course Code"
                    />
                </Box>
            </Box>
            <Box textAlign={"center"} margin="normal" marginBottom={"10px"}>
                <Button className={"button"} variant="contained">
                    Join Course
                </Button>
            </Box>
        </Box>
    )
}

export default JoinCoursePopupComponent;