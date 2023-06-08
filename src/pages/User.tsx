import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";

import MenuSidebar from "../components/MenuSidebar";

interface Data {
  user_id: number;
  team_id: number;
  full_name: string;
  role: string;
  email: string;
  status: string;
}

const User = () => {
  const [data, setData] = useState<Data[]>([]);
  const [cookies] = useCookies(["token"]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Data[]>("http://13.211.154.163/users", {
          headers: {
            Authorization: `Bearer ${cookies.token}`,
          },
        });

        setData(response.data);
        console.log("data yang ditampilkan :", response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <MenuSidebar title="User" name="JohnDoe">
        {/* Navbar content */}
        <div className="navbar bg-white mt-20">{/* Navbar content */}</div>
        <div className="overflow-x-auto mt-8">
          <table className="table text-black">
            {/* head */}
            <thead className="bg-sky-200 text-black">
              <tr>
                <th>No</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Team</th>
                <th>Role</th>
                <th>Status</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item) => (
                  <tr key={item.user_id}>
                    <td>{item.user_id}</td>
                    <td>{item.full_name}</td>
                    <td>{item.email}</td>
                    <td>{item.team_id}</td>
                    <td>{item.role}</td>
                    <td>{item.status}</td>
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

export default User;
