// get our fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <section id="footer">
      <div className="section-container bg-slate-400">
        <div className="flex flex-col  items-center space-y-3 justify-center w-full pt-3 pb-3 md:flex-row md:space-y-0 md:pb-1">
          <div>
            <h3 className="text-slate-800 text-xl font-semibold border-slate-800 border-b-2 md:border-b-0 md:mr-4 ">
              <Link href="/">Hola Metaverso</Link>
            </h3>
          </div>

          <div className="flex flex-col space-y-2 items-center md:space-x-4 md:flex-row md:space-y-0 ">
            <a href="https://twitter.com/wc49358" target="_blank" rel="noreferrer" >
              <FontAwesomeIcon
                icon={faTwitter}
                width="25px"
                className="text-slate-800"
              />
            </a>
            {/* <a href="https://www.instagram.com/h67c10/" target="_blank" rel="noreferrer" >
              <FontAwesomeIcon
                icon={faInstagram}
                width="25px"
                className="text-slate-800"
              />
            </a> */}
          </div>
        </div>
        <div className="flex flex-col  items-center space-y-3 justify-center w-full pb-1 md:flex-row md:space-y-0">
            <a href="/Terms" target="_blank" rel="noreferrer"><p className="text-slate-800 font-semibold text-xs md:border-b-0 md:mr-4 md:text-sm ">Terms and Conditions </p></a>
          </div>
      </div>
    </section>
  );
};

export default Footer;
