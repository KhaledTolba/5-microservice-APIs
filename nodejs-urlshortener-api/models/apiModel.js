const mongoose = require('mongoose');

const apiSchema = new mongoose.Schema(
  {
    original_url: {
      type: String,
      required: true
    },
    short_url: {
      type: String,
      required: true
    }
  },
  { timestamps: true}
);

module.exports = mongoose.model('api', apiSchema)
