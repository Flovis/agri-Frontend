import { useEffect, useState } from "react";
import BackNavStep from "./BackNav";
import TopHeader from "./TopHeader";

export default function Notification() {
  const [isToggled, setIsToggled] = useState(false);
  const [tab, setTab] = useState([]);
  console.log("tab: ", tab);

  let classes;

  const radios = [
    {
      id: 1,
      name: "Hobby plan",
      description: "For personal or non-commercial projects.",
    },
    {
      id: 2,
      name: "Pro plan",
      description: "For team collaboration with advanced features.",
    },
    {
      id: 3,
      name: "Enterprise plan",
      description: "For teams with security,and performance needs.",
    },

    {
      id: 4,
      name: "Enterprise plan",
      description: "For teams with security,and performance needs.",
    },
  ];

  const handleclick = (id) => {
    const array = [...radios];
    setTab(array);
  };
  useEffect(() => {
    handleclick();
  }, []);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <div className="z-50 fixed top-0 w-full">
        <TopHeader />
        <BackNavStep
          classes="hidden"
          title="Notification"
          linkTo="/contenu"
          type="Notification"
        />
      </div>
      <div className=" mx-auto px-4   h-full mt-32">
        {/* ---------------------------------------------- */}
        <div className="text-text-gray font-medium bg-custom-white w-screen -ml-4  my-4 h-14 flex">
          <label
            htmlFor="toggle"
            className="flex items-center justify-between w-full px-4  cursor-pointer "
          >
            <div className="ml-3 text-gray-700 font-medium">
              Desactiver les Notification
            </div>
            <div className="relative">
              <input
                id="toggle"
                type="checkbox"
                className="sr-only"
                checked={isToggled}
                onChange={handleToggle}
              />
              <div className="block bg-deep-green w-14 h-8 rounded-full"></div>
              <div
                className={`dot absolute left-1 top-1 bg-custom-white w-6 h-6 rounded-full transition transform ${
                  isToggled ? "translate-x-6" : "translate-x-0"
                }`}
              ></div>
            </div>
          </label>
        </div>
        {/* ----------------------------- */}

        {/* entrant-------------------- */}
        <div className="w-screen -ml-4  bg-custom-white py-4  flex flex-col  items-center ">
          <h2 className="text-text-gray font-medium">Nouvelle Notifications</h2>
          <ul className="mt-6 space-y-3  p-4 overflow-y-auto max-h-80 w-full   font-extrabold">
            {isToggled &&
              tab?.map((item, index) => (
                <li key={item.id} onClick={() => handleclick(index)}>
                  <div className="w-10 h-10 bg-deep-green -mb-10 flex items-center justify-center text-custom-white">
                    {" "}
                    M{" "}
                  </div>
                  <label htmlFor={item.name} className="block relative">
                    <div className="w-full p-5 cursor-pointer rounded-lg border border-borde-gray bg-white shadow-sm ring-borde-gray peer-checked:ring-2 duration-200">
                      <div className="pl-7">
                        <h3 className="leading-none text-gray-800 font-medium">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    {/* <span className="block absolute top-5 left-5 border peer-checked:border-[5px] peer-checked:border-indigo-600 w-4 h-4 rounded-full"></span> */}
                  </label>
                </li>
              ))}
          </ul>
        </div>

        {/* precedent----------------- */}
        <div className="w-screen -ml-4 bg-custom-white mt-4 py-4 flex flex-col  items-center">
          <h2 className="text-text-gray font-medium">
            {" "}
            Notifications Précedents
          </h2>
          <ul className="mt-6 space-y-3 overflow-y-auto max-h-80 w-full p-4 ">
            {isToggled &&
              radios.map((item, idx) => (
                <li key={idx}>
                  <div className="w-10 h-10 bg-deep-green -mb-10 flex items-center justify-center text-custom-white">
                    {" "}
                    M{" "}
                  </div>
                  <label htmlFor={item.name} className="block relative">
                    <div className="w-full p-5 cursor-pointer rounded-lg border border-borde-gray bg-white shadow-sm ring-borde-gray peer-checked:ring-2 duration-200">
                      <div className="pl-7">
                        <h3 className="leading-none text-gray-800 font-medium">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    {/* <span className="block absolute top-5 left-5 border peer-checked:border-[5px] peer-checked:border-indigo-600 w-4 h-4 rounded-full"></span> */}
                  </label>
                </li>
              ))}
          </ul>{" "}
        </div>
      </div>
    </>
  );
}
