import { model, Schema, Model } from 'mongoose';

export interface IWallet {
	chain: string;
	address: string;
	userToken: string;
}

const WalletSchema = new Schema({
	chain: { type: String, required: true },
	address: { type: String, required: true },
	userToken: { type: String, required: true },
});

export const Wallet: Model<IWallet> = model('Wallet', WalletSchema);
