//This links to my generation model
const gen = require('../../models/data/urlShort');
const url = require('../../models/url');

//This accepts express as a parameter of express
module.exports = (express) => {
  //This is an express router function
  const router = express.Router();

  //This creates the Urls in my db
  router.post('/urls', (req, res) => {
    const rb = req.body;
    //this generates short url
    rb.shortURL = url.shortURL(url);
    url.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // This gets the urls from my db
  router.get('/urls', (req, res) => {
    url.findAll((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  //This gets the urls by id
  router.get('/urls/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    url.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  //This updates the urls in db
  router.post('/urls/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    url.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  //This deletes from my db
  router.delete('/urls/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    url.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // returns correct data
  return router;
};
