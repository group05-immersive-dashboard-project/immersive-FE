import { useState } from "react";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
const MenuSidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <div className={'bg-sky-100 h-screen p-5 pt-8 ${open ? "w-72" :"w-20"}  text-black relative'}>
        <BsFillArrowLeftCircleFill className="bg-white text-black text-3xl rounded-full absolute -right-3 top-9 border cursor-pointer border-sky-300  " onClick={() => setOpen(!open)} />
      </div>
      <div className="p-7">
        <h1 className="text-2xl font-semibold text-black">Dashboard</h1>
      </div>
    </div>
  );
};

export default MenuSidebar;
