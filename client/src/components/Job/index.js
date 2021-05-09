import "./style.css";
import { Paper, Typography } from "@material-ui/core";
function Job({ job, onClick }) {
  return (
    <Paper className="job" key={job.id} onClick={onClick}>
      <div>
        <Typography variant="h5">{job.title}</Typography>
        <Typography variant="h6">{job.company}</Typography>
        <Typography>{job.location}</Typography>
      </div>
      <div>
        <Typography>
          {job.created_at.split(" ").slice(0, 3).join(" ")}
        </Typography>
      </div>
    </Paper>
  );
}

export default Job;
