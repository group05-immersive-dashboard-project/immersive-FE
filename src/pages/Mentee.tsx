import React from "react";
import MenuSidebar from "../components/MenuSidebar";
const Mentee = () => {
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
              {/* row 1 */}
              <tr className="">
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <th>1</th>
                <td>Ganderton</td>
                <td>Control Specialist</td>
                <td>Cy Ganderton</td>
              </tr>
            </tbody>
          </table>
        </div>
      </MenuSidebar>
    </div>
  );
};

export default Mentee;
