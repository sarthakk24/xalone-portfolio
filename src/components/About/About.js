import AboutContent from "./AboutContent";
import AboutPhoto from "./AboutPhoto";

const About = () => {
  return (
    <div
      id="Section2"
      className="text-light flex justify-evenly items-center m-20 p-20 bg-[#1B3431] h-screen drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
    >
      <AboutPhoto />
      <AboutContent />
    </div>
  );
};

export default About;
