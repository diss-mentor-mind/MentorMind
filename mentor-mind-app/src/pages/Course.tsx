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

const Course = () => {
  const [title, setTitle] = useState("Search by title...");
  const [publiser, setPublisher] = useState("Search by publisher...");
  const [statusC, setStatusC] = useState("Active");
  return (
    <Grid container>
      <Grid
        container
        direction="column"
        sx={{
          backgroundColor: "var(--primary-color);",
          marginTop: "2%",
          marginLeft: "1.5%",
          width: "15%",
          height: "550px",
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
            paddingLeft: "10%",
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

            marginLeft: "5%",
            width: "90%",
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
            marginLeft: "5%",
            width: "90%",

            boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.5)",
          }}
        ></TextField>

        <FormControl
          sx={{
            boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.5)",
            marginTop: "10%",
            width: "90%",
            marginLeft: "5%",
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
            width: "90%",
            marginLeft: "5%",
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
            marginTop: "auto", // Pushes the button to the bottom of the grid
            marginBottom: "2%", // Adds space between the button and other elements
          }}
        >
          <Button
            sx={{
              backgroundColor: "var(--button-color)",
              color: "white",
              width: "90%",
              marginBottom: "10%",
            }}
          >
            Manage Course
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
export default Course;
