import { Fab, Grid, Modal, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SubjectContainer from "../components/containers/SubjectContainer";
import SubjectInterface, {
  populatedSubjects,
} from "../interfaces/SubjectInterface";
import { useState } from "react";
import { load } from "../util/localStorage";
import PinnedContainer from "../components/containers/PinnedContainer";
import CreateCoursePopupComponent from "../components/course-popups/CreateCoursePopup";
import JoinCoursePopupComponent from "../components/course-popups/JoinCoursePopup";
import { useNavigate } from "react-router-dom";

const CoursePage = () => {
  const courses: SubjectInterface[] = populatedSubjects;
  const userRole = load("userRole");
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleAddCourse = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    console.log("trying to close");
    setOpenModal(false);
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
      {courses.map((course, index) => (
        <Grid
          onClick={() => {
            navigate(`/material/${course.id}`);
          }}
          key={index}
          sx={{
            width: "20%",
            height: "280px",
            marginBottom: "2%",
            cursor: "pointer",
            ...(index % 3 !== 2 && { marginRight: "12%" }), // Apply right margin except for the last item in each row
          }}
        >
          <SubjectContainer {...course} />
        </Grid>
      ))}

      <Fab
        aria-label="add"
        onClick={handleAddCourse}
        sx={{
          position: "absolute",
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
      <Modal open={openModal} onClose={handleCloseModal}>
        <Stack
          direction={"row"}
          justifyContent={userRole == "Teacher" ? "space-between" : "center"}
          width={"70%"}
          minHeight={"calc( 100% - 150px );"}
          height={"80%"}
          alignItems={"flex-start"}
          margin={"40px auto"}
        >
          {userRole == "Teacher" && (
            <PinnedContainer width="40%" height="95%">
              <CreateCoursePopupComponent />
            </PinnedContainer>
          )}
          <PinnedContainer width="40%" height="95%">
            <JoinCoursePopupComponent />
          </PinnedContainer>
        </Stack>
      </Modal>
    </Grid>
  );
};

export default CoursePage;
