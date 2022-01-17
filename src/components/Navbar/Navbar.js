import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiPolywork, SiSpotify } from "react-icons/si";
import NavbarLinks from "../UI/NavbarItems/NavbarLinks";
import NavbarIcon from "../UI/NavbarItems/NavbarIcons";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-transparent fixed z-10 w-full text-white">
      <span className="p-4">
        <NavbarLinks to="Section1" data="Xalone" logo={true} />
      </span>
      <ul className="flex py-4">
        <NavbarLinks to="Section2" data="About" />
        <NavbarLinks to="Section3" data="Music" />
        <NavbarLinks to="Section4" data="Contact" />
        <NavbarIcon icon={FaDiscord} href="https://discord.gg/Hs2kkSkVdh" />
        <NavbarIcon
          icon={AiFillInstagram}
          href="https://www.instagram.com/xalone153/"
        />
        <NavbarIcon
          icon={SiSpotify}
          href="https://open.spotify.com/user/wt082rqavs34vnpov07868win"
        />
        <NavbarIcon
          icon={SiPolywork}
          href="https://www.polywork.com/xalone"
          className="pr-10"
        />
      </ul>
    </div>
  );
};

export default Navbar;
