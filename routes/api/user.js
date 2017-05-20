const user = require('../../models/data/user');
const url = require('../../models/url')
const utility = require('../../tool/utility');

module.exports = (express) => {
  const router = express.Router();

  //This creates the user in my db
  router.post('/users', (req, res) => {

    user.create(req.body, (err) => {
      res.status(500).json(err);
    reddragon.debug('User created failed', 'fail');
    }, (data) => {
      res.status(200).json(data);
      reddragon.debug('User created succes', 'succes');
    });
  });

  //This gets all of the users
  router.get('/users', (req, res) => {
    user.findAll((err) => {
      res.status(500).json(err);
      reddragon.debug('Get all users fail', 'fail');
    }, (data) => {
      res.status(200).json(data);
      reddragon.debug('Get all users succes', 'succes');
    });
  });

  //This gets user by id
  router.get('/users/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    user.find(req.body, (err) => {
      res.status(500).json(err);
      reddragon.debug('Get users by id fail', 'fail');
    }, (data) => {
      res.status(200).json(data);
      reddragon.debug('Get users by id sucess', 'sucess');
    });
  });

  //This updates the user in the db
  router.post('/users/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    user.update(req.body, (err) => {
      res.status(500).json(err);
      reddragon.debug('Update users fail', 'fail');
    }, (data) => {
      res.status(200).json(data);
      reddragon.debug('Update users succes', 'succes');
    });
  });

  //This deletes the user from the db
  router.delete('/users/:id', (req, res) => {
    const rb = req.body;
    rb.id = req.params.id;
    user.destroy(req.body, (err) => {
      res.status(500).json(err);
      reddragon.debug('Delete users fail', 'fail');
    }, (data) => {
      res.status(200).json(data);
      reddragon.debug('Delete users succes', 'succes');
    });
  });

  // returns correct data
  return router;
};
