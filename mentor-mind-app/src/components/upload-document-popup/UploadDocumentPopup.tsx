import {Box, Button, TextField, Typography, styled, FormControl, Select, MenuItem, Stack} from "@mui/material";
import { useState } from "react";
import PinnedContainer from "../containers/PinnedContainer";


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


const UploadDocumentPopup = () => {
    const handleUploadDocument = () => {}
    const [icon, setIcon] = useState("");

    return (
        <Stack direction={"row"} justifyContent={"space-evenly"} minHeight={"calc( 100% - 100px );"} height={"calc( 100% - 100px );"} alignItems={"center"} margin={"auto"}>
            <PinnedContainer width="60%" height="80%">
                <Box component="form" onSubmit={handleUploadDocument} noValidate
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
                        <Typography component="h4" variant="h4">
                            Upload Document
                        </Typography>
                        <Box width={1}>
                            <CssTextField
                                margin="normal"
                                required
                                fullWidth
                                id="create-document-title"
                                placeholder="Document Title"
                                name="document-title"
                                autoComplete="Document Title"
                            />
                            <CssTextField
                                margin="normal"
                                required
                                fullWidth
                                id="create-course-file"
                                placeholder="Upload File..."
                                name="course-file"
                                type="file"
                            />
                            <CssTextField
                                margin="normal"
                                required
                                fullWidth
                                multiline
                                rows={7}
                                id="create-course-description"
                                placeholder="Add Description"
                                name="course-description"
                                autoComplete="Course Description"
                            />
                        </Box>
                    </Box>
                    <Box textAlign={"center"} margin="normal" marginBottom={"50%"} width={"40%"}>
                        <Button className={"button"} variant="contained" style={{textTransform: "none", fontSize: "130%"}} fullWidth>
                            Upload Document
                        </Button>
                    </Box>
                </Box>
            </PinnedContainer>
        </Stack>
    )
}

export default UploadDocumentPopup;