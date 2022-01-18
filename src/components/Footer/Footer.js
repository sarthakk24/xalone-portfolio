import Discord from "../../assets/svg/discord.svg";
import Instagram from "../../assets/svg/instagram.svg";
import spotify from "../../assets/svg/spotify.svg";
import Gmail from "../../assets/svg/gmail.svg";
import { SiPolywork } from "react-icons/si";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <div className="bg-main min-h-[200px] flex justify-center items-center text-white">
      <ul className="flex justify-evenly w-full">
        <FooterSocial
          icon={Discord}
          name="Discord"
          href="https://discord.gg/Hs2kkSkVdh"
        />
        <FooterSocial
          icon={Instagram}
          name="Instagram"
          href="https://www.instagram.com/xalone153/"
        />
        <FooterSocial
          icon={spotify}
          name="Spotify"
          href="https://open.spotify.com/user/wt082rqavs34vnpov07868win"
        />
        <FooterSocial
          icon={Gmail}
          name="Gmail"
          href="xalonemusic153@gmail.com"
        />
        <li className="text-lightest text-lg">
          <a
            href="https://www.polywork.com/xalone"
            className="flex"
            target="_blank"
            rel="noreferrer"
          >
            <span className="pr-2 pt-2">
              <SiPolywork />
            </span>
            Polywork
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;