import { Box, Grid, Container } from "@mui/material";
import Comments from "../components/comments/comments";




const VideoPage = () => {
  return (
    <Grid container spacing={2}>  { }
      <Grid item xs={8}> { }
        <Box sx={{ padding: '1em' }}> { }
          {"video here"}
        </Box>
      </Grid>
      <Grid item xs={2}
        sx={{
          marginTop: "4%",
          width: "100%",
          boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.5)",
          backgroundColor: "var(--primary-color)"
        }}>
        { }
        <Comments comments={[
          { username: 'John Doe', text: 'This is a great article!', timestamp: '2024-05-11T15:47:00' },
          { username: 'Jane Smith', text: 'I agree, very informative!', timestamp: '2024-05-11T15:48:00' },
          { username: 'Alice Johnson', text: 'Thanks for sharing!', timestamp: '2024-05-11T15:49:00' },
        ]}></Comments>
        <div style={{ marginTop: '20px' }}> {/* Adjust spacing as needed */}
          <label>
            <input
              type="checkbox"
              //checked={includeTimestamp}
              //onChange={handleCheckboxChange}
              style={{ marginRight: '5px' }}
            />
            Tag current timestamp
          </label>
          <input
            type="text"
            //value={newComment}
            //onChange={handleCommentChange}
            placeholder="Add a comment..."
            style={{ marginRight: '10px' }} // Adjust spacing as needed
          />
          <button>Add Comment</button>
        </div>
      </Grid>
    </Grid>
  );
};
export default VideoPage;
