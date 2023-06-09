import React from "react";
import MenuSidebar from "../components/MenuSidebar";
const Class = () => {
  return (
    <div>
      <MenuSidebar title="Class" name="JohnDoe">
        <div className=" bottom-0 left-0 w-full md:w-270 border-b-4 border-blue-950 mt-24" style={{ top: "12%", left: "1%", height: "0px" }}></div>
        {/* Navbar content */}
        <div className="flex items-center justify-end mt-4">
          {/* Search */}
          <div className="flex items-center mt-10">
            <input type="text" placeholder="Search Mentee" className="px-4 py-2 border border-gray-300 rounded mr-2 focus:outline-none focus:border-blue-500" />
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Search</button>
          </div>

          {/* Add New Button */}
          <button className="ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 mt-10">Add New</button>
        </div>
        <div className="navbar bg-white ">{/* Navbar content */}</div>
        <div className="overflow-x-auto ">
          <table className="table text-black">
            {/* head */}
            <thead className="bg-sky-200 text-black">
              <tr>
                <th>No</th>
                <th>Class Name</th>
                <th>Detail</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </tbody>
          </table>
        </div>
      </MenuSidebar>
    </div>
  );
};

export default Class;
