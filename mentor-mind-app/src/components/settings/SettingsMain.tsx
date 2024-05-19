import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    styled,
    FormLabel,
    Stack,
    Avatar,
} from "@mui/material";
import axios from 'axios';
import Image from "../pics/puppy.png"; // Import the CSS file for styling
import StyledContainer from "../containers/StyledContainer";
import { load } from "../../util/localStorage";
import SnackbarNotification from '../notifications/SnackbarNotification';

const CssTextField = styled(TextField)({
    "& .MuiInputBase-root": {
        backgroundColor: "var(--secondary-color)",
        borderRadius: "10px",
    },
});

const SettingsMainComponent = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
    });
    const [errors, setErrors] = useState({
        email: '',
    });
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    const userId = load("userId");
    const userPassword = load("userPassword");
    const userRole = load("userRole");

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'email') {
            setErrors({
                ...errors,
                email: validateEmail(value) ? '' : 'Invalid email address',
            });
        }
    };

    const validateEmail = (email: string) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleSettingsChange = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (!validateEmail(formData.email)) {
            setErrors({
                ...errors,
                email: 'Invalid email address',
            });
            return;
        }

        axios.post('http://localhost:8080/api/account/save', {
            id: userId,
            email: formData.email,
            firstName: formData.firstName,
            lastName: formData.lastName,
            role: userRole,
            password: userPassword
        }, { withCredentials: false })
            .then((response) => {
                console.log('Info updated successfully:', response.data);
                setSnackbarMessage('Settings data updated successfully');
                setSnackbarOpen(true);
                window.location.href = "/courses";
            })
            .catch((error) => {
                alert("Saving was not possible! Please try again");
                console.log(error);
            });
    };

    const handleSnackbarClose = () => {
      setSnackbarOpen(false);
    };

    return (
        <Stack
            direction={"row"}
            justifyContent={"space-evenly"}
            width="100%"
            height="100%"
            alignItems={"center"}
        >
            <Box
                component="form"
                onSubmit={handleSettingsChange}
                noValidate
                sx={{
                    flexDirection: "column",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "80%",
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
                        }}
                    >
                        <Typography component="h4" variant="h4" sx={{ marginTop: "10px" }}>
                            Settings
                        </Typography>
                    </Box>

                    <Box sx={{ width: "100%" }}>
                        <StyledContainer>
                            <FormLabel
                                htmlFor="settings-first-name"
                                sx={{
                                    width: "170px",
                                    color: "var(--secondary-color)",
                                    fontSize: "120%",
                                }}
                            >
                                First Name
                            </FormLabel>
                            <CssTextField
                                margin="dense"
                                required
                                fullWidth
                                id="settings-first-name"
                                placeholder="First name"
                                name="firstName"
                                autoComplete="off"
                                size="small"
                                value={formData.firstName}
                                onChange={handleInputChange}
                            />
                        </StyledContainer>
                        <StyledContainer>
                            <FormLabel
                                htmlFor="settings-last-name"
                                sx={{
                                    width: "170px",
                                    color: "var(--secondary-color)",
                                    fontSize: "120%",
                                }}
                            >
                                Last Name
                            </FormLabel>
                            <CssTextField
                                margin="dense"
                                required
                                fullWidth
                                id="settings-last-name"
                                placeholder="Last Name"
                                name="lastName"
                                autoComplete="off"
                                size="small"
                                value={formData.lastName}
                                onChange={handleInputChange}
                            />
                        </StyledContainer>
                        <StyledContainer>
                            <FormLabel
                                htmlFor="settings-email"
                                sx={{
                                    width: "170px",
                                    color: "var(--secondary-color)",
                                    fontSize: "120%",
                                }}
                            >
                                E-mail
                            </FormLabel>
                            <CssTextField
                                margin="dense"
                                required
                                fullWidth
                                id="settings-email"
                                placeholder="student@university.com"
                                name="email"
                                autoComplete="off"
                                size="small"
                                value={formData.email}
                                onChange={handleInputChange}
                                error={Boolean(errors.email)}
                                helperText={errors.email}
                            />
                        </StyledContainer>
                    </Box>
                </Box>
                <Box width={"100%"} display="flex" justifyContent="flex-end">
                    <Box margin="dense" width={"40%"}>
                        <Button
                            type="submit"
                            className={"button"}
                            variant="contained"
                            style={{ textTransform: "none" }}
                            fullWidth
                        >
                            Submit
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    width: "30%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Avatar
                    alt="studentAvatar"
                    src={Image}
                    sx={{
                        width: "120px",
                        height: "120px",
                    }}
                />
            </Box>
            <SnackbarNotification
                open={snackbarOpen}
                message={snackbarMessage}
                onClose={handleSnackbarClose}
            />
        </Stack>
    );
};

export default SettingsMainComponent;
