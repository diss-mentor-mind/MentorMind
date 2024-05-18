import React, { useEffect, useState } from 'react';
import { Box, Grid, Button } from "@mui/material";
import Comments from "../components/comments/comments";
import PinnedContainer from "../components/containers/PinnedContainer";
import CommentInterface from '../interfaces/CommentInterface'; // Update the import path if needed

interface PdfPageProps {
    pdfId: string;
}

const PdfPage: React.FC<PdfPageProps> = ({ pdfId }: PdfPageProps) => {
    const [comments, setComments] = useState<CommentInterface[]>([]);

    useEffect(() => {
        // Fetch comments from the API
        fetch(`http://localhost:8080/api/comment/1`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch comments');
                }
                return response.json();
            })
            .then(data => {
                setComments(data);
            })
            .catch(error => {
                console.error('Error fetching comments:', error);
            });
    }, [pdfId]);



    return (
        <Grid container spacing={2} sx={{ display: "flex", flexDirection: "row" }}>
            <Grid sx={{ height: "700px", width: "1000px", marginLeft: "40px", marginTop: "50px", backgroundColor: "var(--primary-color)" }}>
                {`PDF file with ID: ${pdfId}`}
            </Grid>
            <Grid sx={{ height: "100%", width: "20%", marginLeft: "40px", marginTop: "50px" }}>
                <PinnedContainer height="100%" width="100%">
                    <Box
                        sx={{
                            height: "500px",
                            overflowY: "auto",
                            "&::-webkit-scrollbar": {
                                width: "12px",
                            },
                            "&::-webkit-scrollbar-track": {
                                backgroundColor: "var(--primary-color)",
                            },
                            "&::-webkit-scrollbar-thumb": {
                                backgroundColor: "var(--button-color)",
                                borderRadius: "20px",
                                border: "3px solid var(--primary-color)",
                            },
                        }}
                    >
                        <Comments comments={comments} />
                    </Box>
                    <div style={{ marginTop: '20px' }}>
                        <label style={{ display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox" style={{ marginRight: '5px' }} />
                            <span style={{ fontSize: '14px' }}>Tag current page</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Add a comment..."
                            style={{
                                marginRight: '10px',
                                padding: '8px',
                                borderRadius: '4px',
                                border: '1px solid #ccc',
                                width: '95%',
                                height: '60px',
                                fontSize: '14px',
                                boxSizing: 'border-box',
                                marginTop: '10px',
                            }}
                        />
                        <Button
                            sx={{
                                backgroundColor: "var(--button-color)",
                                color: "white",
                                width: "70%",
                                height: "70%",
                                marginBottom: "10%",
                                marginTop: '10px'
                            }}
                        >Add Comment</Button>
                    </div>
                </PinnedContainer>
            </Grid>
        </Grid>
    );
};

export default PdfPage;
