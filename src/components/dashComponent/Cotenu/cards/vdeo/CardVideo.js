import React, { createContext, useContext, useState } from "react";
import ReactPlayer from "react-player";
import { MoonLoader } from "react-spinners";
import { useCart } from "react-use-cart";
// import { OurContext } from "../../../../../context/SelectContext";
import useAuth from "../../../../../hooks/useAuth";

const MyItemContext = createContext();
export const useMyItemContext = () => useContext(MyItemContext);

const CardVideo = ({ isSelectionMode, open, onPrevious, ...props }) => {
    const { getItem } = useCart();
    const [isPlaying, setIsPlaying] = useState(false);
    const { auth } = useAuth();
    console.log("auth: ", auth.id);

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

    const title = props.file.title || "No title provided";
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
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div>
                    <button
                        className="btn btn-primary"
                        onClick={handlePlay}
                        disabled={isSelectionMode}
                    >
                        {isPlaying ? "Pause" : "Play"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardVideo;

// <div>
//   <div className="max-w-md w-full bg-custom-white rounded-lg p-6">
//     {/* {props.file.link && props.file.link.length > 0 ? ( */}
//     <div className="mb-4 relative">
//       {/* {isPlaying && !isSelectionMode ? ( */}
//       <ReactPlayer
//         url={props.file.link}
//         playing={isPlaying}
//         controls={true}
//         id="video"
//         height="10rem"
//         width="15.5rem"
// className="w-full h-40 bg-cover bg-center bg-no-repeat cursor-pointer"
// />
// {/* // ) : ( */}
// {/* //   <div */}
// {/* // className="w-full h-40 bg-cover bg-center bg-no-repeat */}
// {/* cursor-pointer" */}
// {/* //     onClick={() => { */}
// {/* //       if (open === 2) { */}
// // const myItem = getItem(props.file.id);
// {/* //         onPrevious({ */}
// // idContent: myItem.id, // idOrganisation: auth.id_organisation, //
// idUser: auth.id,
// {/* //         }); */}
// {/* //       } else { */}
// // handlePlay();
// {/* //       }
//     }}
//     style={{ */}
// {/* //       backgroundImage: `url('https://img.youtube.com/vi/${
//   //         props.file.link.split("v=")[1]
//   //       }/maxresdefault.jpg')`,
//   //     }}
//   //   > */}
// {/* //     <div className="absolute inset-0 flex items-center justify-center">
//   //       {!isSelectionMode && ( // Affichez le bouton de lecture uniquement en dehors du mode de sélection
//   //         <button
//   //           className="bg-[#ff0000] rounded-lg px-3 py-1"
//   //           onClick={handlePlay}
//   //         >
//           <svg
//             className={`${ */}
//       {/* // isPlaying ? "w-full h-full" : "w-6 h-6" */}
//       {/* //             } text-custom-white`}
//         //             fill="currentColor"
//         //             viewBox="0 0 24 24"
//         //             xmlns="http://www.w3.org/2000/svg"
//         //           >
//         //             <path d="M8 5v14l11-7z" />
//         //           </svg>
//         //         </button>
//         //       )}
//         //     </div> */}
//       {/* //   </div>
//         // )} */}
//     </div>
//     {/* // ) : ( */}
//     {/* //   <MoonLoader color="#488575" /> */}
//     {/* // )} */}
//   </div>
// </div>
