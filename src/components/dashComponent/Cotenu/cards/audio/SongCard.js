import { useState } from "react";
import { ImMusic } from "react-icons/im";
import { Link } from "react-router-dom";
import CardMusic from "./CardMusic";
const SongCard = ({ index, titre }) => {
  const [open, setopen] = useState(false);
  const handleClick = () => {
    setopen(!open);
  };
  return (
    <>
      <div
        key={index}
        className="bg-custom-white p-4 border border-borde-gray rounded "
        onClick={handleClick}
      >
        <div className="flex items-center mb-2 flex-col">
          <div className="w-16 h-16 bg-borde-gray rounded-full flex items-center justify-center mr-2">
            <ImMusic className="text-2xl text-deep-green" />
          </div>
          <h1>Titre Music</h1>
        </div>
      </div>
      {open && <CardMusic />}
    </>
  );
};

export default SongCard;
