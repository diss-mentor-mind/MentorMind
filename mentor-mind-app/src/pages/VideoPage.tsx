import { Box, Grid, Button, Container } from "@mui/material";
import Comments from "../components/comments/comments";
import PinnedContainer from "../components/containers/PinnedContainer";




const VideoPage = () => {
  return (
    <Grid container spacing={2} sx={{
      display: "flex",
      flexDirection: "row"

    }} >  { }
      <Grid sx={{
        height: "700px",
        width: "1000px",
        marginLeft: "40px",
        marginTop: "50px"
      }}> { }
        <PinnedContainer 
        height="100%"
        width="100%" > { }
          {"Video here"}
        </PinnedContainer>
      </Grid>
      <Grid
        sx={{
          height: "100%",
          width: "20%",
          marginLeft: "40px",
          marginTop: "50px"
        }}
      >
        <PinnedContainer
          height="100%"
          width="100%" >
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
        </PinnedContainer></Grid>

    </Grid>
  );
};
export default VideoPage;
