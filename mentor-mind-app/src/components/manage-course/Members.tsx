import React, {useState} from 'react';
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
    styled,
    Modal
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import StyledContainer from "../containers/StyledContainer";
import TextPopUp from "../../pages/TextPopUp";

const CssTextField = styled(TextField)({
    "& .MuiInputBase-root": {
        width: '100%',
        backgroundColor: "var(--secondary-color)",
        borderRadius: "10px",
    },
});

const CourseInformation = () => {

    const [members, setMembers] = useState([
        {id: 1, name: 'Maria Popescu', role: 'Student'},
        {id: 2, name: 'Corina Gligan   ', role: 'Student'},
        {id: 3, name: 'Ioana Damian', role: 'Student'},
        {id: 4, name: 'Briana Petrea', role: 'Student'},
    ]);

    function returnCourseCode() {
        return "tX6rY8";
    }

    const [open, setOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState('');
    const [modalDescription, setModalDescription] = useState('');

    const handleOpen = (title: string, description: string) => {
        setModalTitle(title);
        setModalDescription(description);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{height: '75vh', overflow: 'auto'}}>
            <Box
                component="form"
                noValidate
                sx={{
                    flexDirection: "column",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "95%"
                }}
            >
                <Typography component="h4" variant="h4" sx={{marginTop: "10px", width: "100%", textAlign: 'center'}}>
                    Members
                </Typography>
                <Typography variant="h5" sx={{marginTop: "10px", width: "100%"}}>
                    Invite new members
                </Typography>
                <StyledContainer>
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
                        sx={{textTransform: "none", width: '20%', marginLeft: '16px'}}
                        onClick={() => handleOpen('Feature Not Implemented', 'This feature is not yet implemented. Let us know if you need it :)')}
                    >
                        Invite
                    </Button>
                    <TextPopUp open={open} handleClose={handleClose} title={modalTitle}
                               description={modalDescription}/>
                </StyledContainer>
            </Box>
            <Typography variant="h5" sx={{marginTop: "10px", width: "100%"}}>
                Course Invitation Code
            </Typography>
            <Typography variant="h6" sx={{marginTop: "10px", width: "100%", textAlign: "center"}}>
                {returnCourseCode()}
            </Typography>
            <Typography variant="h5" sx={{marginTop: "10px", width: "100%"}}>
                Current Members
            </Typography>
            <List sx={{width: "100%", textAlign: 'center'}}>
                {members.map(member => (
                    <ListItem key={member.id} sx={{pl: 4, pr: 4}}>
                        <Avatar sx={{mr: 2}}>{member.name[0]}</Avatar>
                        <ListItemText primary={member.name}/>
                        <ListItemText primary={member.role}/>
                        <ListItemSecondaryAction>
                            <IconButton aria-label="delete" sx={{color: "var(--secondary-color)"}}
                                        onClick={() => handleOpen('Feature Not Implemented', 'This feature is not yet implemented. Let us know if you need it :)')}>
                                <CloseIcon/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>

        </Box>
    );
};

export default CourseInformation;
