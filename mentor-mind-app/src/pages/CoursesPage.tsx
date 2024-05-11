import { Grid } from "@mui/material";
import SubjectContainer from "../components/containers/SubjectContainer";
import SubjectInterface, { populatedSubjects } from "../interfaces/SubjectInterface";

const CoursePage = () => {
    const courses: SubjectInterface[] = populatedSubjects;

    return (
        <Grid sx={{
            marginTop: "2%",
            marginLeft: "13%", // Center horizontally
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "flex-start",
        }}>
            {courses.map((course, index) => (
                <Grid
                    key={index}
                    sx={{
                        width: "20%",
                        height: "280px",
                        marginBottom: "2%",
                        ...(index % 3 !== 2 && { marginRight: "12%" }), // Apply right margin except for the last item in each row
                    }}>
                    <SubjectContainer {...course} />
                </Grid>
            ))}
        </Grid>
    );
};

export default CoursePage;
