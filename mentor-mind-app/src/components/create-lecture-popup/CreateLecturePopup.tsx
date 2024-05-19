import { TextField, FormControl, styled, Box, Button, Stack, Typography, FormHelperText, MenuItem, Select } from "@mui/material"
import { FormEvent, useState } from "react"
import { load } from "../../util/localStorage"
import axios from "axios"
import { useParams } from "react-router-dom"


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

const CreateLecturePopup = () => {
    const [title, setTitle] = useState("");
    const [titleError, setTitleError] = useState("");
    const [icon, setIcon] = useState("");
    const [iconError, setIconError] = useState("");
    const { subjectId } = useParams<{ subjectId: string }>();

    const handleCreateLecture = (e : FormEvent<HTMLFormElement>) => { 
        e.preventDefault();
        const userId = load("userId");
        let canCreateLecture = true;
        if (!title) {
            setTitleError("Missing lecture title!");
            canCreateLecture = false;
        } else {
            setTitleError("");
        }
        if (!icon) {
            setIconError("Missing lecture Icon!");
            canCreateLecture = false;
        } else {
            setIconError("");
        }
        if (canCreateLecture) {
            axios.post(`http://localhost:8080/api/lecture/save/${subjectId}`, {
                "name": title,
                "icon": icon, 
                "author": {
                    "id": userId
                }
            }).then((response) => {
                window.location.reload();
            }).catch((error) => {
                alert("Could not create lecture! Please try again!");
            });
        }
    }

    return (
        <Box component="form" onSubmit={handleCreateLecture} noValidate
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
                marginBottom: 2,
                flexDirection: 'column',
                display: 'flex',
                alignItems: 'center'
            }}>
                <Typography component="h4" variant="h4" align="center">
                    Create Lecture
                </Typography>
                <Box width={1}>
                    <CssTextField
                        margin="normal"
                        required
                        fullWidth
                        id="create-lecture-title"
                        placeholder="Lecture Title"
                        name="name"
                        autoComplete="Lecture Title"
                        value={title}
                        error={!!titleError}
                        helperText={titleError}
                        onChange={e => setTitle(e.target.value)}
                    />
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
            <Box textAlign={"center"} margin="normal" marginBottom={"20%"} width={"40%"}>
                <Button className={"button"} variant="contained" style={{ textTransform: "none", fontSize: "130%" }} fullWidth type="submit">
                    Upload Document
                </Button>
            </Box>
        </Box>
    )
}

export default CreateLecturePopup;