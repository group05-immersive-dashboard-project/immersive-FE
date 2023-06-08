import React from "react";
import MenuSidebar from "../components/MenuSidebar";

const Dashboard = () => {
  return (
    <div>
      <MenuSidebar title="Dashboard " name="JohnDoe">
        <hr className=" mt-24 mb-6 border-2 border-gray-500 mx-5" />
        <div className="">
          <p className="text-black">halaman dashboard</p>
        </div>
      </MenuSidebar>
    </div>
  );
};

export default Dashboard;
