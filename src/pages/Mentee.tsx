import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MenteeListPage = () => {
  const [username, setUsername] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterClass, setFilterClass] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterCategory, setFilterCategory] = useState("");

  useEffect(() => {
    fetchUsername();
  }, []);

  const fetchUsername = async () => {
    try {
      const response = await axios.get("<API_URL>/username");
      setUsername(response.data.username);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    // Lakukan tindakan pencarian berdasarkan searchQuery
    console.log("Search query:", searchQuery);
  };

  const handleAddNew = () => {
    // Lakukan tindakan penambahan mentee baru
    console.log("Add new mentee");
  };

  const handleFilter = async () => {
    try {
      const response = await axios.get("/mentees", {
        params: {
          class: filterClass,
          status: filterStatus,
          category: filterCategory,
        },
      });

      // Lakukan tindakan sesuai kebutuhan, seperti mengupdate state atau menampilkan hasil filtering
      console.log("Filtered Mentees:", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      {/* Sidebar */}
      <div className="sidebar col-span-12 md:col-span-2 bg-blue-100 h-screen">
        {/* Sidebar content */}
        <div className="pl-4 pt-4 pb-8 relative">
          <img className="image w-1/2 md:w-3/4" src="https://www.alterra.id/wp-content/themes/alterra-wp/assets/revamp/img/logo_nav@2x.png" alt="Logo" />
          {/* Garis di bawah logo */}
          <div className="absolute bottom-0 left-0 w-3/4 md:w-270 border-b-4 border-blue-950" style={{ top: "90%", left: "5%", height: "0px" }}></div>
        </div>
        <nav className="flex-grow">
          <ul className="list-none">
            <li className="ml-5 mt-4">
              <Link to="/dashboard" className="text-blue-500 hover:text-orange-500">
                Dashboard
              </Link>
            </li>
            <li className="ml-5 mt-4">
              <Link to="/mentee" className="text-blue-500 hover:text-orange-500">
                Mentee
              </Link>
            </li>
            <li className="ml-5 mt-4">
              <Link to="/user" className="text-blue-500 hover:text-orange-500">
                User
              </Link>
            </li>
            <li className="ml-5 mt-4">
              <Link to="/class" className="text-blue-500 hover:text-orange-500">
                Class
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content col-span-12 md:col-span-10 relative mt-2 mr-4">
        <h1 className="text-2xl font-bold mb-2">Immersive Dashboard</h1>

        {/* Halo dan Mentee List */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold mb-2">Mentee List</h2>
          <p className="text-lg text-blue-500 text-right">Halo, {username}</p>
        </div>

        {/* Garis */}
        <div className="absolute bottom-0 left-0 w-11/12 md:w-270 border-b-4 border-blue-950" style={{ top: "12%", left: "1%", height: "0px" }}></div>

        {/* Search dan Add New */}
        <div className="flex items-center justify-end mt-10">
          {/* Search */}
          <div className="flex items-center">
            <input type="text" value={searchQuery} onChange={handleInputChange} placeholder="Search Mentee" className="px-4 py-2 border border-gray-300 rounded mr-2 focus:outline-none focus:border-blue-500" />
            <button onClick={handleSearch} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
              Search
            </button>
          </div>

          {/* Add New Button */}
          <button onClick={handleAddNew} className="ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
            Add New
          </button>
        </div>
        {/* Filter */}
        <div className="flex items-center justify-end mt-4">
          <select value={filterClass} onChange={(e) => setFilterClass(e.target.value)} className="px-4 py-2 border border-gray-300 rounded mr-2 focus:outline-none">
            <option value="">Filter by Class</option>
            <option value="Backend">Backend</option>
            <option value="Frontend">Frontend</option>
            <option value="Quality Assurance">Quality Assurance</option>
          </select>
          <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)} className="px-4 py-2 border border-gray-300 rounded mr-2 focus:outline-none">
            <option value="">Filter by Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
          <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="px-4 py-2 border border-gray-300 rounded mr-2 focus:outline-none">
            <option value="">Filter by Category</option>
            <option value="IT">IT</option>
            <option value="Non IT">Non IT</option>
          </select>
          <button onClick={handleFilter} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700 ">
            Filter
          </button>
        </div>
      </div>

      {/* Table and other content */}
    </div>
  );
};

export default MenteeListPage;
