import React, { useState } from 'react';
import NotificationPopup from './NotificationPopup';

const FormInput = ({ label, type = 'text', placeholder, value, onChange, name, className = '' }) => (
  <div className={className}>
    <label className="block text-gray-700 font-medium mb-2">{label}</label>
    <input
      type={type}
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary-light outline-none transition-colors"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
    />
  </div>
);

const FormTextArea = ({ label, placeholder, value, onChange, name }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-2">{label}</label>
    <textarea
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary-light outline-none transition-colors"
      placeholder={placeholder}
      rows="4"
      value={value}
      onChange={onChange}
      name={name}
    />
  </div>
);

const FormSelect = ({ label, options, value, onChange, name }) => (
  <div>
    <label className="block text-gray-700 font-medium mb-2">{label}</label>
    <select
      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary-light outline-none transition-colors"
      value={value}
      onChange={onChange}
      name={name}
    >
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const OrderForm = () => {
  const [formData, setFormData] = useState({
    nama: '',
    nomorTelepon: '',
    alamat: '',
    deskripsi: '',
    kategori: 'laundry-biasa',
    jenis: 'pakaian',
    jamPickUp: '',
  });
  const [notification, setNotification] = useState('');
  const [isConfirm, setIsConfirm] = useState(false);

  const layananOptions = [
    { label: 'Cuci Setrika', value: 'cuci-setrika' },
    { label: 'Cuci Saja', value: 'cuci-saja' },
    { label: 'Setrika Saja', value: 'setrika-saja' },
  ];

  const jenisLaundryOptions = [
    { label: 'Laundry Biasa', value: 'laundry-biasa' },
    { label: 'Laundry Kilat', value: 'laundry-kilat' },
    { label: 'Cuci Satuan', value: 'cuci-satuan' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsConfirm(true);
  };

  const confirmSubmit = async () => {
    setIsConfirm(false);
    try {
      const response = await fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setNotification('Order berhasil!');
        setFormData({
          nama: '',
          nomorTelepon: '',
          alamat: '',
          deskripsi: '',
          kategori: 'laundry-biasa',
          jenis: 'pakaian',
          jamPickUp: '',
        });
      } else {
        setNotification('Gagal membuat order: ' + data.message);
      }
    } catch (error) {
      setNotification('Terjadi kesalahan: ' + error.message);
    }
  };

  const closeNotification = () => {
    setNotification('');
    window.location.reload();
  };

  return (
    <div className="bg-gradient-to-br from-blue-200 to-blue-100 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Form Order</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
              <div className="space-y-6 pr-4">
                <FormInput 
                  label="Nama Lengkap"
                  placeholder="Masukkan nama lengkap"
                  value={formData.nama}
                  onChange={handleChange}
                  name="nama"
                />
                <FormInput 
                  label="Nomor Telepon"
                  type="tel"
                  placeholder="08xx-xxxx-xxxx"
                  value={formData.nomorTelepon}
                  onChange={handleChange}
                  name="nomorTelepon"
                />
                <FormInput 
                  label="Alamat"
                  placeholder="Jl. Terusan Cikampek No. 6 xxxx"
                  value={formData.alamat}
                  onChange={handleChange}
                  name="alamat"
                />
                <FormTextArea
                  label="Deskripsi"
                  placeholder="Masukkan deskripsi tambahan (jika ada)"
                  value={formData.deskripsi}
                  onChange={handleChange}
                  name="deskripsi"
                />
              </div>
              <div className="space-y-6 pl-4">
                <FormSelect
                  label="Kategori Layanan"
                  options={layananOptions}
                  value={formData.kategori}
                  onChange={handleChange}
                  name="kategori"
                />
                <FormSelect
                  label="Jenis Laundry"
                  options={jenisLaundryOptions}
                  value={formData.jenis}
                  onChange={handleChange}
                  name="jenis"
                />
                <FormInput 
                  label="Jam Pick Up"
                  type="time"
                  value={formData.jamPickUp}
                  onChange={handleChange}
                  name="jamPickUp"
                />
              </div>
              <div className="col-span-2 mt-6 flex justify-center">
                <button
                  type="submit"
                  className="mt-6 bg-blue-200 hover:bg-blue-300 text-gray-800 px-20 py-4 rounded-full text-md font-medium transition-all"
                  style={{
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  Order
                </button>
              </div>
            </form>
            {notification && (
              <NotificationPopup
                message={notification}
                onConfirm={closeNotification}
                onCancel={() => setIsConfirm(false)}
              />
            )}
            {isConfirm && (
              <NotificationPopup
                message="Apakah Anda yakin ingin mengirim order?"
                onConfirm={confirmSubmit}
                onCancel={() => setIsConfirm(false)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
