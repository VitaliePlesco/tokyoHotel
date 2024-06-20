"use client";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Basket from "./Basket";

export default function BookingDetailsModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        size="small"
        onClick={handleOpen}
        sx={{ p: 0, textDecoration: "underline" }}
      >
        See booking details
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{}}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            minHeight: {
              xs: "100%",
              md: "50%",
            },
            width: {
              xs: "100%",
              md: "50%",
            },
            bgcolor: "background.paper",

            boxShadow: 28,
            p: {
              xs: 2,
              md: 4,
            },
            zIndex: 1,
            borderRadius: {
              xs: "none",
              md: "0.3125rem",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <IconButton onClick={handleClose} sx={{ marginRight: "-8px" }}>
              <CloseOutlinedIcon sx={{ color: "text.primary" }} />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 4,
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h4"
              sx={{ fontWeight: "bold", textWrap: "nowrap" }}
            >
              Booking details
            </Typography>
          </Box>
          <Box>
            <Basket />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
