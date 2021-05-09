import "./style.css";
import { Typography, MobileStepper, Button } from "@material-ui/core";
import Job from "../Job";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import JobModal from "../JobModal";
import useJobs from "./useJobs";
function Jobs({ jobs = [] }) {
  const {
    numJobs,
    numPages,
    activeStep,
    jobsOnpage,
    handleNext,
    handleBack,
    open,
    selectedJob,
    setSelectedJob,
    handleClickOpen,
    handleClose,
  } = useJobs(jobs);
  return (
    <div className="jobs">
      <JobModal open={open} job={selectedJob} handleClose={handleClose} />
      <Typography variant="h2" align="center">
        Entry Level Software Jobs
      </Typography>
      <Typography variant="h4">Found {numJobs} Jobs</Typography>
      {jobsOnpage.map((job) => (
        <Job
          job={job}
          onClick={() => {
            handleClickOpen();
            setSelectedJob(job);
          }}
        />
      ))}
      <div>
        Page {activeStep + 1} of {numPages}{" "}
      </div>
      <MobileStepper
        variant="progress"
        steps={numPages}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === numPages - 1}
          >
            Next
            <KeyboardArrowRight />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            <KeyboardArrowLeft />
            Back
          </Button>
        }
      />
    </div>
  );
}

export default Jobs;
