import React, {useState} from 'react';
import {
    Box,
    Button,
    TextField,
    Typography,
    styled,
    FormLabel,
    Stack,
} from "@mui/material";
import axios from 'axios';
import StyledContainer from "../containers/StyledContainer";
import {load} from "../../util/localStorage";

const CssTextField = styled(TextField)({
    "& .MuiInputBase-root": {
        backgroundColor: "var(--secondary-color)",
        borderRadius: "10px",
    },
});

interface FormData {
    currentPassword: string;
    newPassword: string;
    repeatPassword: string;
}

interface Errors {
    currentPassword: string;
    newPassword: string;
    repeatPassword: string;
}

const SettingsMainComponent: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        currentPassword: '',
        newPassword: '',
        repeatPassword: '',
    });

    const [errors, setErrors] = useState<Partial<Errors>>({});

    const userId = load("userId");
    const userEmail = load("userEmail");
    const userFirstName = load("userName");
    const userLastName = load("userLastName");
    const userPassword = load("userPassword");
    const userRole = load("userRole");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validatePasswords = (): boolean => {
        const {currentPassword, newPassword, repeatPassword} = formData;
        const newErrors: Partial<Errors> = {};

        if (currentPassword !== userPassword) {
            newErrors.currentPassword = 'Current password is incorrect';
        }
        if (newPassword.length < 8) {
            newErrors.newPassword = 'New password must be at least 8 characters long';
        }
        if (newPassword !== repeatPassword) {
            newErrors.repeatPassword = 'New passwords do not match';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSettingsPassword = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validatePasswords()) {
            return;
        }

        axios.post('http://localhost:8080/api/account/save', {
            id: userId,
            email: userEmail,
            firstName: userFirstName,
            lastName: userLastName,
            role: userRole,
            password: formData.newPassword,
        }, {withCredentials: false})
            .then((response) => {
                console.log('Password updated successfully:', response.data);
                window.location.href = "/courses";
            })
            .catch((error) => {
                alert("Saving was not possible! Please try again");
                console.log(error);
            });
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
                onSubmit={handleSettingsPassword}
                noValidate
                sx={{
                    marginRight: "13%",
                    flexDirection: "column",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "90%",
                    gap: "5px",
                }}
            >
                <Box
                    sx={{
                        margin: "5px",
                        flexDirection: "column",
                        display: "flex",
                        width: "100%",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                        }}
                    >
                        <Typography component="h4" variant="h4" sx={{marginTop: "10px"}}>
                            Change Password
                        </Typography>
                    </Box>
                    <Box sx={{width: "100%"}}>
                        <StyledContainer>
                            <FormLabel
                                htmlFor="settings-current-password"
                                sx={{
                                    width: "260px",
                                    color: "var(--secondary-color)",
                                    fontSize: "100%",
                                }}
                            >
                                Current Password
                            </FormLabel>
                            <CssTextField
                                margin="dense"
                                required
                                fullWidth
                                id="settings-current-password"
                                placeholder="Current Password"
                                name="currentPassword"
                                type="password"
                                autoComplete="off"
                                size="small"
                                value={formData.currentPassword}
                                onChange={handleInputChange}
                                error={Boolean(errors.currentPassword)}
                                helperText={errors.currentPassword}
                            />
                        </StyledContainer>
                        <StyledContainer>
                            <FormLabel
                                htmlFor="settings-new-password"
                                sx={{
                                    width: "260px",
                                    color: "var(--secondary-color)",
                                    fontSize: "100%",
                                }}
                            >
                                New Password
                            </FormLabel>
                            <CssTextField
                                margin="dense"
                                required
                                fullWidth
                                id="settings-new-password"
                                placeholder="New Password"
                                name="newPassword"
                                type="password"
                                autoComplete="off"
                                size="small"
                                value={formData.newPassword}
                                onChange={handleInputChange}
                                error={Boolean(errors.newPassword)}
                                helperText={errors.newPassword}
                            />
                        </StyledContainer>
                        <StyledContainer>
                            <FormLabel
                                htmlFor="settings-repeat-password"
                                sx={{
                                    width: "260px",
                                    color: "var(--secondary-color)",
                                    fontSize: "100%",
                                }}
                            >
                                Repeat New Password
                            </FormLabel>
                            <CssTextField
                                margin="dense"
                                required
                                fullWidth
                                id="settings-repeat-password"
                                placeholder="Repeat New Password"
                                name="repeatPassword"
                                type="password"
                                autoComplete="off"
                                size="small"
                                value={formData.repeatPassword}
                                onChange={handleInputChange}
                                error={Boolean(errors.repeatPassword)}
                                helperText={errors.repeatPassword}
                            />
                        </StyledContainer>
                    </Box>
                </Box>
                <Box width={"100%"} display="flex" justifyContent="flex-end">
                    <Box
                        margin="dense"
                        width={"40%"}
                    >
                        <Button
                            type="submit"
                            className={"button"}
                            variant="contained"
                            style={{textTransform: "none"}}
                            fullWidth
                        >
                            Change Password
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Stack>
    );
};

export default SettingsMainComponent;

