import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import './ProductModal.css'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 250,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

export default function ProductModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} style={{ color: "white" }}>
        Add new product
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: 700,
              fontSize: "20px",
              lineHeight: "30px",
              color: "#C5C7CA",
              marginLeft: "30px"
            }}
          >
            Create new product
          </Typography>
          <div className="modal-body" style={{display: 'flex'}}>
            <div className="modal-body-left"> aaa</div>
            <input className="modal-body-right" placeholder="Product Name"/> 
          </div>
          <button type="button" class="btn btn-secondary" data-dismiss="modal" style={{width: '90%', marginTop: '1rem'}}>Close</button>
        </Box>
      </Modal>
    </div>
  );
}
