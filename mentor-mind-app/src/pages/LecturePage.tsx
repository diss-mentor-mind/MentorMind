import { Grid } from "@mui/material";
import LectureInterface from "../interfaces/LectureInterface";
import LectureContainer from "../components/containers/LectureContainer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const LecturePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { subjectId } = useParams<{ subjectId: string }>();
  const [lectures, setLectures] = useState<LectureInterface[]>(
    (location.state?.lectures as LectureInterface[]) || []
  );

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        // Only try to update if the list wasn't already taken from the location state
        if (!lectures.length && subjectId) {
          const response = await axios.get<LectureInterface[]>(
            `http://localhost:8080/api/lecture/fromsubject/${subjectId}`,
            {
              headers: {
                accept: "application/json",
              },
            }
          );
          setLectures(response.data);
        }
      } catch (error) {
        console.error("Error fetching lectures:", error);
      }
    };

    fetchLectures();
  }, [lectures.length, subjectId]);

  const handleLectureClick = (lecture: LectureInterface) => {
    navigate(`/material/${lecture.id}`);
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
            cursor: "pointer",
            ...(index % 3 !== 2 && { marginRight: "12%" }), // Apply right margin except for the last item in each row
          }}
          onClick={() => handleLectureClick(lecture)}
        >
          <LectureContainer {...lecture} />
        </Grid>
      ))}
    </Grid>
  );
};

export default LecturePage;
