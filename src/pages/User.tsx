import React, { useEffect, useState } from "react";
import axios from "axios";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Data[]>("http://13.211.154.163/users");
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <MenuSidebar title="Dashboard" name="JohnDoe">
        <div className="overflow-x-auto">
          <table className="table text-black">
            {/* head */}
            <thead className="bg-sky-200 text-black">
              <tr>
                <th>No</th>
                <th>Full Name</th>
                <th>email</th>
                <th>Team </th>
                <th>Role</th>
                <th>Status</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.user_id}>
                  <td>{item.user_id}</td>
                  <td>{item.team_id}</td>
                  <td>{item.full_name}</td>
                  <td>{item.email}</td>
                  <td>{item.team_id}</td>
                  <td>{item.full_name}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </MenuSidebar>
    </div>
  );
};

export default User;
