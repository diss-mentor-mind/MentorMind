import { Stack, Typography, Box } from "@mui/material";
import PinnedContainer from "./PinnedContainer";
import ComputerIcon from "../../icons/computerIcon.svg";
import NotebookIcon from "../../icons/notebookIcon.svg";
import SubjectInterface from "../../interfaces/SubjectInterface";
import { FC, useState } from "react";
import ProgressBar from "../bar/ProgressBar";

const SubjectContainer: FC<SubjectInterface> = (subject: SubjectInterface) => {
  // TODO: figure out how to get this progress value
  const [progress, setProgress] = useState(75);

  return (
    <PinnedContainer width="100%" height="100%">
      <Stack
        direction="column"
        sx={{
          height: "100%",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "var(--icon-primary-color)",
            fontSize: `${subject.name.length > 20 ? "large" : "x-large"}`, // Adjust the threshold as needed
            textAlign: "center",
            marginTop: "12px",
            marginBottom: "9px",
            height: "13%",
            maxHeight: "13%",
          }}
        >
          {subject.name}
        </Typography>
        <Box
          sx={{
            height: "55%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {
            // TODO: figure how to get the icon
            (subject?.id ?? 0) % 3 !== 1 ? (
              <img
                src={ComputerIcon}
                alt={subject.icon.toString()}
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            ) : (
              <img
                src={NotebookIcon}
                alt={subject.icon.toString()}
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            )
          }
        </Box>
        {progress > 0 && (
          <ProgressBar width="80%" height="7%" progress={progress} />
        )}
      </Stack>
    </PinnedContainer>
  );
};

export default SubjectContainer;
