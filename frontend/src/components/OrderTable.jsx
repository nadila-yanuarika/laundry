import React, { useState } from 'react';
import NotificationPopup from './NotificationPopup';

const OrderTable = ({ orders = [], onEdit, refreshOrders }) => {
  const [notification, setNotification] = useState(null);
  const [orderToDelete, setOrderToDelete] = useState(null);

  const handleDeleteOrder = (order) => {
    setOrderToDelete(order);
    setNotification({
      message: `Apakah Anda yakin ingin menghapus pesanan ${order.nama || ''}?`,
      isConfirm: true
    });
  };

  const confirmDeleteOrder = async () => {
    if (orderToDelete) {
      try {
        const response = await fetch(`http://localhost:3000/orders/${orderToDelete.id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Berhasil menghapus pesanan.');
        }

        setNotification({
          message: 'Pesanan telah dihapus.',
          isConfirm: false
        });
        setOrderToDelete(null);
        refreshOrders();
      } catch (error) {
        console.error('Error deleting order:', error);
        setNotification({
          message: 'Berhasil menghapus pesanan.',
          isConfirm: false
        });
      }
    }
  };

  const cancelDeleteOrder = () => {
    setNotification(null);
    setOrderToDelete(null);
  };

  const formatPhoneNumber = (phoneNumber) => {
    if (!phoneNumber) return '';
    const cleanNumber = phoneNumber.replace(/\s+/g, '');
    if (cleanNumber.startsWith('0')) {
      return '+62' + cleanNumber.substring(1);
    }
    if (cleanNumber.startsWith('+62')) {
      return cleanNumber;
    }
    if (cleanNumber.startsWith('62')) {
      return '+' + cleanNumber;
    }
    return '+62' + cleanNumber;
  };

  const handleConfirmToClient = (order) => {
    if (!order || !order.nomorTelepon) return;
    
    const formattedPhoneNumber = formatPhoneNumber(order.nomorTelepon);
    
    const message = `Halo ${order.nama || ''},

Silahkan konfirmasi pesanan Anda apakah sudah benar? Jika benar berikan respon agar kami dapat memprosesnya.

Detail pesanan Anda:
ID: ${order.id || '-'}
Tanggal Pesanan: ${order.tanggal_pesanan ? new Date(order.tanggal_pesanan).toLocaleDateString() : '-'}
Kategori: ${order.kategori || '-'}
Jenis: ${order.jenis || '-'}
Berat: ${order.berat || 0} kg
Waktu Pengerjaan: ${order.waktu_pengerjaan || 0} jam
Jam Pick Up: ${order.jamPickUp || '-'}
Alamat: ${order.alamat || '-'}
Deskripsi: ${order.deskripsi || '-'}
Status: ${order.status || '-'}

Terima kasih telah menggunakan layanan kami!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!Array.isArray(orders)) {
    return (
      <div className="text-center py-4">
        Memuat...
      </div>
    );
  }

  return (
    <div>
      {notification && (
        <NotificationPopup
          message={notification.message}
          onConfirm={notification.isConfirm ? confirmDeleteOrder : () => setNotification(null)}
          onCancel={cancelDeleteOrder}
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {orders.length === 0 ? (
          <div className="col-span-full text-center py-3">
            Tidak ada data pesanan
          </div>
        ) : (
          orders.map((order, index) => {
            const date = order.tanggal_pesanan ? new Date(order.tanggal_pesanan) : null;
            return (
              <div key={order.id || index} className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="flex justify-between items-center mb-2 bg-indigo-600 text-white p-3 rounded-md">
                  <h2 className="text-lg font-bold">Pesanan #{index + 1}</h2>
                  <span className="text-sm">
                    ID: {order.id || '-'} - {date && !isNaN(date) ? date.toLocaleDateString() : 'Invalid Date'}
                  </span>
                </div>
                <div className="mb-2">
                  <span className="block text-sm font-semibold">Nama:</span>
                  <span className="text-gray-700">{order.nama || '-'}</span>
                </div>
                <div className="mb-2">
                  <span className="block text-sm font-semibold">Nomor Telepon:</span>
                  <span className="text-gray-700">{order.nomorTelepon || '-'}</span>
                </div>
                <div className="mb-2">
                  <span className="block text-sm font-semibold">Alamat:</span>
                  <span className="text-gray-700">{order.alamat || '-'}</span>
                </div>
                <div className="mb-2">
                  <span className="block text-sm font-semibold">Kategori:</span>
                  <span className="text-gray-700">{order.kategori || '-'}</span>
                </div>
                <div className="mb-2">
                  <span className="block text-sm font-semibold">Jenis:</span>
                  <span className="text-gray-700">{order.jenis || '-'}</span>
                </div>
                <div className="mb-2">
                  <span className="block text-sm font-semibold">Waktu Pengerjaan:</span>
                  <span className="text-gray-700">{order.waktu_pengerjaan || 0} jam</span>
                </div>
                <div className="mb-2">
                  <span className="block text-sm font-semibold">Berat:</span>
                  <span className="text-gray-700">{order.berat || 0} kg</span>
                </div>
                <div className="mb-2">
                  <span className="block text-sm font-semibold">Deskripsi:</span>
                  <span className="text-gray-700">{order.deskripsi || '-'}</span>
                </div>
                <div className="mb-2">
                  <span className="block text-sm font-semibold">Jam Pick Up:</span>
                  <span className="text-gray-700">{order.jamPickUp || '-'}</span>
                </div>
                <div className="mb-2">
                  <span className="block text-sm font-semibold">Status:</span>
                  <span className="text-gray-700">{order.status || '-'}</span>
                </div>
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => onEdit(order)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition-colors duration-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteOrder(order)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-200"
                  >
                    Hapus
                  </button>
                </div>
                <div className="mt-2">
                  <button
                    onClick={() => handleConfirmToClient(order)}
                    className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200"
                  >
                    Konfirmasi ke Client
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default OrderTable;