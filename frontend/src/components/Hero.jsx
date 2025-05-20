import React from "react";
import washingMachine from "../assets/mesincuci.png";

const Hero = () => {
  return (
    <div
      className="relative pt-16 bg-white min-h-[600px] flex items-center"
      style={{ background: 'linear-gradient(to bottom, #E0F7FA, #ffffff)' }}
    >
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <div className="bg-blue-100 text-gray-700 text-center px-6 py-2 rounded-full inline-block font-bold">
              Selamat Datang di Laundry BersihBersinar
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Solusi Laundry Cepat, Bersih, dan Terpercaya
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Kami hadir untuk memberikan layanan laundry berkualitas tinggi dengan proses yang cepat dan hasil maksimal. Dengan teknologi modern dan tenaga profesional, pakaian Anda akan bersih, wangi, dan siap digunakan dalam waktu singkat!
            </p>
            <a href="#orderform">
              <button
                className="mt-6 bg-blue-200 hover:bg-blue-300 text-gray-800 px-10 py-4 rounded-full text-md font-medium transition-all"
                style={{
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                Order Now
              </button>
            </a>
          </div>

          <div className="flex justify-center">
            <img
              src={washingMachine}
              alt="Washing Machine"
              className="w-full max-w-sm"
              style={{ filter: 'drop-shadow(0 10px 10px rgba(0, 0, 0, 0.1))' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
