import { Fab, Grid } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SubjectContainer from "../components/containers/SubjectContainer";
import SubjectInterface, {
  populatedSubjects,
} from "../interfaces/SubjectInterface";

const CoursePage = () => {
  const courses: SubjectInterface[] = populatedSubjects;

  const handleAddCourse = () => {
    console.log("Add course clicked!");
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
          key={index}
          sx={{
            width: "20%",
            height: "280px",
            marginBottom: "2%",
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
    </Grid>
  );
};

export default CoursePage;
