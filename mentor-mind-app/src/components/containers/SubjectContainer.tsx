import { Stack, Typography, Box } from "@mui/material";
import PinnedContainer from "./PinnedContainer";
import ComputerIcon from '../../icons/computerIcon.svg';
import SubjectInterface from "../../interfaces/SubjectInterface";
import { FC, useState } from "react";
import ProgressBar from "../bar/ProgressBar";

const SubjectContainer: FC<SubjectInterface> = ({ name }) => {
    const [progress, setProgress] = useState(78); // Initial progress state

    return (
        <PinnedContainer width="16%" height="37%">
            <Stack
                direction="column"
                sx={{
                    height: "100%",
                    width: '100%',
                    marginBottom: '1%',
                    alignItems: 'center',
                    // border: '1px solid black' // Optional, just for visualizing the Box boundary
                }}>
                <Typography
                    sx={{
                        color: "var(--icon-primary-color)",
                        fontSize: "x-large",
                        textAlign: "center",
                        marginTop: "12px",
                        marginBottom: "9px",
                        height: '13%',
                        maxHeight: '13%',
                        // border: '1px solid black' // Optional, just for visualizing the Box boundary
                    }}
                >
                    {name}
                </Typography>
                <Box sx={{
                    height: '55%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden',
                    // border: '1px solid black' // Optional, just for visualizing the Box boundary
                }}>
                    <img src={ComputerIcon} alt="Computer Icon" style={{ maxHeight: '100%', maxWidth: '100%' }} />
                </Box>
                {progress > 0 && <ProgressBar
                    width="80%"
                    height="7%"
                    progress={progress} />}
            </Stack>
        </PinnedContainer>
    );
};

export default SubjectContainer;
