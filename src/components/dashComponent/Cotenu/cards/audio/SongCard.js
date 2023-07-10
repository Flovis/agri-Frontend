import { ImMusic } from "react-icons/im";
import { Link } from "react-router-dom";

const SongCard = ({ song }) => {
  return (
    <Link to={"/contenu/audioplayer"}>
      <div
        key={song.id}
        className="bg-custom-white p-4 border border-borde-gray rounded "
      >
        <div className="flex items-center mb-2 flex-col">
          <div className="w-16 h-16 bg-borde-gray rounded-full flex items-center justify-center mr-2">
            <ImMusic className="text-2xl text-deep-green" />
          </div>
          <h1>Titre Music</h1>
        </div>
      </div>
    </Link>
  );
};

export default SongCard;
