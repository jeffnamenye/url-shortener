// link my url generator model
const est = require('../models/url');

// express as a parameter of express
module.exports = (express) => {

  const router = express.Router();

  // post method
  router.post('/url', (req, res) =>{
    //respond with links
    res.json(est.Url_Short(req.body.link));
  });
  //return the data
  return router;
};
