import ProfileJpg from "../../assets/images/xalone profile 2.png";

const AboutPhoto = () => {
  return (
    <div className="flex flex-col items-center mt-20 md:mt-0">
      <div className="text-3xl underline underline-offset-2 mb-3 text-light font-semibold">
        Jaimeet Modhia
      </div>
      <div className="text-2xl text-light font-medium mb-20">
        ~ Music Producer
      </div>
      <div>
        <img
          src={ProfileJpg}
          alt="xalone profile"
          className="h-96 w-96 rounded-3xl"
        />
      </div>
    </div>
  );
};

export default AboutPhoto;
