import { useState } from "preact/hooks";
import { tatum } from "../lib/tatum";

export const useWalletBalance = () => {
  const [balance, setBalance] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const getBalance = async (address: string) => {
    if (!address.trim()) {
      setError("Please enter a wallet address");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      const response = await tatum.address.getBalance({
        addresses: [address],
      });

      const ethBalance = response.data[0];

      if (ethBalance) {
        setBalance(ethBalance.balance);
      } else {
        setError("No ETH balance found");
      }
    } catch (err) {
      setError(
        "Failed to fetch balance. Please check the address and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = () => setError("");

  return {
    balance,
    isLoading,
    error,
    getBalance,
    clearError,
  };
};
