import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import MenuSidebar from "../components/MenuSidebar";

interface Data {
  class_id: number;
  user_id: number;
  class_name: string;
  start_date: string;
  graduate_date: string;
}

const Class = () => {
  const [data, setData] = useState<Data[]>([]);
  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<any>("http://13.211.154.163/classes", {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        });

        setData(response.data);
        console.log("Data class yang ditampilkan:", response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [cookies.token]);

  return (
    <div>
      <MenuSidebar title="User" name="JohnDoe">
        <div className="bottom-0 left-0 w-y md:w-270 border-b-4 border-blue-950 mt-24" style={{ top: "12%", left: "1%", height: "0px" }}></div>
        <div className="flex items-center justify-end mt-4">
          {/* Search */}
          <div className="flex items-center mt-10">
            <input type="text" placeholder="Search Mentee" className="px-4 py-2 border border-gray-300 rounded mr-2 focus:outline-none focus:border-blue-500" />
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Search</button>
          </div>

          {/* Add New Button */}
          <button className="ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 mt-10">Add New</button>
        </div>
        <div className="navbar bg-white"></div>
        <div className="overflow-x-auto">
          <table className="table text-black">
            <thead className="bg-sky-200 text-black">
              <tr>
                <th>No</th>
                <th>Class Name</th>
                <th>User ID</th>
                <th>Start Date</th>
                <th>Graduate Date</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item) => (
                  <tr key={item.class_id}>
                    <td>{item.class_id}</td>
                    <td>{item.class_name}</td>
                    <td>{item.user_id}</td>
                    <td>{item.start_date}</td>
                    <td>{item.graduate_date}</td>

                    <td>{/* Tombol Update */}</td>
                    <td>{/* Tombol Delete */}</td>
                  </tr>
                ))
              ) : (
                <tr></tr>
              )}
            </tbody>
          </table>
        </div>
      </MenuSidebar>
    </div>
  );
};

export default Class;
