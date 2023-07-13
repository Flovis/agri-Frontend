import { useCallback, useEffect, useRef, useState } from "react";
import AddCatModal from "./modal/AddCatModal";
import { Notyf } from "notyf";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import TopHeader from "../header/TopHeader";
import BackNavStep from "../header/BackNav";
import { backendAxios } from "../../../api/axios";

const Fichier = () => {
  const [open, setOpen] = useState(false);
  const [isopen, setisOpen] = useState(false);
  const [listItems, setListItems] = useState([]);
  const [contentEditable, setcontentEditable] = useState(false);
  const location = new useLocation();
  const type = new URLSearchParams(location.search).get("type");

  const URL = `/getContents/${type}`;
  const [datas, setDatas] = useState([]);

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

  useEffect(() => {
    const fectData = async () => {
      try {
        const response = await backendAxios.get(URL, {
          headers: { "Content-Type": "application/json" },
        });
        console.log(response.data);
        setDatas(response.data.allContent);
      } catch (error) {
        console.log(error);
      }
    };
    fectData();
  }, []);

  console.log("Datas", datas);

  return (
    <>
      <div>
        <TopHeader />
        <BackNavStep classes="hidden" linkTo="/contenu" title={type} />
      </div>
      <div className="py-16 bg-gray-900">
        {/* {open && <AddCatModal isOpen={open}  />} */}
        <div className="max-w-screen-xl mx-auto px-4 flex-wrap gap-x-12 justify-between items-center md:flex md:px-8 lg:flex-nowrap">
          <div className="flex-none mt-6 text-white lg:mt-0">
            <ul className="grid grid-cols-2 gap-2  items-center justify-center [&>*]:bg-custom-white [&>*]:w-full [&>*]:h-20 [&>*]:flex sm:[&>*]:px-10 [&>*]:rounded-lg">
              {listItems.map((item, index) => (
                <li className="flex items-center flex-col  justify-center m-auto  ">
                  {}
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
