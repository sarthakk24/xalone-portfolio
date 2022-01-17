import Discord from "../../assets/svg/discord.svg";
import Instagram from "../../assets/svg/instagram.svg";
import spotify from "../../assets/svg/spotify.svg";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <div className="bg-[#142121] min-h-[200px] flex justify-center items-center text-white">
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
      </ul>
    </div>
  );
};

export default Footer;
