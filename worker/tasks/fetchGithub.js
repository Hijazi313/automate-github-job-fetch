const fetch = require("node-fetch");
const redis = require("redis");
const { promisify } = require("util");
const client = redis.createClient();
const setAsync = promisify(client.set).bind(client);

const baseUrl = "https://jobs.github.com/positions.json";

async function fetchFromGithub() {
  let resultCount = 1,
    onPage = 0;
  const allJobs = [];
  while (resultCount > 0) {
    const res = await fetch(`${baseUrl}?page=${onPage}`);
    const jobs = await res.json();
    allJobs.push(...jobs);
    resultCount = jobs.length;
    console.log(`got , ${jobs.length}, jobs`);
    onPage++;
  }

  // const jrJobs = allJobs.includes
  const jrJobs = allJobs.filter((job) => {
    const jobTitle = job.title.toLowerCase();
    if (
      jobTitle.includes("senior") ||
      jobTitle.includes("sr") ||
      jobTitle.includes("manager") ||
      jobTitle.includes("sr") ||
      jobTitle.includes("lead") ||
      jobTitle.includes("team") ||
      jobTitle.includes("architect")
    ) {
      return false;
    }
    return true;
  });

  // Set in Redis
  const success = await setAsync("github", JSON.stringify(jrJobs));
}

// fetchFromGithub();
module.exports = fetchFromGithub;
