import React, { useEffect, useState } from 'react';
import { Box, Grid, Button, TextField } from "@mui/material";
import Comments from "../components/comments/comments";
import PinnedContainer from "../components/containers/PinnedContainer";
import RenderVideoComponent from "../components/render/RenderVideoComponent";
import CommentInterface from '../interfaces/CommentInterface'; // Ensure the correct path to the interface
import AuthorInterface from '../interfaces/AuthorInterface';
import { useParams } from 'react-router-dom';
import { load } from '../util/localStorage';

interface VideoPageProps {
  videoId: string;
  currentUser: AuthorInterface;
}

const VideoPage: React.FC<VideoPageProps> = ({ currentUser }: VideoPageProps) => {
  const { videoId } = useParams<{ videoId: string }>();
  const VideoId = videoId ?? ''; // Fallback to an empty string if VideofId is undefined
  const [comments, setComments] = useState<CommentInterface[]>([]);
  const [commentText, setCommentText] = useState<string>("");
  const [anchorValue, setAnchorValue] = useState<number>(0); // State for the anchor value

  const userId = load("userId");
  const userEmail = load("userEmail");
  const userFirstName = load("userName");
  const userLastName = load("userLastName");
  const userPassword = load("userPassword");
  const userRole = load("userRole");

  useEffect(() => {
    // Fetch comments from the API
    fetch(`http://localhost:8080/api/comment/${videoId}`)
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
  }, [videoId]);

  const handleAddComment = () => {
    const newComment = {
      author: {
        id: userId,
        email: userEmail,
        firstName: userFirstName,
        lastName: userLastName,
        password: userPassword,
        role: userRole
      },
      replyTo: null,
      content: commentText,
      anchor: anchorValue // Use the anchor value from the state
    };

    fetch(`http://localhost:8080/api/comment/save/${videoId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newComment)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to save comment');
        }
        return response.json();
      })
      .then(savedComment => {
        setComments([...comments, savedComment]);
        setCommentText("");
        setAnchorValue(0); // Reset anchor value after saving
      })
      .catch(error => {
        console.error('Error saving comment:', error);
      });
  };

  return (
    <Grid container spacing={2} sx={{ display: "flex", flexDirection: "row" }}>
      <Grid sx={{ height: "700px", width: "1000px", marginLeft: "40px", marginTop: "50px", backgroundColor: "var(--primary-color)" }}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <RenderVideoComponent />
        </Box>
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
            <Comments comments={comments} currentUser={currentUser} materialId={VideoId} />
          </Box>
          <div style={{ marginTop: '20px' }}>
            <TextField
              label="Video Minute"
              type="number"
              value={anchorValue}
              onChange={(e) => setAnchorValue(Number(e.target.value))}
              placeholder="Enter anchor value"
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
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
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

export default VideoPage;
