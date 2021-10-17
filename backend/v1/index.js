import Express from 'express'; 

var router = Express.Router();

import {userPost, userGet} from "./users.js"

router.post('/users', userPost); 
router.get('/users', userGet); 

export default router; 
