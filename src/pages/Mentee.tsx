import React from "react";
import MenuSidebar from "../components/MenuSidebar";
const Mentee = () => {
  return (
    <div>
      <MenuSidebar title="Dashboard" name="JohnDoe">
        <p className="text-2xl font-medium">Chart Mantee</p>
        <div className="">
          <p className="text-black">halaman Mentee List</p>
        </div>
      </MenuSidebar>
    </div>
  );
};

export default Mentee;
