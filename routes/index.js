const reddragon = require('reddragon');

module.exports = (express) => {
const router = express.Router();

  //This is my route to get hello dude
  router.get('/', (req, res) => {
    res.json({ hello: 'Hoity Toity' });
    reddragon.debug('index hit', 'sucess');
  });

  //This is my route to check api status
  router.get('/status', (req, res) => {
    res.json({ healty: true });
    reddragon.debug('status hit', 'sucess')

  });

  // linking routes
  router.use('/api/v1', require('./api/url')(express));
  router.use('/api/v1', require('./api/user')(express));
  router.use('/api/', require('./api/redirect')(express));

  // returns correct data
  return router;
};
