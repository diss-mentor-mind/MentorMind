import { Box, Grid, Button } from "@mui/material";
import Comments from "../components/comments/comments";
import PinnedContainer from "../components/containers/PinnedContainer";

const PdfPage = () => {
    return (
        <Grid container spacing={2} sx={{ display: "flex", flexDirection: "row" }}>
            <Grid sx={{ height: "700px", width: "1000px", marginLeft: "40px", marginTop: "50px", backgroundColor: "var(--primary-color)" }}>
                {"Pdf file here"}
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

                        <Comments
                            comments={[
                                {
                                    id: '1',
                                    username: 'John Doe',
                                    text: 'This is a great article!',
                                    page: '1',
                                    profilePicture: null,
                                    replies: [
                                        {
                                            id: '1-1',
                                            username: 'Alice',
                                            text: ' REPLY I agree!',
                                            profilePicture: null
                                        }
                                    ]
                                },
                                {
                                    id: '2',
                                    username: 'Jane Smith',
                                    text: 'I agree, very informative!',
                                    page: '2',
                                    profilePicture: null,
                                    replies: [
                                        {
                                            id: '2-1',
                                            username: 'Bob',
                                            text: 'REPLY I disagree!',
                                            profilePicture: null
                                        }
                                    ]
                                },
                                {
                                    id: '3',
                                    username: 'Alice Johnson',
                                    text: 'Thanks for sharing!',
                                    page: '3',
                                    profilePicture: null,
                                    replies: [
                                        {
                                            id: '3-1',
                                            username: 'John Doe',
                                            text: 'REPLY You\'re welcome!',
                                            profilePicture: null
                                        }
                                    ]
                                }
                            ]}
                        />
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
