const express = require('express');

const app = express();
app.use(express.json());
const port = 7865;

app.get('/', (request, response) => {
  response.send('Welcome to the payment system');
});

app.get('/cart/:id([0-9]+)', (request, response) => {
    response.send(`Payment methods for cart ${request.params.id}`);
});

app.get('/available_payments', (request, response) => {
  response.set("Content-Type", "application/json");
  response.send({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
})

app.post('/login', (request, response) => {
  const userName = request.body.userName;
  if (userName) {
    response.send(`Welcome ${userName}`);
  } else {
      response.status(404).send();
    }
  });

app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

module.exports = app;