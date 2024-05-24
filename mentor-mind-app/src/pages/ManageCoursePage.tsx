import {Grid} from "@mui/material";
import PinnedContainer from "../components/containers/PinnedContainer";
import CourseInformation from "../components/manage-course/CourseInformation";
import Members from "../components/manage-course/Members";
import { useEffect } from "react";
import { trackPageView } from "../util/trackerUtil";

const ManageCoursePage = () => {

    useEffect(() => {
        trackPageView("ManageCoursePage");
    }, []);

    return (
        <Grid container spacing={3} marginTop="2%">
            <Grid item xs={0.5}/>
            <Grid item xs={5}>
                <PinnedContainer width="100%" height="100%">
                    <Members/>
                </PinnedContainer>
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={5}>
                <PinnedContainer width="100%" height="100%">
                    <CourseInformation/>
                </PinnedContainer>
            </Grid>
            <Grid item xs={0.5}/>
        </Grid>
    );
};
export default ManageCoursePage;
