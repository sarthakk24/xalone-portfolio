const Home = () => {
  // const img1 = "https://i.postimg.cc/Kvcx6gjJ/xalone-background-1.png";
  const img2 = "https://i.postimg.cc/HkVHxDQM/xalone-background-2.png";
  // const img3 = "https://i.postimg.cc/VN0Y7Qvw/xalone-background-3.png";
  return (
    <div className="relative" id="Section1">
      <div
        className={
          "text-white w-screen h-screen -z-10 flex justify-center items-center"
        }
      >
        <img
          src={img2}
          alt="background"
          className="h-full w-full brightness-90 object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
