import { Fab, Grid, Modal, Stack } from "@mui/material";
import LectureInterface from "../interfaces/LectureInterface";
import LectureContainer from "../components/containers/LectureContainer";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import PinnedContainer from "../components/containers/PinnedContainer";
import CreateLecturePopup from "../components/create-lecture-popup/CreateLecturePopup";
import { load } from "../util/localStorage";
import { trackButtonClick, trackPageView } from "../util/trackerUtil";

const LecturePage = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const { subjectId } = useParams<{ subjectId: string }>();
  const [lectures, setLectures] = useState<LectureInterface[]>([]);

  const userRole: string = load("userRole");

  const handleAddLecture = () => {
    trackButtonClick("AddLecture");
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    trackButtonClick("CloseLectureModel");
    console.log("trying to close");
    setOpenModal(false);
  };

  useEffect(() => {
    trackPageView("LecturePage");
  }, []);

  const handleLectureClick = (lecture: LectureInterface) => {
    trackButtonClick("LectureClick");
    navigate(`/material/${lecture.id}`);
  };

  useEffect(() => {
    const fetchLectures = async () => {
      try {
        if (subjectId) {
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
  }, [subjectId]);

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
      {userRole === "Teacher" && (
        <Fab
          aria-label="add"
          onClick={handleAddLecture}
          sx={{
            position: "fixed",
            bottom: "16px",
            right: "16px",
            color: "var(--icon-primary-color)",
            background: "var(--button-color)",
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            "&:hover": {
              background: "var(--dark-button-color)",
            },
            "& svg": {
              width: "60px",
              height: "60px",
            },
          }}
        >
          <AddIcon />
        </Fab>
      )}
      <Modal open={openModal} onClose={handleCloseModal}>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          width={"70%"}
          minHeight={"calc( 100% - 150px );"}
          height={"80%"}
          alignItems={"flex-start"}
          margin={"40px auto"}
        >
          {userRole === "Teacher" && (
            <PinnedContainer width="40%" height="95%">
              <CreateLecturePopup />
            </PinnedContainer>
          )}
        </Stack>
      </Modal>
    </Grid>
  );
};

export default LecturePage;
