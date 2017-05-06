module.exports = (express) => {
  const router = express.Router();

  //This is my route to get hello dude
  router.get('/', (req, res) => {
    res.json({ hello: 'dude' });
  });

  //This is my route to check api status
  router.get('/status', (req, res) => {
    res.json({ healty: true });
  });

  // linking routes
  router.use('/api/v1.1.0/', require('./api/url')(express));
  router.use('/api/v1.1.0/', require('./api/user')(express));

  // returns correct data
  return router;
};
