import { useEffect, useState } from "react";
import BackNavStep from "./BackNav";
import TopHeader from "./TopHeader";

export default function Notification() {
  const [tab, setTab] = useState();
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
    // console.log("id: ", id);

    // setTab(radios?.filter((el) => el.id !== id));
    setTab(radios?.splice(radios?.findIndex((obj) => obj.id === id)));
    console.log(tab?.findIndex((obj) => obj.id === id));
  };
  const handleclickStart = (id) => {
    // console.log("id: ", id);

    // setTab(radios?.filter((el) => el.id !== id));
    setTab(radios?.filter((el) => el.id !== id));
    console.log(tab);
  };
  //   useEffect(() => {
  //     handleclick();
  //   }, []);
  useEffect(() => {
    handleclickStart();
  }, []);

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
        <h2 className="text-text-gray font-medium bg-custom-white w-screen -ml-4 pl-4 my-4 h-14">
          Desactiver les Notification
        </h2>
        {/* entrant-------------------- */}
        <div className="w-screen -ml-4 pl-6 bg-custom-white py-4 ">
          <h2 className="text-text-gray font-medium">Nouvelle Notifications</h2>
          <ul className="mt-6 space-y-3 overflow-y-auto max-h-80 w-[21rem] font-extrabold">
            {tab?.map((item) => (
              <li key={item.id} onClick={() => handleclick(item.id)}>
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
        <div className="w-screen -ml-4 pl-6 bg-custom-white mt-4 py-4">
          <h2 className="text-text-gray font-medium">
            {" "}
            Notifications Précedents
          </h2>
          <ul className="mt-6 space-y-3 overflow-y-auto max-h-80 w-[21rem] ">
            {radios.map((item, idx) => (
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
