import { Router } from 'express';
import { walletRouter } from './wallet.routes';

export const routes = Router();

routes.use('', walletRouter);
