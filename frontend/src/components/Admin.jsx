import React, { useState, useRef, useEffect } from 'react';
import OrderTable from './OrderTable';
import InputOrder from './InputOrder';
import NotificationPopup from './NotificationPopup';

const Admin = () => {
  const [orders, setOrders] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [notification, setNotification] = useState(null);
  const [newOrder, setNewOrder] = useState({
    tglPesanan: null,
    nama: '',
    kategori: '',
    jenis: '',
    waktuPengerjaan: '',
    berat: '',
    nomorTelepon: '',
    alamat: '',
    deskripsi: '',
    jamPickUp: '',
    status: ''
  });

  const inputOrderRef = useRef(null);
  const orderTableRef = useRef(null);

  const fetchOrders = async () => {
    try {
      const response = await fetch('http://localhost:3000/orders');
      if (!response.ok) {
        throw new Error('Gagal mengambil data');
      }
      const data = await response.json();
      setOrders(data);
    } catch (error) {
      console.error('Error fetching orders:', error);
      setNotification('Gagal mengambil data orders');
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewOrder(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date) => {
    setNewOrder(prev => ({
      ...prev,
      tglPesanan: date
    }));
  };

  const handleEdit = (order) => {
    setIsEditing(true);
    setSelectedOrder(order);
    setNewOrder({
      tglPesanan: new Date(order.tanggal_pesanan),
      nama: order.nama || '',
      kategori: order.kategori || '',
      jenis: order.jenis || '',
      waktuPengerjaan: order.waktu_pengerjaan?.toString() || '',
      berat: order.berat?.toString() || '',
      nomorTelepon: order.nomorTelepon || '',
      alamat: order.alamat || '',
      deskripsi: order.deskripsi || '',
      jamPickUp: order.jamPickUp || '',
      status: order.status || ''
    });
    
    if (inputOrderRef.current) {
      inputOrderRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCloseNotification = () => {
    setNotification(null);
    window.location.reload();
  };

  const handleSubmit = async () => {
    try {
      const formattedData = {
        tanggal_pesanan: newOrder.tglPesanan ? newOrder.tglPesanan.toISOString() : new Date().toISOString(),
        nama: newOrder.nama,
        kategori: newOrder.kategori,
        jenis: newOrder.jenis,
        waktu_pengerjaan: parseInt(newOrder.waktuPengerjaan) || 0,
        berat: parseFloat(newOrder.berat) || 0,
        nomorTelepon: newOrder.nomorTelepon,
        alamat: newOrder.alamat,
        deskripsi: newOrder.deskripsi || '',
        jamPickUp: newOrder.jamPickUp,
        status: newOrder.status || 'pending'
      };

      const url = isEditing ? `http://localhost:3000/orders/${selectedOrder.id}` : 'http://localhost:3000/orders';
      const method = isEditing ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Gagal memproses data');
      }

      setIsEditing(false);
      setSelectedOrder(null);
      setNewOrder({
        tglPesanan: null,
        nama: '',
        kategori: '',
        jenis: '',
        waktuPengerjaan: '',
        berat: '',
        nomorTelepon: '',
        alamat: '',
        deskripsi: '',
        jamPickUp: '',
        status: ''
      });

      setNotification(isEditing ? 'Data berhasil diupdate!' : 'Data berhasil ditambahkan!');
    } catch (error) {
      console.error('Error:', error);
      setNotification(`Terjadi kesalahan: ${error.message}`);
    }
  };

  const scrollToRef = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl font-extrabold text-center mb-16 bg-gradient-to-r from-indigo-600 to-purple-700 text-transparent bg-clip-text drop-shadow-lg">
          Dashboard Admin
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Total Order</h3>
            <p className="text-4xl font-bold text-indigo-600">{orders.length}</p>
            <button
              onClick={() => scrollToRef(orderTableRef)}
              className="mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-md"
            >
              Detail
            </button>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col items-center transform hover:scale-105 transition-all duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Input Order</h3>
            <button
              onClick={() => scrollToRef(inputOrderRef)}
              className="mt-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-md"
            >
              Detail
            </button>
          </div>
        </div>

        <div ref={orderTableRef} className="mb-16 bg-white shadow-xl rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Daftar Pesanan
          </h3>
          <OrderTable orders={orders} onEdit={handleEdit} />
        </div>

        <div ref={inputOrderRef} className="bg-white shadow-xl rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            {isEditing ? 'Edit Pesanan' : 'Tambah Pesanan Baru'}
          </h3>
          <InputOrder 
            newOrder={newOrder}
            onInputChange={handleInputChange}
            onDateChange={handleDateChange}
            onSubmit={handleSubmit}
            isEditing={isEditing}
          />
        </div>

        {notification && (
          <NotificationPopup
            message={notification}
            onConfirm={handleCloseNotification}
            onCancel={handleCloseNotification}
          />
        )}
      </div>
    </div>
  );
};

export default Admin;
