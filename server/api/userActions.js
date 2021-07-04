const express = require('express');
const router = express.Router();

const Search = require('../models/search');
const Article = require('../models/article');

router.get('/', (req, res) => {
  const searchEntries = Search.find({});
  const articleEntries = Article.find({});
  Promise.all([searchEntries, articleEntries])
    .then(([searches, articles]) => res.send({ searches, articles }))
    .catch((err) => console.error(err));
});

router.post('/logSearch', (req, res) => {
  const query = {
    title: req.body.title,
  };

  Search.findOneAndUpdate(query, { $inc: { count: 1 } }, { upsert: true })
    .then((result) => {
      console.log('Search log added succesfully:', result);
      res.send(result);
    })
    .catch((err) => console.error(err));
});

router.post('/logArticle', (req, res) => {
  const query = {
    title: req.body.title,
    url: req.body.url,
  };

  Article.findOneAndUpdate(query, { $inc: { count: 1 } }, { upsert: true })
    .then((result) => {
      console.log('Search log added succesfully:', result);
      res.send(result);
    })
    .catch((err) => console.error(err));
});

module.exports = router;
