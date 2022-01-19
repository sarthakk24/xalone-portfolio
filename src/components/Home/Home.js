import background1 from "../../assets/images/xalone_background_2.jpg";

const Home = () => {
  return (
    <div className="relative" id="Section1">
      <div
        className={
          "text-white w-screen h-screen -z-10 flex justify-center items-center"
        }
      >
        <img
          src={background1}
          alt="background"
          className="h-full w-full brightness-90 object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
