import { NavLink } from "react-router-dom";
import CardMeteo from "../retouche/CardMeteo";

const FooterSlider = ({ navigation }) => {
  return (
    <>
      <nav className=" bg-custom-white  flex items-center justify-center flex-col  w-full h-screen border-r border-borde-gray space-y-8 sm:w-80 ">
        <div className="pt-32 absolute bottom-0">
          <CardMeteo classname="hidden" classn="mb-16 text-3xl" />
        </div>
        <div class="flex flex-col h-full  w-full">
          <div className=" w-full flex-1 flex flex-col h-full overflow-auto">
            <ul className="  text-sm font-medium flex-1 flex flex-col justify-center">
              {navigation?.map((item, idx) => (
                <li key={idx} className="">
                  <NavLink
                    to={item.to}
                    exact
                    isActive={(match, location) =>
                      match || location.pathname === item.to
                    }
                    className={(nav) =>
                      nav.isActive
                        ? "inline-flex gap-2 text-xl  items-center justify-center w-full  py-6 text-[#488575] border-r-2 border-[#488575] bg-meduim-green"
                        : "inline-flex  items-center text-xl justify-center w-full py-6 hover:bg-borde-gray"
                    }
                  >
                    <div className="text-text-gray mx-2">{item.icon}</div>
                    {item.nom}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default FooterSlider;
