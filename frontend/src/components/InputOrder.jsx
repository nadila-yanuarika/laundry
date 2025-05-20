import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const InputOrder = ({ newOrder, onInputChange, onDateChange, onSubmit, isEditing }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 font-medium mb-2">Tanggal Pesanan</label>
          <DatePicker
            selected={newOrder.tglPesanan}
            onChange={onDateChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            dateFormat="dd/MM/yyyy"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Nama</label>
          <input
            type="text"
            name="nama"
            value={newOrder.nama}
            onChange={onInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Nomor Telepon</label>
          <input
            type="text"
            name="nomorTelepon"
            value={newOrder.nomorTelepon}
            onChange={onInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Alamat</label>
          <input
            type="text"
            name="alamat"
            value={newOrder.alamat}
            onChange={onInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Kategori</label>
          <select
            name="kategori"
            value={newOrder.kategori}
            onChange={onInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Pilih Kategori</option>
            <option value="cuci-setrika">Cuci Setrika</option>
            <option value="cuci-kering">Cuci Kering</option>
            <option value="setrika">Setrika</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Jenis Laundry</label>
          <select
            name="jenis"
            value={newOrder.jenis}
            onChange={onInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Pilih Jenis</option>
            <option value="laundry-biasa">Laundry Biasa</option>
            <option value="laundry-kilat">Laundry Kilat</option>
            <option value="cuci-satuan">Cuci Satuan</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Waktu Pengerjaan (jam)</label>
          <input
            type="number"
            name="waktuPengerjaan"
            value={newOrder.waktuPengerjaan}
            onChange={onInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Berat (kg)</label>
          <input
            type="number"
            name="berat"
            value={newOrder.berat}
            onChange={onInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Jam Pick Up</label>
          <input
            type="time"
            name="jamPickUp"
            value={newOrder.jamPickUp}
            onChange={onInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-2">Status</label>
          <select
            name="status"
            value={newOrder.status}
            onChange={onInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="">Pilih Status</option>
            <option value="pending">Pending</option>
            <option value="process">Process</option>
            <option value="done">Done</option>
          </select>
        </div>

        <div className="col-span-2">
          <label className="block text-gray-700 font-medium mb-2">Deskripsi</label>
          <textarea
            name="deskripsi"
            value={newOrder.deskripsi}
            onChange={onInputChange}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows="4"
          />
        </div>
      </div>

      <div className="mt-6 flex justify-center">
        <button
          type="submit"
          className={`px-6 py-2 rounded-lg text-white font-semibold transition-colors duration-300 ${
            isEditing 
              ? 'bg-green-500 hover:bg-green-600 focus:ring-green-300' 
              : 'bg-blue-500 hover:bg-blue-600 focus:ring-blue-300'
          } focus:outline-none focus:ring-2 focus:ring-offset-2`}
        >
          {isEditing ? 'Konfirmasi Perubahan' : 'Tambah Pesanan'}
        </button>
      </div>
    </form>
  );
};

export default InputOrder;
