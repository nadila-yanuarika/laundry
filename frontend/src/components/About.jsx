import React from 'react';
import peopleImage from '../assets/people.png';

const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 flex items-center">
        <div className="flex-1 text-left pr-12">
          <h2 className="text-3xl font-bold mb-8">Tentang Kami!</h2>
          <p className="text-gray-600 mb-8">
            Selamat datang di Bersih Bersinar, layanan laundry profesional yang mengutamakan kualitas dan
            kepuasan pelanggan. Kami hadir untuk memberikan solusi cuci yang cepat, praktis, dan higienis
            bagi kebutuhan pakaian Anda.
          </p>
          <h3 className="text-2xl font-bold mb-4">Misi Kami</h3>
          <p className="text-gray-600">
            Di BersihBersinar, kami memiliki misi untuk memberikan pelayanan laundry berkualitas tinggi
            yang mudah dijangkau oleh semua kalangan.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src={peopleImage}
            alt="People"
            className="w-full max-w-sm h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
