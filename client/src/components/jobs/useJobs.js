import { useState } from "react";

const useJobs = function (jobs) {
  // Pagination
  const numJobs = jobs.length;
  const numPages = Math.ceil(jobs.length / 50);
  const [activeStep, setActiveStep] = useState(0);
  const jobsOnpage = jobs.slice(activeStep * 50, activeStep * 50 + 50);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Modal
  const [open, setOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState({});
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return {
    numJobs,
    numPages,
    activeStep,
    setActiveStep,
    jobsOnpage,
    handleNext,
    handleBack,
    open,
    setOpen,
    selectedJob,
    setSelectedJob,
    handleClickOpen,
    handleClose,
  };
};

export default useJobs;
