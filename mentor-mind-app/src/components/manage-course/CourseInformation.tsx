import {
    Box,
    Button,
    TextField,
    Typography,
    styled,
    FormControlLabel,
    Checkbox
} from "@mui/material";
import StyledContainer from "../containers/StyledContainer";
import React, {useState} from "react";
import TextPopUp from "../../pages/TextPopUp";

const CssTextField = styled(TextField)({
    "& .MuiInputBase-root": {
        backgroundColor: "var(--secondary-color)",
        borderRadius: "10px",
    },
});

const CourseInformation = () => {
    const [open, setOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalDescription, setModalDescription] = useState('');
    const handleCourseInformation = () => {
    };
    const handleCheckboxChange = () => {

    };
    const handleOpen = (title: string, description: string) => {
        setModalTitle(title);
        setModalDescription(description);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{height: '75vh'}}>
            <Box
                component="form"
                onSubmit={handleCourseInformation}
                noValidate
                sx={{
                    flexDirection: "column",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "95%",
                }}
            >
                <Box
                    sx={{
                        margin: "5px",
                        flexDirection: "column",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            textAlign: 'center',
                            //   marginLeft: "10px",
                        }}
                    >
                        <Typography component="h4" variant="h4" sx={{marginTop: "10px"}}>
                            Course Information
                        </Typography>
                    </Box>

                    <Box sx={{width: "100%"}}>
                        <StyledContainer>
                            <CssTextField
                                margin="dense"
                                required
                                fullWidth
                                id="course-info"
                                name="name"
                                autoComplete="off"
                                size="small"
                            />
                        </StyledContainer>
                    </Box>
                </Box>
                <FormControlLabel
                    control={
                        <Checkbox
                            // checked={approvalRequired}
                            onChange={handleCheckboxChange}
                            name="approvalRequired"
                            sx={{
                                color: "var(--secondary-color)",
                                '&.Mui-checked': {
                                    color: "var(--background-blue-color)",
                                }
                            }}
                        />
                    }
                    label="Students need to have their documents approved before they are public"
                />
                <Box width={"100%"} display="flex" justifyContent="center">
                    <Box margin="dense" width={"20%"}>
                        <Button
                            className={"button"}
                            variant="contained"
                            style={{textTransform: "none"}}
                            fullWidth
                            onClick={() => handleOpen('Feature Not Implemented', 'This feature is not yet implemented. Let us know if you need it :)')}
                        >
                            Save
                        </Button>
                        <TextPopUp open={open} handleClose={handleClose} title={modalTitle}
                                   description={modalDescription}/>
                    </Box>
                </Box>
            </Box>

        </Box>
    );
};

export default CourseInformation;
