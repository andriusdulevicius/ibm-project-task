const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Search = mongoose.model('Search', searchSchema);

module.exports = Search;
