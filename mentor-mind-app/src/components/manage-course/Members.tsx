import React, { useState } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    List,
    ListItem,
    Avatar,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    styled
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import StyledContainer from "../containers/StyledContainer";

const CssTextField = styled(TextField)({
    "& .MuiInputBase-root": {
        width: '100%',
        backgroundColor: "var(--secondary-color)",
        borderRadius: "10px",
    },
});

const CourseInformation = () => {
    // Example handler for form submission
    const handleCourseInformation = () => {
        // Form submission logic here
    };

    // Initial state for members list
    const [members, setMembers] = useState([
        { id: 1, name: 'User 1', role: 'Student' },
        { id: 2, name: 'User 2', role: 'Teacher' },
        { id: 3, name: 'User 3', role: 'Teacher' },
        { id: 4, name: 'User 4', role: 'Student' },
        // { id: 5, name: 'User 5', role: 'Student' },
        // { id: 6, name: 'User 6', role: 'Teacher' },
        // { id: 7, name: 'User 7', role: 'Student' },
        // { id: 8, name: 'User 8', role: 'Teacher' },
        // { id: 9, name: 'User 9', role: 'Teacher' },
        // { id: 10, name: 'User 10', role: 'Student' }
    ]);

    // Function to return course code
    function returnCourseCode() {
        return "tX6rY8";
    }

    return (
        <Box sx={{ height: '75vh', overflow: 'auto' }}>
            <Box
                component="form"
                onSubmit={handleCourseInformation}
                noValidate
                sx={{
                    flexDirection: "column",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "95%"
                }}
            >
                <Typography component="h4" variant="h4" sx={{ marginTop: "10px", width: "100%", textAlign: 'center' }}>
                    Members
                </Typography>
                <Typography variant="h5" sx={{ marginTop: "10px", width: "100%" }}>
                    Invite new members
                </Typography>
                <StyledContainer >
                    <CssTextField
                        margin="dense"
                        required
                        id="invite-new-member"
                        name="name"
                        autoComplete="off"
                        size="small"
                        placeholder="Email addresses, separated by commas"
                    />
                    <Button
                        className="button"
                        variant="contained"
                        sx={{ textTransform: "none", width: '20%', marginLeft: '16px' }}
                    >
                        Invite
                    </Button>
                </StyledContainer>
                <Typography variant="h5" sx={{ marginTop: "10px", width: "100%" }}>
                    Course Invitation Code
                </Typography>
                <Typography variant="h6" sx={{ marginTop: "10px", width: "100%", textAlign: "center" }}>
                    {returnCourseCode()}
                </Typography>
                <Typography variant="h5" sx={{ marginTop: "10px", width: "100%" }}>
                    Current Members
                </Typography>
                <List sx={{ width: "100%", textAlign: 'center' }}>
                    {members.map(member => (
                        <ListItem key={member.id} sx={{ pl: 4, pr: 4 }}>
                            <Avatar sx={{ mr: 2 }}>{member.name[0]}</Avatar>
                            <ListItemText primary={member.name} />
                            <ListItemText primary={member.role} />
                            <ListItemSecondaryAction>
                                <IconButton aria-label="delete" sx={{ color: "var(--secondary-color)" }}>
                                    <CloseIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
};

export default CourseInformation;
