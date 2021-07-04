require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const actionsApi = require('./api/userActions');
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(
  cors()
  // {
  //   origin: 'https://ibm-project-user-actions.herokuapp.com/',
  // }
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', actionsApi);

const rootBuild = path.join(__dirname, 'client', 'build');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(rootBuild));

  app.get('*', (req, res) => {
    res.sendFile(path.join(rootBuild, 'index.html'));
  });
}

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
