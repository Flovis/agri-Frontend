import { useState } from "react";

function Mp3() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(null);
  const [volume, setVolume] = useState(50);
  const [progress, setProgress] = useState(0);

  const songs = [
    {
      id: 1,
      title: "Song 1",
      artist: "Artist 1",
      duration: "3:45",
      coverImage: "path/to/cover/image1.jpg",
      audio: "path/to/audio1.mp3",
    },
    {
      id: 2,
      title: "Song 2",
      artist: "Artist 2",
      duration: "4:20",
      coverImage: "path/to/cover/image2.jpg",
      audio: "path/to/audio2.mp3",
    },
    // Add more songs...
  ];

  const playSong = (song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const pauseSong = () => {
    setIsPlaying(false);
  };

  const changeVolume = (event) => {
    setVolume(event.target.value);
  };

  const updateProgress = (event) => {
    const { duration, currentTime } = event.target;
    const progressPercent = (currentTime / duration) * 100;
    setProgress(progressPercent);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-200">
      <div className="w-64 h-64 bg-white rounded-lg shadow-lg mb-8">
        {currentSong && (
          <img
            src={currentSong.coverImage}
            alt={currentSong.title}
            className="w-full h-full object-cover rounded-t-lg"
          />
        )}
      </div>
      <h1 className="text-3xl font-bold mb-4">MP3 Player</h1>
      <div className="flex items-center space-x-4 mb-6">
        <button
          className={`p-2 rounded-full ${
            isPlaying ? "bg-red-500" : "bg-green-500"
          }`}
          onClick={isPlaying ? pauseSong : () => playSong(songs[0])}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-white"
          >
            {isPlaying ? (
              <path d="M18 12L6 21V3z" />
            ) : (
              <path d="M6 18L18 12L6 6" />
            )}
          </svg>
        </button>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={changeVolume}
          className="w-32 h-2 bg-gray-300 rounded-full"
        />
      </div>
      <div className="w-full h-2 bg-gray-300 rounded-full">
        <div
          className="h-full bg-green-500 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <ul className="mt-6 space-y-2">
        {songs.map((song) => (
          <li key={song.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img
                src={song.coverImage}
                alt={song.title}
                className="w-10 h-10 object-cover rounded"
              />
              <div>
                <p className="font-bold">{song.title}</p>
                <p className="text-sm text-gray-500">{song.artist}</p>
              </div>
            </div>
            <p className="text-sm">{song.duration}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Mp3;
