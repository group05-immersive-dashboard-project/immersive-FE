import React from "react";
import MenuSidebar from "../components/MenuSidebar";

const Dashboard = () => {
  return (
    <div>
      <MenuSidebar title="Dashboard" name="JohnDoe">
        <p className="text-2xl font-medium">Chart Mantee</p>
        <div className="">
          <p className="text-black">halaman dashboard</p>
        </div>
      </MenuSidebar>
    </div>
  );
};

export default Dashboard;
