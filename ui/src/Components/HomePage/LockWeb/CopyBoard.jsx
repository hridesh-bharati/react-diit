import React, { useEffect } from 'react';

const CopyBoard = () => {
  // useEffect hook to manage side effects (copy event listener)
  useEffect(() => {
    // Handle the copy event
    const handleCopy = (event) => {
      event.preventDefault(); // Prevent the default copy action
      const customText = 'ok'; // Define the custom text to copy
      event.clipboardData.setData('text/plain', customText); // Set the clipboard data to custom text
      console.log('Copied:', customText); // Log the copied text
    };
    document.addEventListener('copy', handleCopy);
    return () => {
      document.removeEventListener('copy', handleCopy);
    };
  }, []); 
  return null;
};
export default CopyBoard;
