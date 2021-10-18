import Express from 'express'; 
import userGet from "./users.js"

var router = Express.Router();

router.get('/users', userGet);

export default router;
