import PlayPauseButton from "../UI/Music/PlayPauseButton";
import { useState, useEffect, useRef } from "react";

const MusicCard = (props) => {
  const progressBar = useRef();
  const audioEl = useRef(null);
  const animationRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const calculateTime = (sec) => {
    const min = Math.floor(+sec / 60);
    const minutes = min < 10 ? `0${min}` : min;
    const seconds =
      Math.floor(+sec - min * 60) < 10
        ? `0${Math.floor(+sec - min * 60)}`
        : Math.floor(+sec - min * 60);
    return `${minutes}:${seconds}`;
  };

  const changeRange = () => {
    audioEl.current.currentTime = progressBar.current.value;
    setCurrentTime(progressBar.current.value);
  };

  const whilePlaying = () => {
    progressBar.current.value = audioEl.current.currentTime;
    setCurrentTime(progressBar.current.value);
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioEl.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  });

  const onLoadedMetadata = () => {
    const seconds = Math.floor(audioEl.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  };

  return (
    <div
      className={
        " text-light min-w-[300px] min-h-[300px] relative flex flex-col justify-evenly items-center"
      }
    >
      <img
        src={props.info.background}
        alt="music background"
        className="absolute w-full h-full object-cover brightness-[0.6] -z-10"
      />

      <audio
        onEnded={() => {
          setIsPlaying(false);
        }}
        ref={audioEl}
        src={props.info.song}
        preload="metadata"
        onLoadedMetadata={onLoadedMetadata}
      ></audio>

      <div className="text-5xl">
        <PlayPauseButton isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      </div>

      <div className="text-lg">
        <span className="mr-2">{calculateTime(currentTime)}</span>
        <input
          className="hover:cursor-pointer"
          type="range"
          defaultValue={0}
          ref={progressBar}
          onChange={changeRange}
        />
        <span className="ml-2">{calculateTime(duration)}</span>
      </div>
    </div>
  );
};

export default MusicCard;
