const Home = () => {
  // const img1 = "https://i.postimg.cc/Kvcx6gjJ/xalone-background-1.png";
  // const img2 = "https://i.postimg.cc/HkVHxDQM/xalone-background-2.png";
  // const img3 = "https://i.postimg.cc/VN0Y7Qvw/xalone-background-3.png";
  return (
    <div className="relative" id="Section1">
      <div
        className={
          "text-white w-full h-screen bg-[url('https://i.postimg.cc/HkVHxDQM/xalone-background-2.png')] bg-center bg-no-repeat bg-cover absolute brightness-75 -z-10"
        }
      ></div>
      <div className="text-white w-full h-screen flex justify-center items-center">
        <div className="z-10">hello</div>
      </div>
    </div>
  );
};

export default Home;
