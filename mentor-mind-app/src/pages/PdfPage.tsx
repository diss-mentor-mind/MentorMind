import React, { useEffect, useState } from 'react';
import { Box, Grid, Button } from "@mui/material";
import Comments from "../components/comments/comments";
import PinnedContainer from "../components/containers/PinnedContainer";
import CommentInterface from '../interfaces/CommentInterface'; 
import AuthorInterface, { emptyAuthor } from '../interfaces/AuthorInterface';
import { useParams } from 'react-router-dom';

interface PdfPageProps {
    pdfId: string;
    currentUser: AuthorInterface;
}

const PdfPage: React.FC<PdfPageProps> = ({ currentUser }: PdfPageProps) => {
    const { pdfId } = useParams<{ pdfId: string }>();
    const PdfId = pdfId ?? ''; // Fallback to an empty string if VideofId is undefined
    const [comments, setComments] = useState<CommentInterface[]>([]);
    const [newComment, setNewComment] = useState<string>('');

    useEffect(() => {
        // Fetch comments from the API
        fetch(`http://localhost:8080/api/comment/${pdfId}`)
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

    const handleAddComment = () => {
        // Construct the request body
        const requestBody = {
            author: null, // change after navigation
            replyTo: null, // will be changed to the comment of the current one
            content: newComment,
            anchor: 0 // Adjust anchor as needed
        };

        fetch(`http://localhost:8080/api/comment/save/${pdfId}`, {  
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to add comment');
                }
                // Assuming the API returns the updated comments after adding a new comment
                return response.json();
            })
            .then(data => {
                // Update the comments state with the new data
                setComments(data);
                // Clear the newComment state after adding the comment
                setNewComment('');
            })
            .catch(error => {
                console.error('Error adding comment:', error);
            });
    };

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
                        <Comments comments={comments} currentUser={currentUser} materialId={PdfId}  />
                    </Box>
                    <div style={{ marginTop: '20px' }}>
                        <label style={{ display: 'flex', alignItems: 'center' }}>
                            <input type="checkbox" style={{ marginRight: '5px' }} />
                            <span style={{ fontSize: '14px' }}>Tag current page</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Add a comment..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
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
                            onClick={handleAddComment} // Call handleAddComment on button click
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
