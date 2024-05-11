import { Box, Typography, LinearProgress } from "@mui/material";
import { FC } from "react";

interface ProgressBarProps {
    progress: number;
    width: string;
    height: string;
}

const ProgressBar: FC<ProgressBarProps> = ({ progress, width, height }) => {
    const getProgressPosition = (progress: number) => {
        if (progress <= 20) {
            return 5;
        }
        return 0.46 * progress - 5;
    };

    const getProgressColor = (progress: number) => {
        if (progress <= 20) {
            return "var(--text-doc-color)";
        }
        return "var(--icon-primary-color)";
    };

    return (
        <Box sx={{
            width,
            height,
            // border: '1px solid black', // Optional, just for visualizing the Box boundary
            marginTop: '5px',
            marginBottom: '15%',
            position: "relative"
        }}>
            <Typography
                variant="body2"
                sx={{
                    position: 'absolute',
                    left: `${getProgressPosition(progress)}%`,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: `${getProgressColor(progress)}`,
                    zIndex: 1,
                }}
            >
                {progress}%
            </Typography>
            <LinearProgress
                variant="determinate"
                value={progress}
                sx={{
                    height: '100%',
                    backgroundColor: 'var(--icon-primary-color)',
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: 'var(--button-color)',
                    }
                }} />
        </Box>
    );
};

export default ProgressBar;
