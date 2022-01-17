import { Link } from "react-scroll";
import "./NavbarLinks.css";

const NavbarLinks = (props) => {
  return (
    <li
      className={
        props.logo
          ? "cursor-pointer hover-underline-animation"
          : "px-5 cursor-pointer hover-underline-animation"
      }
    >
      <Link
        to={props.to}
        spy={true}
        smooth={true}
        duration={1000}
        offset={props.logo ? 0 : 50}
      >
        {props.data}
      </Link>
    </li>
  );
};

export default NavbarLinks;
