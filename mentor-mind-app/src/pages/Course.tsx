import {
  Box,
  Button,
  Fab,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import PinnedContainer from "../components/containers/PinnedContainer";
import MaterialInterface, {
  populatedMaterials,
} from "../interfaces/MaterialInterface";
import { FaTrash } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaFileAlt } from "react-icons/fa";
import { FaArchive } from "react-icons/fa";

import { useNavigate, useParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { FaBan } from "react-icons/fa";
import AddIcon from "@mui/icons-material/Add";
import { Filter } from "@mui/icons-material";

const Course = () => {
  const [title, setTitle] = useState("");
  const [publisher, setPublisher] = useState("");
  const [fileType, setFileType] = useState("");
  const [isAccepted, setIsAccepted] = useState("");
  const navigate = useNavigate();
  const { lectureId } = useParams();
  const [materials, setMaterials] = useState<MaterialInterface[]>([]);
  const [displayMaterials, setDisplayMaterials] = useState<MaterialInterface[]>(
    []
  );
  const handleAddDocument = () => {
    navigate("/upload-document");
  };

  useEffect(() => {
    const getMaterials = async () => {
      try {
        const materialsData = await fetchMaterialsForLecture(Number(lectureId));
        setMaterials(materialsData);
        setDisplayMaterials(materialsData);
      } catch (err) {
        console.log("error loading materials");
      } finally {
      }
    };

    getMaterials();
  }, [lectureId]);

  useEffect(() => {
    console.log(isAccepted);
    const filteredMaterials = materials.filter(
      (material) =>
        material.name.toLowerCase().includes(title.toLowerCase()) &&
        (material.author.firstName
          .toLowerCase()
          .includes(publisher.toLowerCase()) ||
          material.author.lastName
            .toLowerCase()
            .includes(publisher.toLowerCase())) &&
        (isAccepted === "" ||
          (isAccepted === "Active"
            ? material.isAccepted === true
            : isAccepted === "InReview"
            ? material.isAccepted === false
            : isAccepted === "All")) &&
        (fileType === "" ||
          (fileType === "File"
            ? material.type === "File"
            : fileType === "Video"
            ? material.type === "Video"
            : fileType === "All"))
    );
    if (
      title !== "" ||
      publisher !== "" ||
      fileType !== "All" ||
      isAccepted !== "All"
    )
      setDisplayMaterials(filteredMaterials);
    else setDisplayMaterials(materials);
  }, [title, publisher, fileType, isAccepted, materials]);

  async function fetchMaterialsForLecture(
    lectureId: number
  ): Promise<MaterialInterface[]> {
    const response = await fetch(
      `http://localhost:8080/api/material/${lectureId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `Error fetching materials for lecture ID ${lectureId}: ${response.statusText}`
      );
    }

    const data: MaterialInterface[] = await response.json();
    return data;
  }
  const deleteMaterial = async (materialId: number): Promise<void> => {
    const response = await fetch(
      `http://localhost:8080/api/material/delete/${materialId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to delete material with ID ${materialId}`);
    }
  };

  const handleDeleteMaterial = async (materialId: number) => {
    try {
      await deleteMaterial(materialId);
      setMaterials((prevMaterials) =>
        prevMaterials.filter((material) => material.id !== materialId)
      );
      await fetchMaterialsForLecture(Number(lectureId));
    } catch (error) {
      console.error("Error deleting material:", error);
    }
  };

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
            onChange={(e) => setTitle(e.target.value)}
            label="Search by title..."
            InputProps={{
              sx: {
                color: "white", // Set the color of the input text (including value) to white
              },
            }}
            InputLabelProps={{
              sx: {
                color: "white", // Set the color of the label to white
                "&.Mui-focused": {
                  color: "white", // Set the color of the label to white when focused
                },
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
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
            label="Search by publisher..."
            InputProps={{
              sx: {
                color: "white", // Set the color of the input text (including value) to white
              },
            }}
            InputLabelProps={{
              sx: {
                color: "white", // Set the color of the label to white
                "&.Mui-focused": {
                  color: "white", // Set the color of the label to white when focused
                },
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
              label="Type"
              value={fileType}
              sx={{
                color: "white", // Set the color of the selected value to white
                ".MuiSelect-icon": {
                  color: "white", // Set the color of the dropdown arrow to white
                },

                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
              }}
              onChange={(e: SelectChangeEvent<string>) =>
                setFileType(e.target.value)
              }
            >
              <MenuItem value={"All"}>All</MenuItem>

              <MenuItem value={"File"}>File</MenuItem>
              <MenuItem value={"Video"}>Video</MenuItem>
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
              Status
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              sx={{
                color: "white", // Set the color of the selected value to white
                ".MuiSelect-icon": {
                  color: "white", // Set the color of the dropdown arrow to white
                },

                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "white",
                },
              }}
              value={isAccepted}
              onChange={(e: SelectChangeEvent<string>) =>
                setIsAccepted(e.target.value)
              }
            >
              <MenuItem value={"All"}>All</MenuItem>

              <MenuItem value={"Active"}>Active</MenuItem>
              <MenuItem value={"InReview"}>In review</MenuItem>
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
        {displayMaterials.map((material) => (
          <Grid
            sx={{
              width: "20%",
              height: "25%",
              marginRight: "5%",
              marginBottom: "3%",
            }}
            onClick={() => {
                if (material.type.includes("pdf") || material.type == "text") {
                    (window.location.href = "/pdf-page/" + material.id)
                }
                else
                if (material.type == "video" || material.type == "audio") {
                    (window.location.href = "/video-page/" + material.id)
                }
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
                  Last updated:{" "}
                  {material.timestamp
                    ? new Date(material.timestamp).toLocaleDateString()
                    : "N/A"}
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
                    cursor: "pointer",
                  }}
                  onClick={() => handleDeleteMaterial(material.id!)}
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
                      <Grid
                        sx={{ cursor: "pointer" }}
                        onClick={() => {
                          alert(
                            "You approved this material. TO BE IMPLEMENTED"
                          );
                        }}
                      >
                        <FaCheckCircle />
                      </Grid>
                      <Grid
                        sx={{ marginLeft: "5%", cursor: "pointer" }}
                        onClick={() => {
                          alert(
                            "You rejected this material. TO BE IMPLEMENTED"
                          );
                        }}
                      >
                        <FaBan />
                      </Grid>
                    </Grid>
                  )}
                </Grid>
              </Grid>
            </PinnedContainer>
          </Grid>
        ))}
        <Fab
          aria-label="add"
          onClick={handleAddDocument}
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
    </Grid>
  );
};
export default Course;
