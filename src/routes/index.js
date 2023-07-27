import Express from "express";
import v1route from './v1/index.js'
const router = Express.Router();


router.use('/v1', v1route);

export default router;