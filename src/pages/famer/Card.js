import React from "react";
import { FaRegComment } from "react-icons/fa";
import Button from "../../components/Button";

const Card = ({ title, publish, content, imageLink }) => {
    return (
        <div className="h-auto border-b border-borde-gray hover:bg-[#F8F8F8]">
            <div className="p-4">
                <div className="titre mb-1">
                    <div className="font-bold text-md">{title}</div>
                    <div className="text-sm text-text-gray">
                        Publié il y a {publish}
                    </div>
                </div>
                <div className="body px-5 mb-4">
                    <div className="image">
                        <div className="content mb-2">{content}</div>
                        <div className="h-auto w-full border border-borde-gray rounded-lg">
                            <img
                                src={imageLink}
                                alt=""
                                className="h-full max-w-full w-full rounded-lg"
                                rounded-lg
                            />
                        </div>
                    </div>
                </div>
                <div className="footer px-5">
                    <Button
                        className="bloc hover:text-[#06B581] w-[50px]"
                        typ="button"
                        icon={
                            <FaRegComment className="text-md text-text-gray hover:text-[#06B581]" />
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default Card;
