import CardEmail from "./CardEmail";
import FooterList from "./FooterList";
import FooterSocial from "./FooterSocial";

function Footer() {
  return (
    <footer className="bg-[#100E1D] md:px-10" id="contact">
      <div className="pl-7 py-10 flex flex-col gap-20 md:flex-row md:justify-between">
        <div>
          <ul className="capitalize text-white text-lg space-y-5">
            <FooterList name="home" link="/" />
            <FooterList name="services" link="#services" />
            <FooterList name="our works" link="#our_works" />
            <FooterList name="clients" link="#clients" />
            <FooterList name="contact" link="#contact" />
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="font-heebo text-[#F2F2F2] text-4xl">Edie</h1>
          <div className="flex gap-2">
            <FooterSocial img="./img/instagram.svg" />
            <FooterSocial img="./img/linkedin.svg" />
            <FooterSocial img="./img/twitter.svg" />
          </div>
        </div>
        <CardEmail />
      </div>
      <div className="font-mont text-[#F2F2F2] text-sm flex gap-1 justify-center py-7">
        Created by{" "}
        <a
          href="https://github.com/Bagse"
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-bold"
        >
          Bagse
        </a>{" "}
        -{" "}
        <a
          href="https://devchallenges.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:font-bold"
        >
          devChallenges.io
        </a>
      </div>
    </footer>
  );
}

export default Footer;
