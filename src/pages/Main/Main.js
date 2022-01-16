import Styles from "./Main.module.css";
import Background1 from "../../assets/images/xalone background 2.png";

const Main = () => {
  return (
    <div className="text-white bg-[#222222] w-full h-screen">
      <div>
        <img src={Background1} className="w-screen h-screen" />
      </div>
      <div>hello</div>
    </div>
  );
};

export default Main;
