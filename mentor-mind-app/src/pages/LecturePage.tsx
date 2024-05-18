import { Grid } from "@mui/material";
import LectureInterface, {
  populatedLectures,
} from "../interfaces/LectureInterface";
import LectureContainer from "../components/containers/LectureContainer";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MaterialInterface from "../interfaces/MaterialInterface";

const LecturePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const lectures = (location.state?.lectures as LectureInterface[]) || [];

  const handleLectureClick = (materials: MaterialInterface[]) => {
    navigate("/course", { state: { materials } });
  };

  return (
    <Grid
      sx={{
        marginTop: "2%",
        marginLeft: "13%", // Center horizontally
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "flex-start",
      }}
    >
      {lectures.map((lecture, index) => (
        <Grid
          key={index}
          sx={{
            width: "20%",
            height: "280px",
            marginBottom: "2%",
            ...(index % 3 !== 2 && { marginRight: "12%" }), // Apply right margin except for the last item in each row
          }}
          onClick={() => handleLectureClick(lecture.materials)}
        >
          <LectureContainer {...lecture} />
        </Grid>
      ))}
    </Grid>
  );
};

export default LecturePage;
