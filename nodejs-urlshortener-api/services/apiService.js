const ApiModel = require('../models/apiModel');
const shortid = require('shortid');
const isUrl = require('is-url');

exports.getApi = async (req, res, next) => {
  const url = await ApiModel.findOne({short_url: req.params.short_url});
  
  if(!url) {
    return next(
      res.json({ error: "No short URL found for the given input" })
    );
  }
  res.writeHead(302, {
    'Location': url.original_url
  });
  res.end();
};

exports.createApi = function(req, res) {
  const orgUrl = req.body.url;
  const shortUrl = shortid.generate()
  if(isUrl(orgUrl)) {
    const newDoc = ApiModel.create({original_url: orgUrl, short_url: shortUrl});
    res.json({ original_url: orgUrl, short_url: shortUrl });
  } else {
    res.json( { error: "Invalid url" } )
  }
  
};