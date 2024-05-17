import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { load } from "../../util/localStorage";
import { FormEvent, useState } from "react";
import axios from "axios";

const CssTextField = styled(TextField)({
    '& .MuiInputBase-root': {
        backgroundColor: "var(--secondary-color)",
        borderRadius: "10px"
    }
})

const JoinCoursePopupComponent = () => {
    const [courseCode, setCourseCode] = useState("");
    const handleJoinCourse = (e : FormEvent<HTMLFormElement>) => {
        const userId = load("userId");
        e.preventDefault();
        if (!courseCode) {
            alert("Missing course code!");
        } else {
            axios.post(`http://localhost:8080/api/subject/${courseCode}/join/${userId}`,
                {}, {withCredentials: false}
            ).then((response) => {
                window.location.reload();
            }).catch((error) => {
                alert("Could not join! Please try again!");
            })
        }
    }

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
                        value={courseCode}
                        onChange={(e) => setCourseCode(e.target.value)}
                    />
                </Box>
            </Box>
            <Box textAlign={"center"} margin="normal" marginBottom={"10px"} width={"40%"}>
                <Button className={"button"} variant="contained" style={{textTransform: "none"}} fullWidth type="submit">
                    Join Course
                </Button>
            </Box>
        </Box>
    )
}

export default JoinCoursePopupComponent;