const url = require('../../models/url');

module.exports = (express) => {
  const router = express.Router();

  //  update
  router.post('/go/:shortURL', (req, res) => {
    const rb = req.body;
    rb.shortURL = req.params.shortURL;
    url.redirect(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).redirect(data);
    });
  });

  // returns correct data
  return router;
};
