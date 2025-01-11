import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Lock = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (
        (event.ctrlKey && event.key === 'u') ||
        (event.ctrlKey && event.key === 'i') ||
        (event.ctrlKey && event.key === 's') ||
        (event.ctrlKey && event.shiftKey && event.key === 'i') ||
        (event.ctrlKey && event.shiftKey && event.key === 'I') ||
        (event.ctrlKey && event.shiftKey && event.key === 'J') ||
        (event.ctrlKey && event.key === 'U') ||
        (event.ctrlKey && event.key === 'F12') ||
        event.key === 'F12'
      ) {
        event.preventDefault();
        showToast('LOL');
      }
    };

    const handleContextMenu = (event) => {
      event.preventDefault();
      showToast(' LOL');
    };
    const showToast = (message) => {
      toast.info(message, {
        position: 'top-right',
        autoClose: 100,
        // hideProgressBar: true,
        style: { fontSize: '20px', fontWeight: 'bold', color: 'black' },
      });
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('contextmenu', handleContextMenu);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <div>
      <ToastContainer />
    </div>
  );
};

export default Lock;
