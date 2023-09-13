import React, { createContext, useContext, useState } from "react";
import ReactPlayer from "react-player";
import { MoonLoader } from "react-spinners";
import { useCart } from "react-use-cart";
import useAuth from "../../../../../hooks/useAuth";
const MyItemContext = createContext();
export const useMyItemContext = () => useContext(MyItemContext);
const CardVideo = ({ isSelectionMode, open, onPrevious, ...props }) => {
    const { getItem } = useCart();
    const [isPlaying, setIsPlaying] = useState(false);
    const { auth } = useAuth();
    const handlePlay = () => {
        if (isSelectionMode) {
            return;
        }
        setIsPlaying((prevIsPlaying) => !prevIsPlaying);
    };
    const handlePlayerClick = () => {
        if (open === 2) {
            const myItem = getItem(props.file.id);
            onPrevious({
                idContent: myItem.id,
                idOrganisation: auth.id_organisation,
                idUser: auth.id,
            });
        } else {
            handlePlay();
        }
    };
    const title = props.file.titre || "Titre Inconu";
    const description = props.file.description || "No description provided";
    return (
        <div className="max-w-md w-full bg-custom-white rounded-lg p-6">
            {props.file.link && props.file.link.length > 0 ? (
                <div className="mb-4 relative">
                    {isPlaying && !isSelectionMode ? (
                        <ReactPlayer
                            url={props.file.link}
                            playing={isPlaying}
                            controls={true}
                            id="video"
                            height="auto"
                            width="100%"
                        />
                    ) : (
                        <ReactPlayer
                            url={props.file.link}
                            controls={true}
                            id="video"
                            height="auto"
                            width="100%"
                            onPlay={() => {
                                setIsPlaying(true);
                            }}
                            onPause={() => {
                                setIsPlaying(false);
                            }}
                            onClick={handlePlayerClick}
                        />
                    )}
                </div>
            ) : (
                <div className="mb-4 text-center">No video file provided</div>
            )}
            <div className="flex flex-col sm:flex-row justify-between mt-4">
                <div className="mb-2 sm:mb-0">
                    <h3 className="font-extrabold">{title}</h3>
                    <p>{description}</p>
                </div>
                <div>
                    <button
                        className="btn btn-primary"
                        onClick={handlePlay}
                        disabled={isSelectionMode}
                    ></button>
                </div>
            </div>
        </div>
    );
};
export default CardVideo;
