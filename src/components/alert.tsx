type AlertProps = {
  error: string;
};

const Alert = ({ error }: AlertProps) => {
  return (
    <div className="flex sm:flex-row flex-col gap-2 justify-center items-center border-red-700 bg-red-600/20 border w-full rounded-md p-5 mt-5">
      <p className="text-lg text-red-500">{error} </p>
    </div>
  );
};

export default Alert;
