import Express from 'express'; 

var router = Express.Router();

import userGet from "./users.js"

router.get('/users', userGet); 

export default router; 
