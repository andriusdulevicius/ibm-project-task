require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const actionsApi = require('./api/userActions');

const PORT = process.env.SERVER_PORT || 5002;

app.use(
  cors()
  // {
  //   origin: 'https://ibm-project-user-actions.herokuapp.com/',
  // }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', actionsApi);

mongoose
  .connect(process.env.MONGO_CONN_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(PORT, console.log(`backEnd online on port ${PORT}`));
  })
  .catch((err) => console.error(err.message));
mongoose.set('useFindAndModify', false);
