import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

// @ts-ignore
const TextPopUp = ({ open, handleClose, title, description  }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        textAlign: 'center'
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="not-implemented-title"
            aria-describedby="not-implemented-description"
        >
            <Box sx={style}>
                {title && (
                    <Typography id="not-implemented-title" variant="h6" component="h2">
                        {title}
                    </Typography>
                )}
                <Typography id="not-implemented-description" sx={{ mt: 2 }}>
                    {description}
                </Typography>
                <Button variant="contained" sx={{ mt: 2 }} onClick={handleClose}>
                    Close
                </Button>
            </Box>
        </Modal>
    );
};

export default TextPopUp;
