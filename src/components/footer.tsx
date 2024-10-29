import TatumLogo from "/tatum.jpeg";

const Footer = () => {
  return (
    <div className="not-prose mx-auto flex items-center gap-2 text-xs text-orange-800 mt-5 ">
      <span>
        Powered by{" "}
        <a
          href="https://tatum.io/"
          className="underline underline-offset-2"
          target="_blank"
        >
          Tatum
        </a>
      </span>

      <img src={TatumLogo} alt="Tatum logo" height="24" width="24" />
    </div>
  );
};

export default Footer;
