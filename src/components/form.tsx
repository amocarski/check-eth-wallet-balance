import { useState } from "preact/hooks";
import { useWalletBalance } from "../hooks/use-wallet-balance";
import BalanceInfo from "./balance-info";
import Input from "./ui/input";
import Button from "./ui/button";
import Alert from "./alert";

const Form = () => {
  const [address, setAddress] = useState<string>("");
  const { balance, isLoading, error, getBalance, clearError } =
    useWalletBalance();

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress((e.target as HTMLInputElement).value);
    clearError();
  };

  const handleSubmit = () => {
    getBalance(address);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <div className="flex flex-col gap-4 sm:flex-row">
          <Input
            value={address}
            onChange={handleAddressChange}
            placeholder="Type ETH address..."
            disabled={isLoading}
            className="w-auto sm:w-[450px]"
          />
          <Button onClick={handleSubmit} disabled={isLoading}>
            {isLoading ? "Loading..." : "Get Balance"}
          </Button>
        </div>
      </div>

      {error && <Alert error={error} />}

      {balance && !error && <BalanceInfo balance={balance} />}
    </div>
  );
};

export default Form;
