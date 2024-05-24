import React, { useEffect, useState } from 'react';
import { Box, Grid, Button, TextField } from "@mui/material";
import Comments from "../components/comments/comments";
import PinnedContainer from "../components/containers/PinnedContainer";
import RenderPdfComponent from "../components/render/RenderPdfComponent";
import CommentInterface from '../interfaces/CommentInterface';
import AuthorInterface from '../interfaces/AuthorInterface';
import { useParams } from 'react-router-dom';
import { load } from '../util/localStorage';
import { trackButtonClick, trackPageView } from '../util/trackerUtil';

interface PdfPageProps {
    currentUser: AuthorInterface;
}

const PdfPage: React.FC<PdfPageProps> = ({ currentUser }: PdfPageProps) => {
    const { pdfId } = useParams<{ pdfId: string }>();
    const PdfId = pdfId ?? ''; // Fallback to an empty string if PdfId is undefined
    const [comments, setComments] = useState<CommentInterface[]>([]);
    const [newComment, setNewComment] = useState<string>("");
    const [anchorValue, setAnchorValue] = useState<number>(0); // State for the anchor value

    const userId = load("userId");
    const userEmail = load("userEmail");
    const userFirstName = load("userName");
    const userLastName = load("userLastName");
    const userPassword = load("userPassword");
    const userRole = load("userRole");

    useEffect(() => {
        trackPageView("PdfPage");
    }, []);

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
                setComments(Array.isArray(data) ? data : []); // Ensure data is an array
            })
            .catch(error => {
                console.error('Error fetching comments:', error);
            });
    }, [pdfId]);

    const handleAddComment = () => {
        // Construct the request body
        const requestBody = {
            author: {
                id: userId,
                email: userEmail,
                firstName: userFirstName,
                lastName: userLastName,
                password: userPassword,
                role: userRole
            },
            replyTo: null, // for the reply the call is made from the comment component
            content: newComment,
            anchor: anchorValue
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
                trackButtonClick("AddCommentSuccess");
                // Assuming the API returns the added comment
                return response.json();
            })
            .then(data => {
                // Update the comments state with the new comment
                setComments([...comments, data]);
                setNewComment("");
                setAnchorValue(0);
            })
            .catch(error => {
                trackButtonClick("AddCommentFail");
                console.error('Error adding comment:', error);
            });
    };

    return (
        <Grid container spacing={2} sx={{ display: "flex", flexDirection: "row" }}>
            <Grid sx={{ height: "100%", width: "60%", marginLeft: "40px", marginTop: "50px", backgroundColor: "var(--primary-color)" }}>
                <Box sx ={{
                    marginTop: "15px", marginBottom: "15px"
                }}
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <RenderPdfComponent id={Number(pdfId)}/>
                </Box>
            </Grid>
            <Grid item sx={{ height: "100%", width: "20%", marginLeft: "40px", marginTop: "50px" }}>
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
                        <Comments comments={comments} currentUser={currentUser} materialId={PdfId} fileType="pdf" />

                    </Box>
                    <div style={{ marginTop: '20px' }}>
                        <TextField
                            label="Page"
                            type="number"
                            value={anchorValue}
                            onChange={(e) => {
                                const newValue = Math.max(0, Number(e.target.value)); // Ensure minimum value of 0
                                setAnchorValue(newValue);
                            }}
                        sx={{
                            marginBottom: '10px',
                            width: '95%',
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'white',
                                },
                                '&:hover fieldset': {
                                    borderColor: 'white',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'white',
                                },
                            },
                            '& .MuiInputLabel-root': {
                                color: 'white',
                            },
                            '& .MuiInputLabel-root.Mui-focused': {
                                color: 'white',
                            },
                        }}
                        InputProps={{
                            style: {
                                color: 'white',
                            },
                        }}
                        />
                        <TextField
                            label="Comment"
                            type="text"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="Add a comment..."
                            multiline
                            rows={3}
                            sx={{
                                marginBottom: '10px',
                                width: '95%',
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&:hover fieldset': {
                                        borderColor: 'white',
                                    },
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'white',
                                    },
                                },
                                '& .MuiInputLabel-root': {
                                    color: 'white',
                                },
                                '& .MuiInputLabel-root.Mui-focused': {
                                    color: 'white',
                                },
                                '& .MuiInputBase-input': {
                                    color: 'white',
                                },
                            }}
                        />
                        <Button
                            onClick={handleAddComment}
                            sx={{
                                backgroundColor: "var(--button-color)",
                                color: "white",
                                width: "95%",
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
