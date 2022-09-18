import { Router } from 'express';
import { AdController } from '../controllers/';

const AdRouter = Router();


AdRouter.get("/:id/discord", AdController.findOneBy );


export default AdRouter;