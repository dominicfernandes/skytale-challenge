import { SkytaleService, WalletService } from '../services';
import { WalletController } from './wallet.controller';

// inject services into the controllers
export const walletController = new WalletController(new WalletService(), new SkytaleService());
