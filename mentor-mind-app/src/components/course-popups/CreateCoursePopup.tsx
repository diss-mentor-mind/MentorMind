import { Box, Button, TextField, Typography, styled, FormControl, Select, MenuItem, FormHelperText } from "@mui/material";
import axios from "axios";
import { FormEvent, useState } from "react";
import { load } from "../../util/localStorage";

const CssTextField = styled(TextField)({
    '& .MuiInputBase-root': {
        backgroundColor: "var(--secondary-color)",
        borderRadius: "10px"
    }
})
const CssSelect = styled(FormControl)({
    '& .MuiInputBase-root': {
        backgroundColor: "var(--secondary-color)",
        borderRadius: "10px"
    }
})

const CreateCoursePopupComponent = () => {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [icon, setIcon] = useState("");
    const [iconError, setIconError] = useState("");

    const handleCreateCourse = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userId = load("userId");
        let canCreateCourse = true;
        if (!name) {
            setNameError("Missing course name!");
            canCreateCourse = false;
        } else {
            setNameError("");
        }
        if (!icon) {
            setIconError("Missing icon!");
            canCreateCourse = false;
        } else {
            setIconError("");
        }
        if (canCreateCourse) {
            axios.post("http://localhost:8080/api/subject/save", {
                "name": name,
                "icon": icon,
                "isApprovalNeeded": true,
                "teacher": {
                    "id": userId
                }
            }).then((response) =>  {
                window.location.reload();
            }).catch((error) => {
                alert("Could not create course! Please try again!");
            })
        }
    }

    return (
        <Box component="form" onSubmit={handleCreateCourse} noValidate 
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
                    Create Course
                </Typography>
                <Box width={1}>
                    <CssTextField
                        margin="normal"
                        required
                        fullWidth 
                        id="create-course-name"
                        placeholder="Course Name"
                        name="course-name"
                        autoComplete="Course Name"
                        value={name}
                        error={!!nameError}
                        helperText={nameError}
                        onChange={e => setName(e.target.value)}                        
                    />
                    <CssTextField
                        margin="normal"
                        fullWidth 
                        id="create-course-image"
                        placeholder="Upload Course Image..."
                        name="course-image"
                        type="file"
                        disabled
                    />
                    <Typography component="h5" variant="h5">
                        OR
                    </Typography>
                    <CssSelect margin="normal" fullWidth error={!!iconError}>
                        <Select
                            value={icon}
                            id="create-course-icon"
                            name="course-icon"
                            displayEmpty
                            onChange={event => setIcon(event.target.value)}
                            renderValue={
                                icon !== "" ? undefined : () => <div className="placeholder">Select an icon</div>
                            }
                        >   
                            <MenuItem value={""}>None</MenuItem>
                            <MenuItem value={"Option 1"}>First Icon</MenuItem>
                            <MenuItem value={"Option 2"}>Second Icon</MenuItem>
                        </Select>
                        {iconError && <FormHelperText>{iconError}</FormHelperText>}
                    </CssSelect>
                </Box>
            </Box>
            <Box textAlign={"center"} margin="normal" marginBottom={"10px"} width={"40%"}>
                <Button className={"button"} variant="contained" style={{textTransform: "none"}} fullWidth type="submit">
                    Create Course
                </Button>
            </Box>
        </Box>
    )
}

export default CreateCoursePopupComponent;