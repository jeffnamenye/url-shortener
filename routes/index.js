const utility = require('../tool/utility');
module.exports = (express) => {
  const router = express.Router();

  //This is my route to get hello dude
  router.get('/', (req, res) => {
    res.json({ hello: 'Hoity Toity' });
    utility.debug('index hit', 'sucess');
  });

  //This is my route to check api status
  router.get('/users', (req, res) => {
    res.json({ healty: true });
    utility.debug('status hit', 'sucess')

  });

  // linking routes
  router.use('/api/', require('./api/url')(express));
  router.use('/api/', require('./api/user')(express));
  router.use('/api/', require('./api/redirect')(express));

  // returns correct data
  return router;
};
