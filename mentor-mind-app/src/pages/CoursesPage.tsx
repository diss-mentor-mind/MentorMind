import { Box, Container, Grid, Stack, Typography, LinearProgress } from "@mui/material";
import PinnedContainer from "../components/containers/PinnedContainer";
import SubjectContainer from "../components/containers/SubjectContainer";
import ComputerIcon from '../icons/computerIcon.svg';
import SubjectInterface, { populatedSubjects } from "../interfaces/SubjectInterface";


// const CoursePage = () => {
//     // Dummy data representing the response from your API
//     const courses: Course[] = [
//         { id: 1, name: "Biology 101" },
//         { id: 2, name: "World History" },
//         { id: 3, name: "Introduction to Philosophy" },
//         { id: 4, name: "Algebra II" },
//         { id: 5, name: "Literature and Composition" },
//         { id: 6, name: "Environmental Science" },
//     ];

//     return (
//         <Grid
//             // display="flex"
//             // flexWrap="wrap"
//             // flexDirection="row"
//             // justifyContent="space-between"
//             // container={true} spacing={{ xs: 2, md: 4 }}
//             container={true} spacing={6}
//             sx={{
//                 width: "95%",
//                 height: "85%",
//                 marginLeft: "1%",
//                 marginTop: "1%",
//                 display: "flex",
//                 flexDirection: "row",
//                 flexWrap: "wrap",
//                 alignContent: "flex-start",
//                 border: '1px solid black' // Optional, just for visualizing the Box boundary
//             }}
//         // sx={{
//         //     width: "75%",
//         //     height: "550px",
//         //     marginLeft: "5%",
//         //     marginTop: "2%",

//         //   }}
//         >
//             {courses.map(course => (
//                 <Grid
//                     key={course.id}
//                     item
//                     xs={4}
//                     sx={{
//                         height: "300px",
//                         width: "30%"
//                     }}>
//                     <PinnedContainer
//                         height="100%"
//                         width="60%">
//                         <Stack
//                             direction="column"
//                             sx={{
//                                 height: "100%",
//                                 width: '100%',
//                                 marginBottom: '2%',
//                                 alignItems: 'center',
//                                 border: '1px solid black' // Optional, just for visualizing the Box boundary
//                             }}>
//                             <Typography
//                                 sx={{
//                                     color: "var(--icon-primary-color)",
//                                     fontSize: 'calc(0.7rem + 2vmin)', // Adjust the formula as needed
//                                     textAlign: "center",
//                                     marginTop: "18px",
//                                     marginBottom: "15px",
//                                     height: '15%',
//                                     maxHeight: '15%',
//                                     border: '1px solid black' // Optional, just for visualizing the Box boundary
//                                 }}
//                             >
//                                 {course.name}
//                             </Typography>
//                             <Box sx={{
//                                 width: '100%',
//                                 height: '100%',
//                                 display: 'flex',
//                                 justifyContent: 'center',
//                                 alignItems: 'center',
//                                 overflow: 'hidden',
//                                 border: '1px solid black' // Optional, just for visualizing the Box boundary
//                             }}>
//                                 <img src={ComputerIcon} alt="Computer Icon" style={{ maxHeight: '100%', maxWidth: '100%' }} />
//                             </Box>
//                             <Box sx={{ width: '75%', height: '30px', border: '1px solid black', marginBottom: '15%' }}>
//                                 {/* <LinearProgress variant="determinate" value={50} /> */}
//                             </Box>
//                         </Stack>
//                     </PinnedContainer>
//                 </Grid>
//             ))}
//         </Grid>
//     );
// };

const CoursePage = () => {
    const courses: SubjectInterface[] = populatedSubjects;

    return (
        <SubjectContainer {...courses[0]}/>
    );
};

export default CoursePage;
