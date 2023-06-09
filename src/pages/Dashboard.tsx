import React from "react";
import MenuSidebar from "../components/MenuSidebar";

const Dashboard = () => {
  return (
    <div>
      <MenuSidebar title="Dashboard " name="JohnDoe">
        <div className=" bottom-0 left-0 w-11/12 md:w-270 border-b-4 border-blue-950 mt-24" style={{ top: "12%", left: "1%", height: "0px" }}></div>
        <div className="">
          <p className="text-black">halaman dashboard</p>
        </div>
      </MenuSidebar>
    </div>
  );
};

export default Dashboard;
