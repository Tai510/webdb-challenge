const express = require('express');
const helmet = require('helmet');
const projectRoute = require("./resources/routes/project")
const server = express();


server.use(helmet());
server.use(express.json());
server.use("/api/project", projectRoute)

const port = process.env.PORT || 5000;
server.listen(port, () =>
 console.log(`\n** API running on http://localhost:${port} **\n`)
);