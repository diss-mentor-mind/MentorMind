import { Fab, Grid, Modal, Stack } from "@mui/material";
import LectureInterface from "../interfaces/LectureInterface";
import LectureContainer from "../components/containers/LectureContainer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import PinnedContainer from "../components/containers/PinnedContainer";
import CreateLecturePopup from "../components/create-lecture-popup/CreateLecturePopup";
import { load } from "../util/localStorage";

const LecturePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const { subjectId } = useParams<{ subjectId: string }>();
  const [lectures, setLectures] = useState<LectureInterface[]>(
    (location.state?.lectures as LectureInterface[]) || []
  );

  const userRole: String = load("userRole");

  const handleAddLecture = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    console.log("trying to close");
    setOpenModal(false);
  };


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
                {userRole === "Teacher" &&
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
                  // Apply styles to the svg icon inside the button
                  width: "60px",
                  height: "60px",
                },
              }}
            >
              <AddIcon />
            </Fab>
          }
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
