import { Ethereum, Network, TatumSDK } from "@tatumio/tatum";

export const tatum = await TatumSDK.init<Ethereum>({
  network: Network.ETHEREUM,
  apiKey: {
    v4: import.meta.env.VITE_TATUM_API_KEY,
  },
});
