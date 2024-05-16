import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import PinnedContainer from "../components/containers/PinnedContainer";
import { populatedMaterials } from "../interfaces/MaterialInterface";
import { FaTrash } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaArchive } from "react-icons/fa";

import {useNavigate} from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { FaBan } from "react-icons/fa";

const Course = () => {
  const [title, setTitle] = useState("Search by title...");
  const [publiser, setPublisher] = useState("Search by publisher...");
  const [statusC, setStatusC] = useState("Active");
  const navigate = useNavigate();

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        paddingTop: "1%",
        height: "85%",
      }}
    >
      <PinnedContainer width="15%" height="98%">
        <Grid
          container
          direction="column"
          sx={{
            marginTop: "2%",
            marginLeft: "1.5%",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: "x-large",
              textAlign: "center",
              paddingTop: "5%",
            }}
          >
            Course name
          </Typography>

          <Typography
            sx={{
              color: "white",
              fontSize: "large",
              textAlign: "left",
              paddingLeft: "5%",
              paddingTop: "10%",
            }}
          >
            Filters
          </Typography>

          <TextField
            value={title}
            InputProps={{
              sx: {
                color: "white", // Set the color of the input text (including value) to white
              },
            }}
            sx={{
              marginTop: "10%",
              color: "white",
              placeholder: "Search by title",
              width: "100%",
              boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.5)",
            }}
          ></TextField>
          <TextField
            value={publiser}
            InputProps={{
              sx: {
                color: "white", // Set the color of the input text (including value) to white
              },
            }}
            sx={{
              color: "white",
              marginTop: "10%",
              width: "100%",

              boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.5)",
            }}
          ></TextField>

          <FormControl
            sx={{
              boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.5)",
              marginTop: "10%",
              width: "100%",
            }}
          >
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                color: "white",
                "&.Mui-focused": {
                  // Apply styles when the input label is focused
                  color: "white",
                },
              }}
            >
              File Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={10}>File</MenuItem>
              <MenuItem value={20}>Video</MenuItem>
              <MenuItem value={30}>Archive</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            sx={{
              boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.5)",
              marginTop: "10%",
              width: "100%",
            }}
          >
            <InputLabel
              sx={{
                color: "white",
                "&.Mui-focused": {
                  // Apply styles when the input label is focused
                  color: "white",
                },
              }}
              id="demo-simple-select-label"
            >
              Active
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{
                "& .MuiSelect-select.MuiSelect-selectMenu": {
                  color: "white", // Set the color of the selected value to white
                },
              }}
            >
              <MenuItem value={10}>Active</MenuItem>
              <MenuItem value={20}>In review</MenuItem>
            </Select>
          </FormControl>

          {/* Adjusted button position within the grid */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "auto",
              marginBottom: "10%",
            }}
          >
            <Button
                onClick={() => navigate("/manage-course")}
              sx={{
                backgroundColor: "var(--button-color)",
                color: "white",
                width: "100%",
                height: "90%",
                marginBottom: "10%",
              }}
            >
              Manage Course
            </Button>
          </Box>
        </Grid>
      </PinnedContainer>
      <Grid
        sx={{
          width: "75%",
          height: "550px",
          marginLeft: "5%",
          marginTop: "2%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignContent: "flex-start",
        }}
      >
        {populatedMaterials.map((material) => (
          <Grid
            sx={{
              width: "20%",
              height: "25%",
              marginRight: "5%",
              marginBottom: "3%",
            }}
          >
            <PinnedContainer key={material.id} width="100%" height="100%">
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  marginTop: "5%",
                }}
              >
                <Grid
                  sx={{
                    width: "30%",
                    height: "10%",
                    marginLeft: "3%",
                    fontSize: "150%",
                    marginTop: "5%",
                    color: "#616161",
                  }}
                >
                  {material.type === "Video" && <FaVideo />}
                  {material.type === "File" && <FaFileAlt />}
                  {material.type === "Archive" && <FaArchive />}
                </Grid>
                <Typography sx={{ marginLeft: "3%", marginTop: "5%" }}>
                  {material.name}
                </Typography>
              </Grid>
              <Grid sx={{ marginTop: "4%" }}>
                <Typography>
                  Author: {material.author.firstName} {material.author.lastName}
                </Typography>
                <Typography>
                  Last updated: {material.timeStamp.toLocaleDateString()}
                </Typography>
              </Grid>
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  height: "20%",
                  width: "95%",
                  marginTop: "5%",
                }}
              >
                <Grid
                  sx={{
                    height: "120%",
                    width: "45%",
                    marginLeft: "3%",
                    color: "#616161",
                  }}
                >
                  <FaTrash />
                </Grid>
                <Grid
                  sx={{
                    height: "100%",
                    width: "45%",
                    marginLeft: "10%",
                  }}
                >
                  {material.isAccepted && (
                    <Grid
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Grid>
                        <FaCheckCircle />
                      </Grid>
                      <Grid sx={{ marginLeft: "5%" }}>
                        <FaBan />
                      </Grid>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </PinnedContainer>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
export default Course;
