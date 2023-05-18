const express = require('express');
const app = express()

const port = 7865;

app.get('/', (request, response) => {
  response.status(200).send('Welcome to the payment system');
})
app.listen(7865, function() {
  console.log('API available on localhost port 7865');
})
module.exports = app;