import React from 'react';

const NotificationPopup = ({ message, onConfirm, onCancel }) => {
  const isConfirm = message.startsWith('Apakah Anda yakin');

  const handleConfirm = () => {
    onConfirm();
    if (!isConfirm) {
      window.location.reload();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full relative transition-opacity duration-300">
        <h3 className="text-lg font-semibold text-black">{message}</h3>
        <div className="mt-4 flex justify-end">
          {isConfirm ? (
            <>
              <button 
                onClick={onCancel}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-200 mr-2"
              >
                Tidak
              </button>
              <button 
                onClick={handleConfirm}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200"
              >
                Ya
              </button>
            </>
          ) : (
            <button 
              onClick={handleConfirm}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-200"
            >
              OK
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;
