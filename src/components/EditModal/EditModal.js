import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import First from "./first";
import Second from "./Second";
import Third from "./Third";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 350,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};

export default function EditingModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  

  return (
    <div>
      <Button onClick={handleOpen} >
      <i className="fa fa-pencil" aria-hidden="true" style={{color: 'black', marginLeft: "50px"}}></i>
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
              marginLeft: "20px"
            }}
          >
            Edit Pricing option 1
          </Typography>
          <div  style={{display: 'flex', marginTop: '-25px'}}>
            <ul className="price-li">
                <Link to="/" style={{ textDecoration: 'none', color: "grey" }}><li >Subscription</li></Link>
                <Link to="/second" style={{ textDecoration: 'none',color: "grey" }}><li >Lumpsum</li></Link>
                <Link to="/third" style={{ textDecoration: 'none', color: "grey" }}><li >EMI</li></Link>
            </ul>
          </div>
          <Routes>
              <Route path='/' element={<First/>}></Route>
              <Route path='/second' element={<Second/>}></Route>
              <Route path='/third' element={<Third/>}></Route>
            </Routes>
          <div>
              
                  
              
          </div>
          <button type="button" class="btn btn-secondary" data-dismiss="modal" style={{width: '90%', marginTop: '1rem'}}>Save</button>
        </Box>
      </Modal>
    </div>
  );
}
