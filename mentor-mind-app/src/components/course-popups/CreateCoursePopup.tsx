import { Box, Button, TextField, Typography, styled, FormControl, Select, MenuItem } from "@mui/material";
import { useState } from "react";

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
    const handleCreateCourse = () => {}
    const [icon, setIcon] = useState("");

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
                    />
                    <CssTextField
                        margin="normal"
                        required
                        fullWidth 
                        id="create-course-image"
                        placeholder="Upload Course Image..."
                        name="course-image"
                        type="file"
                    />
                    <Typography component="h5" variant="h5">
                        OR
                    </Typography>
                    <CssSelect margin="normal" fullWidth>
                        <Select
                            value={icon}
                            required
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
                    </CssSelect>
                </Box>
            </Box>
            <Box textAlign={"center"} margin="normal" marginBottom={"10px"}>
                <Button className={"button"} variant="contained">
                    Create Course
                </Button>
            </Box>
        </Box>
    )
}

export default CreateCoursePopupComponent;