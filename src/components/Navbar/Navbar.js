import { FaDiscord } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiPolywork, SiSpotify } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-transparent fixed z-10 w-full text-white">
      <span className="p-4">Xalone</span>
      <ul className="flex py-4">
        <li className="px-5">About</li>
        <li className="px-5">Music</li>
        <li className="px-5">Contact</li>
        <li className="px-3 pt-1">
          <a
            href="https://discord.gg/Hs2kkSkVdh"
            target="_blank"
            rel="noreferrer"
          >
            <FaDiscord />
          </a>
        </li>
        <li className="px-3 pt-1">
          <a
            href="https://www.instagram.com/xalone153/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram />
          </a>
        </li>
        <li className="px-3 pt-1">
          <a
            href="https://open.spotify.com/user/wt082rqavs34vnpov07868win"
            target="_blank"
            rel="noreferrer"
          >
            <SiSpotify />
          </a>
        </li>
        <li className="px-3 pt-1 pr-10">
          <a
            href="https://www.polywork.com/xalone"
            target="_blank"
            rel="noreferrer"
          >
            <SiPolywork />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
