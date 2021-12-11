import { Request, Response, Router } from 'express';
import { CustomRequest } from '../common/custom-request';
import { walletController } from '../controllers';
import { validateUserToken } from '../middlewares/validate-usertoken.middleware';
import { validateWalletBodyMiddleware } from '../middlewares/validate-wallet-body.middleware';

export const walletRouter = Router();

walletRouter.post(
	'/wallet', 
	[validateWalletBodyMiddleware], 
	(req: Request, res: Response) => walletController.saveUserWallet(req, res)
);

walletRouter.get(
	'/transactions', 
	[validateUserToken], 
	(req: CustomRequest, res: Response) => walletController.getTransactions(req, res)
);

walletRouter.get(
	'/balance', 
	validateUserToken, 
	(req: CustomRequest, res: Response) => walletController.getBalances(req, res)
);
