import { Fab, Grid, Modal, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SubjectContainer from "../components/containers/SubjectContainer";
import SubjectInterface from "../interfaces/SubjectInterface";
import { useEffect, useState } from "react";
import { load } from "../util/localStorage";
import PinnedContainer from "../components/containers/PinnedContainer";
import CreateCoursePopupComponent from "../components/course-popups/CreateCoursePopup";
import JoinCoursePopupComponent from "../components/course-popups/JoinCoursePopup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { trackButtonClick, trackPageView } from "../util/trackerUtil";

const CoursePage = () => {
  const [courses, setCourses] = useState<SubjectInterface[]>([]);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const userRole: String = load("userRole");
  const userId: String = load("userId");

  const handleAddCourse = () => {
    trackButtonClick("AddCourse");
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    trackButtonClick("CloseCourseModel");
    console.log("trying to close");
    setOpenModal(false);
  };

  const handleCourseClick = (course: SubjectInterface) => {
    trackButtonClick("CourseClick");
    const lectures = course.lectures;
    navigate(`/lectures/${course.id}`);
  };

  useEffect(() => {
    trackPageView("CoursePage");
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Make the API call
        const response = await axios.get<SubjectInterface[]>(
          `http://localhost:8080/api/subject/foraccount/${userId}`,
          {
            headers: {
              accept: "application/json",
            },
          }
        );
        const fetchedCourses = response.data;
        setCourses(fetchedCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  }, [userId]);

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
          key={index}
          sx={{
            width: "20%",
            height: "280px",
            marginBottom: "2%",
            cursor: "pointer",
            ...(index % 3 !== 2 && { marginRight: "12%" }), // Apply right margin except for the last item in each row
          }}
          onClick={() => handleCourseClick(course)}
        >
          <SubjectContainer {...course} />
        </Grid>
      ))}

      <Fab
        aria-label="add"
        onClick={handleAddCourse}
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
      <Modal open={openModal} onClose={handleCloseModal}>
        <Stack
          direction={"row"}
          justifyContent={userRole === "Teacher" ? "space-between" : "center"}
          width={"70%"}
          minHeight={"calc( 100% - 150px );"}
          height={"80%"}
          alignItems={"flex-start"}
          margin={"40px auto"}
        >
          {userRole === "Teacher" && (
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
