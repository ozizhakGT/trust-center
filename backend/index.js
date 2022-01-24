const serverConfig = require('./config').get('server');
const express = require('express');
const cors = require('cors');
const app = express();
const dbConnection = require('./db');
const routes = require('./routes');

app.use(cors());
routes(app);

app.listen(serverConfig.port, async () => {
   await dbConnection();
   console.log(`server up and live`);
   console.log(`listening and running on port ${serverConfig.port}`);
});