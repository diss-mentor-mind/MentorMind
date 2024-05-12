import LectureInterface from "../../interfaces/LectureInterface";
import { Stack, Typography, Box } from "@mui/material";
import PinnedContainer from "./PinnedContainer";
import ComputerIcon from "../../icons/computerIcon.svg";
import NotebookIcon from "../../icons/notebookIcon.svg";
import { FC } from "react";

// TODO: later implement a link between the course page and the lectures page for a clicked course
const LectureContainer: FC<LectureInterface> = (lecture: LectureInterface) => {
  const handleClick = () => {
    console.log(`Lecture ${lecture.id} clicked!`);
  };

  return (
    <PinnedContainer width="100%" height="100%">
      <Stack
        direction="column"
        onClick={handleClick}
        sx={{
          height: "100%",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "var(--icon-primary-color)",
            fontSize: `${lecture.name.length > 20 ? "large" : "x-large"}`, // Adjust the threshold as needed
            textAlign: "center",
            marginTop: "12px",
            marginBottom: "9px",
            height: "13%",
            maxHeight: "13%",
          }}
        >
          {lecture.name}
        </Typography>
        <Box
          sx={{
            height: "70%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {
            // TODO: figure how to get the icon
            (lecture?.id ?? 0) % 3 !== 1 ? (
              <img
                src={ComputerIcon}
                alt={lecture.icon.toString()}
                style={{ maxHeight: "90%", maxWidth: "90%" }}
              />
            ) : (
              <img
                src={NotebookIcon}
                alt={lecture.icon.toString()}
                style={{ maxHeight: "90%", maxWidth: "90%" }}
              />
            )
          }
        </Box>
      </Stack>
    </PinnedContainer>
  );
};

export default LectureContainer;
