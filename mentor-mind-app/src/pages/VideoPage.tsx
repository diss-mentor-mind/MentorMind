import { Box, Container, makeStyles } from "@mui/material";
import Comments from "../components/comments/comments";

const useStyles = makeStyles(() => ({
  commentsContainer: {
    display: 'grid',
    placeItems: 'end',
  },
}));


const VideoPage = () => {
  return (
    <Box className={useStyles}>
      <Comments comments={[
        { username: 'John Doe', text: 'This is a great article!', timestamp: '2024-05-11T15:47:00' },
        { username: 'Jane Smith', text: 'I agree, very informative!', timestamp: '2024-05-11T15:48:00' },
        { username: 'Alice Johnson', text: 'Thanks for sharing!', timestamp: '2024-05-11T15:49:00' },
      ]}></Comments>
    </Box>
  );
};
export default VideoPage;
