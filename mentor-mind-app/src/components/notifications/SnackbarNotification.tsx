import React from "react";
import { Snackbar, Alert } from "@mui/material";

interface SnackbarNotificationProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

const SnackbarNotification: React.FC<SnackbarNotificationProps> = ({
  open,
  message,
  onClose,
}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
    >
      <Alert onClose={onClose} severity="success" sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarNotification;
