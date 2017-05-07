const user = require('../../models/data/user');
const gen = require('../../models/url');

module.exports = (express) => {
  const router = express.Router();

  //This creates the user in my db
  router.post('/users', (req, res) => {
    const rb = req.body;
    // hashes password before create
    rb.password = url.generateHash(rb.password);
    user.create(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  //This gets all of the users
  router.get('/users', (req, res) => {
    user.findAll((err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  //This gets user by id
  router.get('/users/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    user.find(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  //This updates the user in the db
  router.post('/users/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    // hashes new password
    rb.password = url.generateHash(rb.password);
    user.update(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  //This deletes the user from the db
  router.delete('/users/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    user.destroy(req.body, (err) => {
      res.status(500).json(err);
    }, (data) => {
      res.status(200).json(data);
    });
  });

  // returns correct data
  return router;
};
