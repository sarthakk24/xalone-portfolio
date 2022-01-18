import { FaPlay, FaPause } from "react-icons/fa";

const PlayPauseButton = (props) => {
  return (
    <button
      onClick={() => {
        props.setIsPlaying(!props.isPlaying);
      }}
    >
      {props.isPlaying ? <FaPause /> : <FaPlay />}
    </button>
  );
};

export default PlayPauseButton;
