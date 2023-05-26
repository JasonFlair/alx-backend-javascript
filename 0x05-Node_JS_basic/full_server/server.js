const express = require('express');
const allRoutes = require('./routes/index');

const app = express();
const port = 1245;

// sets all the routes created in routes/index
app.use('/', allRoutes);

app.listen(port);
module.exports = app;
