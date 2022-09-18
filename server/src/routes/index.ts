import { Router } from 'express';
import AdRouter from './ad.router';
import GameRouter from './game.router';

const Routes = Router();

Routes.use("/ads", AdRouter);
Routes.use("/games", GameRouter);


export default Routes;