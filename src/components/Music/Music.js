import SoundcloudEmbed from "./SoundcloudEmbed";
import data from "../../assets/music data/data";

const Music = () => {
  return (
    <div className="flex justify-center items-center flex-col" id="Section3">
      <div className="text-4xl font-semibold mb-5 mt-14 text-light">Music</div>
      <div
        className="w-[90%] grid grid-cols-3 bg-main p-10  
      drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
      >
        <SoundcloudEmbed data={data[0]} />
        <SoundcloudEmbed data={data[1]} />
        <SoundcloudEmbed data={data[0]} />
        <SoundcloudEmbed data={data[1]} />
        <SoundcloudEmbed data={data[0]} />
        <SoundcloudEmbed data={data[1]} />
      </div>
    </div>
  );
};

export default Music;
