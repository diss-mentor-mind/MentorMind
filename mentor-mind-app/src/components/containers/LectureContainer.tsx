import LectureInterface from "../../interfaces/LectureInterface";
import { Stack, Typography, Box } from "@mui/material";
import PinnedContainer from "./PinnedContainer";
import ComputerIcon from "../../icons/computerIcon.svg";
import NotebookIcon from "../../icons/notebookIcon.svg";
import { FC, useState, useEffect } from "react";
import { load } from "../../util/localStorage";
import axios from "axios";
import ProgressBar from "../bar/ProgressBar";

// TODO: later implement a link between the course page and the lectures page for a clicked course
const LectureContainer: FC<LectureInterface> = (lecture: LectureInterface) => {
  const [progress, setProgress] = useState(0);
  const userRole: String = load("userRole");
  const userId: String = load("userId");

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        // Make the API call
        const response = await axios.get<number>(
          `http://localhost:8080/api/lecture/${userId}/progress/${lecture.id}`,
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
  }, [userId, lecture.id]);

  const getFontSize = (text: String) => {
    if (text.length >= 40) {
      return "medium";
    }
    if (text.length >= 20) {
      return "large";
    }
    return "x-large";
  };

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
            fontSize: `${getFontSize(lecture.name)}`, // Adjust the threshold as needed
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
            height: "55%",
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
                style={{ maxHeight: "100%", maxWidth: "100%" }}
              />
            ) : (
              <img
                src={NotebookIcon}
                alt={lecture.icon.toString()}
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

export default LectureContainer;
