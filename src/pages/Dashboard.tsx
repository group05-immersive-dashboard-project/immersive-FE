import React from "react";
import MenuSidebar from "../components/MenuSidebar";

const Dashboard = () => {
  return (
    <div>
      <MenuSidebar title="Dashboard " name="JohnDoe">
        <div className=" bottom-0 left-0 w-full md:w-270 border-b-4 border-blue-950 mt-24" style={{ top: "12%", left: "1%", height: "0px" }}></div>
        <div className="">
          <p className="text-black">halaman dashboard</p>
        </div>
        <div className="flex flex-row gap-24 item-center justify-center mt-5 text-black">
          <div className="w-64 h-64 bg-teal-500">Mentee Active</div>
          <div className="w-64 h-64 bg-teal-500">Placement</div>
          <div className="w-64 h-64 bg-teal-500">Mentee class</div>
        </div>
        <div>
          <div className="my-10 full h-72 bg-teal-300">.</div>
        </div>
      </MenuSidebar>
    </div>
  );
};

export default Dashboard;
