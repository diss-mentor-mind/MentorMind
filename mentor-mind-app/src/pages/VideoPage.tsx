import { Box, Grid, Button } from "@mui/material";
import Comments from "../components/comments/comments";
import PinnedContainer from "../components/containers/PinnedContainer";

const VideoPage = () => {
  return (
    <Grid container spacing={2} sx={{ display: "flex", flexDirection: "row" }}>
      <Grid sx={{ height: "700px", width: "1000px", marginLeft: "40px", marginTop: "50px", backgroundColor: "var(--primary-color)" }}>
        {"Video here"}
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
     
        // Add more comments here if needed
    ]}
/>

          </Box>


          <div style={{ marginTop: '20px' }}>
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" style={{ marginRight: '5px' }} />
              <span style={{ fontSize: '14px' }}>Tag current timestamp</span>
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

export default VideoPage;