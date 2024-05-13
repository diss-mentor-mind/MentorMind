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
          width="100%"
        >
          { }
          <Comments
    comments={[
        {
            id: '1',
            username: 'John Doe',
            text: 'This is a great article!',
            timestamp: '2024-05-11T15:47:00',
            profilePicture: null,
            replies: [
                {
                    id: '1-1',
                    username: 'Alice',
                    text: 'I agree!',
                    timestamp: '2024-05-11T15:49:00',
                    profilePicture: null
                }
            ]
        },
        {
            id: '2',
            username: 'Jane Smith',
            text: 'I agree, very informative!',
            timestamp: '2024-05-11T15:48:00',
            profilePicture: null,
            replies: [
                {
                    id: '2-1',
                    username: 'Bob',
                    text: 'I disagree!',
                    timestamp: '2024-05-11T15:50:00',
                    profilePicture: null
                }
            ]
        },
        {
            id: '3',
            username: 'Alice Johnson',
            text: 'Thanks for sharing!',
            timestamp: '2024-05-11T15:49:00',
            profilePicture: null,
            replies: [
                {
                    id: '3-1',
                    username: 'John Doe',
                    text: 'You\'re welcome!',
                    timestamp: '2024-05-11T15:51:00',
                    profilePicture: null
                }
            ]
        },
    ]}
/>

          <div style={{ marginTop: '20px' }}> { }
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input
                type="checkbox"
                // checked={includeTimestamp}
                // onChange={handleCheckboxChange}
                style={{ marginRight: '5px' }}
              />
              <span style={{ fontSize: '14px' }}>Tag current timestamp</span>
            </label>

            <input
              type="text"
              // value={newComment}
              // onChange={handleCommentChange}
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
        </PinnedContainer></Grid>

    </Grid>
  );
};
export default VideoPage;
