import express from 'express'; 
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.patch('/', function(req, res, next) {
  res.send('respond with a resource');
});

export default router;
