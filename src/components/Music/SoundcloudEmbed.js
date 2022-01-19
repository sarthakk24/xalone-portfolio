const SoundcloudEmbed = (props) => {
  return (
    <div className="px-2 brightness-90">
      <iframe
        title={props.key}
        className="h-[250px] w-full"
        scrolling="no"
        frameBorder="no"
        auto_play="false"
        src={props.data.srcApi}
      ></iframe>
      <div className="text-[10px] text-[#cccccc] break-normal overflow-hidden whitespace-nowrap text-ellipsis font-thin">
        <a
          rel="noreferrer"
          href={props.data.profile}
          title={props.data.userName}
          target="_blank"
          className="text-[#cccccc]"
        >
          {" "}
        </a>{" "}
        ·{" "}
        <a
          rel="noreferrer"
          href={props.data.srcMusic}
          title={props.data.title}
          target="_blank"
          className="text-[#cccccc]"
        >
          {" "}
        </a>
      </div>
    </div>
  );
};

export default SoundcloudEmbed;
