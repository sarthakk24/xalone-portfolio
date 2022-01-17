import AboutContent from "./AboutContent";
import AboutPhoto from "./AboutPhoto";

const About = () => {
  return (
    <div
      id="Section2"
      className="text-white flex justify-evenly items-center m-20 p-20 bg-[#142121]"
    >
      <AboutPhoto />
      <AboutContent />
    </div>
  );
};

export default About;
