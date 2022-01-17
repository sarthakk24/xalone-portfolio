import AboutContent from "./AboutContent";
import AboutPhoto from "./AboutPhoto";

const About = () => {
  return (
    <div
      id="Section2"
      className="text-white flex justify-evenly items-center m-8 p-20"
    >
      <AboutPhoto />
      <AboutContent />
    </div>
  );
};

export default About;
