import { useEffect, useState } from "react";
import "./App.css";
import Jobs from "./components/jobs";
import axios from "axios";

const JOB_API_URL = "http://localhost:3001";
// const jobs = [
//   { title: "Software Engineer", company: "google" },
//   { title: "SQA", company: "google" },
//   { title: "Software Engineer", company: "facebook" },
// ];
const fetchJobs = async (setJobs) => {
  const { data } = await axios({ method: "GET", url: JOB_API_URL });
  setJobs(data);
  console.log(data);
};
function App() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetchJobs(setJobs);
  }, []);
  return (
    <>
      <Jobs jobs={jobs} />
    </>
  );
}

export default App;
