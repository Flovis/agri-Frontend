import { ImMusic } from "react-icons/im";

const SongCard = ({ song }) => {
    return (
      <div key={song.id} className="bg-custom-white p-4 border border-borde-gray rounded ">
        <div className="flex items-center mb-2 flex-col">
          <div className="w-16 h-16 bg-borde-gray rounded-full flex items-center justify-center mr-2">
            <ImMusic className="text-2xl text-custom-red" />
          </div>
          <h1>Titre Music</h1>
        </div>
      </div>
    );
  };

  export default SongCard