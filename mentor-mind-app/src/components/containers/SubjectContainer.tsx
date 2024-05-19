import { Stack, Typography, Box } from "@mui/material";
import PinnedContainer from "./PinnedContainer";
import ComputerIcon from "../../icons/computerIcon.svg";
import NotebookIcon from "../../icons/notebookIcon.svg";
import SubjectInterface from "../../interfaces/SubjectInterface";
import { FC, useEffect, useState } from "react";
import ProgressBar from "../bar/ProgressBar";
import { load } from "../../util/localStorage";
import axios from "axios";

const SubjectContainer: FC<SubjectInterface> = (subject: SubjectInterface) => {
  const [progress, setProgress] = useState(0);
  const userRole: String = load("userRole");
  const userId: String = load("userId");

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        // Make the API call
        const response = await axios.get<number>(
          `http://localhost:8080/api/subject/${userId}/progress/${subject.id}`,
          {
            headers: {
              accept: "text/plain",
            },
          }
        );
        const fetchedProgress: number = response.data;
        setProgress(fetchedProgress);
      } catch (error) {
        console.error("Error fetching progress:", error);
      }
    };

    fetchProgress();
  }, [userId, subject.id]);

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
        {progress > 0 && userRole === "Student" && (
          <ProgressBar width="80%" height="7%" progress={progress} />
        )}
      </Stack>
    </PinnedContainer>
  );
};

export default SubjectContainer;
