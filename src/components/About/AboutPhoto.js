import Profile from "../../assets/images/xalone profile 2.png";

const AboutPhoto = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="text-3xl underline underline-offset-2 mb-20 text-[#F0A500] font-semibold">
        Jaimeet Modhia
      </div>
      <div>
        <img
          src={Profile}
          alt="xalone profile"
          className="h-96 brightness-[0.8] w-96"
        />
      </div>
    </div>
  );
};

export default AboutPhoto;
