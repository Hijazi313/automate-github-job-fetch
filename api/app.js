const express = require("express");
const cors = require("cors");

const app = express();

const redis = require("redis");
const { promisify } = require("util");
const client = redis.createClient();
const getAsync = promisify(client.get).bind(client);
app.use(cors());

app.get("/", async (req, res, next) => {
  const jobs = await getAsync("github");
  console.log(JSON.parse(jobs).length);
  return res.send(jobs);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`app i srunning on port ${PORT}`));
