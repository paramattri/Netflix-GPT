import { IoMdInformationCircleOutline, IoMdPlay } from "react-icons/io";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pl-11">
      <h1 className="text-white text-5xl font-bold">{title}</h1>
      <p className="text-white text-lg w-1/3 mt-4">{overview}</p>
      <div className="flex gap-4 mt-4">
        <button className="bg-white text-black font-semibold text-lg rounded-[4px] px-6 py-2 flex items-center gap-[6px]">
          <IoMdPlay size={30} /> Play
        </button>
        <button className="bg-zinc-500/70 text-white font-semibold text-lg rounded-[4px] px-6 py-2 flex items-center gap-[6px]">
          <IoMdInformationCircleOutline size={30} /> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
