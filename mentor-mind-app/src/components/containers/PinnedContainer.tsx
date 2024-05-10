import { Box, Container, Paper } from "@mui/material";
import React, { FC, PropsWithChildren } from "react";

interface PinnedContainerProps extends PropsWithChildren {
    height?: string;
    width?: string;
}

const PinnedContainer: FC<PinnedContainerProps> = ({
    height = "300px",
    width = "20%",
    children
}) => {
    return (
        <Box sx={{
            color: "white",
            backgroundColor: "var(--primary-color)",
            minHeight: height,
            height: height,
            width: width,
            margin: "1% 1%",
            position: "relative",
            boxShadow: "5px 5px 10px rgb(0 0 0 / 0.2)"
        }}>
            <Box sx={{
                backgroundColor: "var(--button-color)",
                width: 0.1,
                paddingBottom: "10%",
                position: "absolute",
                top: 0,
                left: 0,
                transform: "translate(-50%, -50%)"
            }}></Box>
            <Box sx={{
                backgroundColor: "var(--button-color)",
                width: 0.1,
                paddingBottom: "10%",
                position: "absolute",
                top: 0,
                right: 0,
                transform: "translate(50%, -50%)"
            }}></Box>
            <Box sx={{
                paddingLeft: "5%",
                paddingRight: "5%",
                height: 1,
            }}>
                {children}
            </Box>
        </Box>
    );
}

export default PinnedContainer;
