import MusicCard from "./MusicCard";
import data from "../../assets/music data/data";

const Music = () => {
  return (
    <div className="flex justify-center items-center">
      <div id="Section3" className="w-[75%] grid grid-cols-3">
        <MusicCard info={data[0].superMax} />
        <MusicCard info={data[1].secSong} />
        <MusicCard info={data[0].superMax} />
        <MusicCard info={data[1].secSong} />
        <MusicCard info={data[0].superMax} />
        <MusicCard info={data[1].secSong} />
      </div>
    </div>
  );
};

export default Music;
