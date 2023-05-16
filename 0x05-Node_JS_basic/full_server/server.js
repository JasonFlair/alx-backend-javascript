const express = require('express');
const allRoutes = require('./routes/index');

const app = express();
const port = 1245;

app.use('/', allRoutes);
app.use('/students', allRoutes);
app.use('/students/:major', allRoutes);

app.listen(port);

export default app;
