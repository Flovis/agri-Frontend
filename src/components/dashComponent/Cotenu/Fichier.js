import { useCallback, useEffect, useRef, useState } from "react";
import AddCatModal from "./modal/AddCatModal";
import { Notyf } from "notyf";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import TopHeader from "../header/TopHeader";
import BackNavStep from "../header/BackNav";

const Fichier = () => {
  const [open, setOpen] = useState(false);
  const [isopen, setisOpen] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [contentEditable, setcontentEditable] = useState(false);
  const location = new useLocation();
  const type = new URLSearchParams(location.search).get("type");
  const notyf = new Notyf({
    duration: 1000,
    position: {
      x: "right",
      y: "top",
    },
  });

  const toggle = useCallback((show, setshow) => {
    setshow(!show);
  }, []);

  //   test
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setcontentEditable(false);
    }
  };

  useEffect(() => {
    if (contentEditable) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [contentEditable]);

  const handleClick = (e) => {
    e.preventDefault();
    const name = Object.fromEntries(new FormData(e.target));
    if (name.category && name.category.trim() !== "") {
      if (listItems.includes(name.category)) {
        notyf.error("Catégorie existe");
      } else {
        setListItems([...listItems, name.category]);
      }
    } else {
      notyf.error("Catégorie non créée");
    }
    setOpen(!open);
  };

  return (
    <>
      <div>
        <TopHeader />
        <BackNavStep classes="hidden" linkTo="/contenu" title={type} />
      </div>
      <div className="py-16 bg-gray-900">
        {open && <AddCatModal isOpen={open} handleClick={handleClick} />}
        <div className="max-w-screen-xl mx-auto px-4 flex-wrap gap-x-12 justify-between items-center md:flex md:px-8 lg:flex-nowrap">
          <div className="flex-none mt-6 text-white lg:mt-0">
            <ul className="grid grid-cols-2 gap-2  items-center justify-center [&>*]:bg-custom-white [&>*]:w-full [&>*]:h-20 [&>*]:flex sm:[&>*]:px-10 [&>*]:rounded-lg">
              {/*btn add cat  */}
              <button
                className="flex items-center justify-center "
                onClick={() => {
                  toggle(open, setOpen);
                }}
              >
                <div className="border hover:animate-pulse duration-200 hover:bg-opacity-25 flex items-center justify-center w-14 h-14 rounded-full border-dashed border-deep-green ">
                  <p className="font-extrabold text-xl text-deep-green ">+</p>
                </div>
              </button>
              {/* les lis pour dossiers */}
              {listItems.map((item, index) => (
                <li className="flex items-center flex-col  justify-center m-auto relative  ">
                  {/* btn 3 point */}
                  <button
                    onClick={() => {
                      toggle(isopen, setisOpen);
                    }}
                  >
                    <BsThreeDotsVertical
                      className="
                  absolute right-0 top-0 mt-2 mr-2
                  "
                    />
                  </button>
                  {/* div delete */}
                  {isopen && (
                    <div className="absolute top-6 rounded-md right-6  bg-custom-white flex flex-col">
                      <button className="text-text-gray  p-2 rounded-t-md border border-borde-gray text-[10px] hover:border hover:border-borde-gray w-[100%] hover:bg-deep-green hover:text-custom-white">
                        supprimer
                      </button>
                      <button
                        onClick={() => {
                          toggle(contentEditable, setcontentEditable);
                          toggle(isopen, setisOpen);
                        }}
                        className="text-text-gray p-2 rounded-b-md border border-borde-gray text-[10px] hover:border hover:border-borde-gray w-[100%] hover:bg-deep-green hover:text-custom-white"
                      >
                        renommer
                      </button>
                    </div>
                  )}
                  <img
                    src="../assets/fichier.png"
                    alt="png"
                    className="w-12  flex-none"
                  />
                  <p
                    className="font-extrabold text-gray"
                    contentEditable={contentEditable}
                  >
                    {item}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default Fichier;
