import React, { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import ReactAudioPlayer from "react-audio-player";

const AudioInput = ({ classes, onChange }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [file, setFile] = useState(null);
    const [url, setUrl] = useState("");

    const audioRef = useRef(null);

    const handlePlayPause = () => {
        const audio = audioRef?.current?.audioEl?.current;
        if (audio) {
            if (audio.paused) {
                audio?.play();
                setIsPlaying(true);
            } else {
                audio.pause();
                setIsPlaying(false);
            }
        }
    };

    const handleAudioChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            const fileUrl = URL.createObjectURL(selectedFile);
            setFile(selectedFile);
            setUrl(fileUrl);
            setIsPlaying(false);
        }
    };

    const handleAudioError = () => {
        setFile(null);
        setUrl("");
        setIsPlaying(false);
    };

    return (
        <div
            className={`border items-center justify-between bg-custom-white border-borde-gray cursor-pointer text-text-gray text-md rounded-lg focus:outline-none focus:ring-borde-gray focus:border-borde-gray block w-full p-3.5 ${classes}`}
        >
            <button
                className="mr-2 p-1 bg-custom-white text-borde-gray focus:outline-none rounded-xl"
                onClick={handlePlayPause}
            >
                {isPlaying ? (
                    <FaPause className="text-deep-green" />
                ) : (
                    <FaPlay className="text-deep-green" />
                )}
            </button>
            <input
                type="file"
                accept="audio/*"
                onChange={handleAudioChange}
                className="hidden"
                id="audio-input"
                name="file"
            />
            <label htmlFor="audio-input" className="flex-grow rounded p-2">
                {file ? file.name : "Choisissez le fichier audio"}
            </label>
            {url && (
                <ReactAudioPlayer
                    src={url}
                    className="hidden"
                    controls
                    onError={handleAudioError}
                    volume={1}
                    ref={audioRef}
                    autoPlay={isPlaying}
                />
            )}
        </div>
    );
};

export default AudioInput;
