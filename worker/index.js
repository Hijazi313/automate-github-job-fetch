const cronJob = require("cron").CronJob;
const fetchGithub = require("./tasks/fetchGithub");
new cronJob(`* * * * *`, fetchGithub, null, true, "America/Los_Angeles");
