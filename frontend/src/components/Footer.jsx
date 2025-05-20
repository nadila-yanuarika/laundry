import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-200 to-blue-100 py-10 text-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h4 className="text-lg font-semibold mb-4">Kenapa Memilih Kami</h4>
            <ul className="space-y-2">
              <li>Pelayanan yang Cepat</li>
              <li>Kualitas Terbaik</li>
              <li>Harga Terjangkau</li>
              <li>Ramah Lingkungan</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan Kami</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-gray-700 transition-colors">Cuci Setrika</a></li>
              <li><a href="#services" className="hover:text-gray-700 transition-colors">Cuci Saja</a></li>
              <li><a href="#services" className="hover:text-gray-700 transition-colors">Setrika Saja</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak Kami</h4>
            <p>Jl. Kebersihan No.123, Jakarta</p>
            <p>Email: info@bersihbersinar.com</p>
            <p>Telepon: +62 812 3456 7890</p>
          </div>
        </div>

        <hr className="my-6 border-gray-400" />

        <div className="flex flex-col md:flex-row items-center justify-between text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} BersihBersinar. Semua Hak Dilindungi.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="mx-2 hover:text-gray-800 transition-colors">Facebook</a>
            <a href="#" className="mx-2 hover:text-gray-800 transition-colors">Twitter</a>
            <a href="#" className="mx-2 hover:text-gray-800 transition-colors">Instagram</a>
            <a href="#" className="mx-2 hover:text-gray-800 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
