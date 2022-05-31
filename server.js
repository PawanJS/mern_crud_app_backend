const express = require('express');
const mongoose = require('mongoose');
let cors = require('cors');
const bodyParser = require('body-parser');

//* Express Route
const dealerRoute = require('./routes/dealers/dealer.route');
const carRoute = require('./routes/car/car.route');

const app = express();

// Parsing middleware with bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Connecting to mongoDB
mongoose
  .connect(process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/dealers', {
    useNewUrlParser: true,
  })
  .then(() => console.log('Mongo DB successfully Connected!'))
  .catch((error) => console.log(`Error occurred ${error}`));

// Routes
app.use('/dealer', dealerRoute);
app.use('/car', carRoute);

const port = process.env.PORT || 4001;

app.listen(port, () => console.log(`Server is up and running at port ${port}`));
