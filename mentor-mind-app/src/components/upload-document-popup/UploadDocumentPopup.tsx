import {Box, Button, TextField, Typography, styled, FormControl, Select, MenuItem, Stack} from "@mui/material";
import {useState, ChangeEvent, FormEvent} from "react";
import axios from "axios";
import PinnedContainer from "../containers/PinnedContainer";
import {load} from "../../util/localStorage";

const CssTextField = styled(TextField)({
    '& .MuiInputBase-root': {
        backgroundColor: "var(--secondary-color)",
        borderRadius: "10px"
    }
});
const CssSelect = styled(FormControl)({
    '& .MuiInputBase-root': {
        backgroundColor: "var(--secondary-color)",
        borderRadius: "10px"
    }
});

const UploadDocumentPopup = () => {

    const userId = load("userId");
    const userEmail = load("userEmail");
    const userFirstName = load("userName");
    const userLastName = load("userLastName");
    const userPassword = load("userPassword");
    const userRole = load("userRole");

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        file: null as File | null
    });
    const [errors, setErrors] = useState({
        title: '',
        description: '',
        file: ''
    });

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setFormData({
            ...formData,
            file
        });
    };

    const validateForm = (): boolean => {
        let valid = true;
        const newErrors = {
            title: '',
            description: '',
            file: ''
        };

        if (!formData.title) {
            newErrors.title = 'Title is required';
            valid = false;
        }
        if (!formData.description) {
            newErrors.description = 'Description is required';
            valid = false;
        }
        if (!formData.file) {
            newErrors.file = 'File is required';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleUploadDocument = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const uploadData = new FormData();
        const material = {
            name: formData.title,
            author: {
                id: userId,
                email: userEmail,
                firstName: userFirstName,
                lastName: userLastName,
                role: userRole,
                password: userPassword
            },
            size: formData.file?.size,
            description: formData.description,
            isAccepted: false,
            timestamp: null, // todo change
            type: formData.file?.type
        };

        uploadData.append('material', JSON.stringify(material));
        if (formData.file) {
            uploadData.append('file', formData.file);
        }

        axios.post(`http://localhost:8080/api/material/save/${1}`, uploadData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                console.log('Document uploaded successfully:', response.data);
                // window.location.href = "/courses";
            })
            .catch(error => {
                console.error('Error uploading document:', error);
            });
    };


    // const handleUploadDocument = (e: FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //
    //     if (!validateForm()) {
    //         return;
    //     }
    //
    //     const uploadData = new FormData();
    //     uploadData.append('title', formData.title);
    //     uploadData.append('description', formData.description);
    //     if (formData.file) {
    //         uploadData.append('file', formData.file);
    //     }
    //
    //     axios.post('http://localhost:8080/api/material/save',
    //         {
    //             name: formData.title,
    //             author: {
    //                 id: userId,
    //                 email: userEmail,
    //                 firstName: userFirstName,
    //                 lastName: userLastName,
    //                 role: userRole,
    //                 password: userPassword
    //             },
    //             size: formData.file?.size,
    //             description: formData.description,
    //             isAccepted: false,
    //             timestamp: null,
    //             type: formData.file?.type
    //         }, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         })
    //         .then(response => {
    //             console.log('Document uploaded successfully:', response.data);
    //             // Handle successful upload, e.g., navigate to another page or show a success message
    //         })
    //         .catch(error => {
    //             console.error('Error uploading document:', error);
    //             // Handle upload error, e.g., show an error message
    //         });
    // };

    return (
        <Stack direction={"row"} justifyContent={"space-evenly"} minHeight={"calc( 100% - 100px );"}
               height={"calc( 100% - 100px );"} alignItems={"center"} margin={"auto"}>
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
                                name="title"
                                autoComplete="Document Title"
                                value={formData.title}
                                onChange={handleInputChange}
                                error={Boolean(errors.title)}
                                helperText={errors.title}
                            />
                            <CssTextField
                                margin="normal"
                                required
                                fullWidth
                                id="create-course-file"
                                placeholder="Upload File..."
                                name="file"
                                type="file"
                                onChange={handleFileChange}
                                error={Boolean(errors.file)}
                                helperText={errors.file}
                            />
                            <CssTextField
                                margin="normal"
                                required
                                fullWidth
                                multiline
                                rows={7}
                                id="create-course-description"
                                placeholder="Add Description"
                                name="description"
                                autoComplete="Course Description"
                                value={formData.description}
                                onChange={handleInputChange}
                                error={Boolean(errors.description)}
                                helperText={errors.description}
                            />
                        </Box>
                    </Box>
                    <Box textAlign={"center"} margin="normal" marginBottom={"50%"} width={"40%"}>
                        <Button type="submit" className={"button"} variant="contained"
                                style={{textTransform: "none", fontSize: "130%"}} fullWidth>
                            Upload Document
                        </Button>
                    </Box>
                </Box>
            </PinnedContainer>
        </Stack>
    );
}

export default UploadDocumentPopup;
