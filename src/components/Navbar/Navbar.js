import NavbarLinks from "../UI/NavbarItems/NavbarLinks";
import NavbarIcon from "../UI/NavbarItems/NavbarIcons";
import { useState } from "react";

// imported icons
import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiPolywork, SiSpotify } from "react-icons/si";
import { ImSoundcloud } from "react-icons/im";

const Navbar = () => {
  const [nav, setNav] = useState("bg-transparent");

  const changeBackgoundTransparent = () => {
    if (window.scrollY < window.innerHeight) {
      setNav("bg-transparent");
      window.removeEventListener("scroll", changeBackgoundTransparent);
      window.addEventListener("scroll", changeBackgoundColor);
    }
  };

  const changeBackgoundColor = () => {
    if (window.scrollY > window.innerHeight) {
      setNav("bg-main opacity-[0.8]");
      window.removeEventListener("scroll", changeBackgoundColor);
      window.addEventListener("scroll", changeBackgoundTransparent);
    }
  };

  window.addEventListener("scroll", changeBackgoundColor);
  return (
    <div
      className={"flex justify-between fixed z-10 w-full text-lightest " + nav}
    >
      <span className="p-4">
        <NavbarLinks to="Section1" data="Xalone" logo={true} />
      </span>
      <ul className="flex py-4">
        <NavbarLinks to="Section2" data="About" />
        <NavbarLinks to="Section3" data="Music" />
        <NavbarLinks to="Section4" data="Contact" contact={true} />
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
          icon={ImSoundcloud}
          href="https://soundcloud.com/xalone0153"
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
