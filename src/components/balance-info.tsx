type BalanceInfoProps = {
  balance: string;
};

const BalanceInfo = ({ balance }: BalanceInfoProps) => {
  return (
    <div className="flex sm:flex-row flex-col gap-2 justify-center items-center border-orange-700 border w-full rounded-md p-5 mt-5">
      <p className="text-base">Balance:</p>
      <p className="text-lg font-bold">{balance} </p>
      <p className="text-base "> ETH</p>
    </div>
  );
};

export default BalanceInfo;
