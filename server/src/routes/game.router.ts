import { Router } from 'express';
import { GameController } from '../controllers';
const GameRouter = Router();


GameRouter.get("/:id/ads", GameController.findManyBy );
GameRouter.post("/:id/ads", GameController.create );
GameRouter.get("/", GameController.findMany );



export default GameRouter;