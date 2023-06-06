import React from "react";
import { useNavigate } from "react-router-dom";

import loginImg from "../assets/login1.png";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Login"); // Ganti '/halaman-tujuan' dengan path tujuan yang Anda inginkan
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen  ">
      <div className="hidden sm:block text-black">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
        {/* <p>hello guaes</p> */}
      </div>

      <div className="bg-white-800 flex flex-col justify-center px-8">
        <h2 className="text-xl text-blue-700 font-semibold text-center px-10">
          Alterra Indonesia telah berdiri sejak tahun 2015 dengan nama awal Sepulsa.com. Sebagai perusahaan teknologi terkemuka di Indonesia yang berfokus pada ekosistem billing dan teknologi pembayaran, Alterra Indonesia kini telah
          terhubung ke berbagai penerbit tagihan (Bill Issuers) dan metode pembayaran yang populer di Indonesia. Melalui sebuah innovative platform, Alterra Indonesia menyediakan layanan yang dapat menghubungkan semua penerbit tagihan (Bill
          Issuers), Digital Commerce, dan juga End-User.
        </h2>

        <button className="w-24 mx-auto my-5 py-2 bg-orange-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-full " onClick={handleClick}>
          Login
        </button>
      </div>
    </div>
  );
}
