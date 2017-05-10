const user = require('../../models/data/user');
const url = require('../../models/url')
const utility = require('../../tool/utility');

module.exports = (express) => {
  const router = express.Router();

  //This creates the user in my db
  router.post('/users', (req, res) => {
    user.create(req.body, (err) => {
      res.status(500).json(err);
      utility.debug('User created failed', 'fail');
    }, (data) => {
      res.status(200).json(data);
      utility.debug('User created sucess', 'sucess');
    });
  });

  //This gets all of the users
  router.get('/users', (req, res) => {
    user.findAll((err) => {
      res.status(500).json(err);
      utility.debug('Get all users fail', 'fail');
    }, (data) => {
      res.status(200).json(data);
      utility.debug('Get all users sucess', 'sucess');
    });
  });

  //This gets user by id
  router.get('/users/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    user.find(req.body, (err) => {
      res.status(500).json(err);
      utility.debug('Get users by id fail', 'fail');
    }, (data) => {
      res.status(200).json(data);
      utility.debug('Get users by id sucess', 'sucess');
    });
  });

  //This updates the user in the db
  router.post('/users/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    user.update(req.body, (err) => {
      res.status(500).json(err);
      utility.debug('Update users fail', 'fail');
    }, (data) => {
      res.status(200).json(data);
      utility.debug('Update users sucess', 'sucess');
    });
  });

  //This deletes the user from the db
  router.delete('/users/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    user.destroy(req.body, (err) => {
      res.status(500).json(err);
      utility.debug('Delete users fail', 'fail');
    }, (data) => {
      res.status(200).json(data);
      utility.debug('Delete users sucess', 'sucess');
    });
  });

  // returns correct data
  return router;
};
