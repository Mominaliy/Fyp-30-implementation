import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineHome,AiOutlineSearch, AiOutlineHeart, AiOutlineShop } from "react-icons/ai";
import { MdOutlineNotifications } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { RiSettings4Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from '../CrowdCaveLogo.png';

const SideNav = () => {
  const menus = [
    { name: "Home", link: "/Home", icon: AiOutlineHome },
    { name: "Search", link: "/", icon: AiOutlineSearch },
    { name: "MarketPlace", link: "/marketplace", icon: AiOutlineShop },
    { name: "Noifications", link: "/", icon: MdOutlineNotifications, margin: true },
    { name: "Profile", link: "/", icon: CgProfile },
    { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4 z-10`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus.map((menu, i) => (
            <Link
              to={menu.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <text className={`text-xl text-white font-semibold mt-5 absolute ${ open ? "ml-80":"ml-20"}`}>
        CROWDCAVE
      </text>
    </section>
  );
};

export default SideNav;