const url = require('../../models/url');
const utility = require('../../tool/utility');

module.exports = (express) => {
  const router = express.Router();

  //  update
  router.post('/go/:shortURL', (req, res) => {
    const rb = req.body;
    rb.shortURL = req.params.shortURL;
    url.redirect(req.body, (err) => {
      res.status(500).json(err);
      reddragon.debug('Url redirect fail', 'fail');
    }, (data) => {
      res.status(200).redirect(data);
      reddragon.debug('Url redirect succes', 'succes')
    });
  });

  // returns correct data
  return router;
};
