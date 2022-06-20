//libraries
const router = require('express').Router();
//const checkJWT = require('../middleware/check-auth');
const UserController = require('../controllers/User_Controller');



//route for get user cv information
router.get('/infoCv', UserController.UserCvInfo);//route for cv info

//rourte  for check api Key connection
//router.post('/register', [checkJWT.verificarAuth,checkJWT.verificaRol], UserController.registerUser);


module.exports = router;