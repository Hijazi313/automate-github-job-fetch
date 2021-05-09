import React from "react";
import "./style.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Button,
} from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function JobModal({ job, open, handleClose }) {
  if (!job.title) return <div />;
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title" className="flex">
          <p>
            {job.title}
            <br />
            {job.company}
          </p>
          <img src={job.company_logo} className="companyLogo" />
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <div dangerouslySetInnerHTML={{ __html: job.description }} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <a href={job.url} target="_blank">
            <Button color="primary">Apply</Button>
          </a>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default JobModal;
