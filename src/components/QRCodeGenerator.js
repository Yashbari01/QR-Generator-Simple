// src/components/QRCodeGenerator.js
import React, { useState, useRef } from 'react';
import { FaDownload, FaQrcode, FaUpload } from 'react-icons/fa';
import { MdColorLens } from 'react-icons/md';
import QRCode from 'qrcode';

const QRCodeGenerator = () => {
  const [inputText, setInputText] = useState('');
  const [foregroundColor, setForegroundColor] = useState('#000000'); // Default QR code foreground color
  const [backgroundColor, setBackgroundColor] = useState('#ffffff'); // Default QR code background color
  const [logo, setLogo] = useState(null); // For storing logo image
  const canvasRef = useRef(null); // Reference to the canvas

  // Handle input change
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  // Handle color change
  const handleColorChange = (e) => {
    const { name, value } = e.target;
    if (name === 'foreground') {
      setForegroundColor(value);
    } else {
      setBackgroundColor(value);
    }
  };

  // Handle logo upload
  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogo(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Generate QR code on button click
  const generateQRCode = () => {
    if (inputText.trim() === '') {
      alert('Please enter some text to generate the QR code.');
      return;
    }

    const options = {
      width: 256,
      color: {
        dark: foregroundColor,  // Foreground color
        light: backgroundColor, // Background color
      },
    };

    QRCode.toCanvas(canvasRef.current, inputText, options, (error) => {
      if (error) {
        console.error(error);
      } else {
        // Draw logo in the center of the QR code (if any)
        if (logo) {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext('2d');
          const logoImg = new Image();
          logoImg.src = logo;
          logoImg.onload = () => {
            const logoSize = 64; // Size of the logo in the center
            const x = (canvas.width - logoSize) / 2;
            const y = (canvas.height - logoSize) / 2;
            ctx.drawImage(logoImg, x, y, logoSize, logoSize); // Draw logo
          };
        }
      }
    });
  };

  // Handle QR code download
  const downloadQRCode = () => {
    if (!canvasRef.current) return;

    const dataURL = canvasRef.current.toDataURL('image/png');

    // Create an anchor element to download the image
    const a = document.createElement('a');
    a.href = dataURL;
    a.download = 'qrcode.png';
    a.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white backdrop-blur-lg bg-opacity-90 rounded-2xl shadow-xl p-6 sm:p-8">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <FaQrcode className="text-4xl text-indigo-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">QR Code Generator</h1>
            <p className="text-gray-600">Create custom QR codes with your brand colors and logo</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Input Controls */}
            <div className="space-y-6">
              {/* Text Input */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Content</label>
                <input
                  type="text"
                  value={inputText}
                  onChange={handleInputChange}
                  placeholder="Enter URL or text"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition duration-200"
                />
              </div>

              {/* Color Selection */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    <MdColorLens className="mr-2" />
                    Foreground
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      name="foreground"
                      value={foregroundColor}
                      onChange={handleColorChange}
                      className="w-12 h-12 rounded-lg cursor-pointer border-0"
                    />
                    <span className="text-sm text-gray-600">{foregroundColor}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="flex items-center text-sm font-medium text-gray-700">
                    <MdColorLens className="mr-2" />
                    Background
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      name="background"
                      value={backgroundColor}
                      onChange={handleColorChange}
                      className="w-12 h-12 rounded-lg cursor-pointer border-0"
                    />
                    <span className="text-sm text-gray-600">{backgroundColor}</span>
                  </div>
                </div>
              </div>

              {/* Logo Upload */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <FaUpload className="mr-2" />
                  Upload Logo
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="w-full flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-lg tracking-wide border border-gray-200 cursor-pointer hover:bg-gray-50 transition duration-200">
                    <FaUpload className="text-indigo-500 text-2xl" />
                    <span className="mt-2 text-sm text-gray-600">Select your logo</span>
                    <input
                      type="file"
                      onChange={handleLogoUpload}
                      accept="image/*"
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Generate Button */}
              <button
                onClick={generateQRCode}
                className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition duration-200 flex items-center justify-center space-x-2"
              >
                <FaQrcode />
                <span>Generate QR Code</span>
              </button>
            </div>

            {/* Right Column - QR Code Preview */}
            <div className="flex flex-col items-center justify-center space-y-6">
              <div className="bg-white p-4 rounded-xl shadow-md">
                <canvas ref={canvasRef} className="max-w-full" />
              </div>
              
              {/* Download Button */}
              <button
                onClick={downloadQRCode}
                className="py-3 px-6 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition duration-200 flex items-center space-x-2"
              >
                <FaDownload />
                <span>Download QR Code</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    //   <div className="bg-white p-8 rounded-lg shadow-md w-96">
    //     <h1 className="text-2xl font-semibold mb-6 text-center">QR Code Generator</h1>

    //     {/* Input field for QR code */}
    //     <input
    //       type="text"
    //       value={inputText}
    //       onChange={handleInputChange}
    //       placeholder="Enter text to generate QR"
    //       className="w-full p-3 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    //     />

    //     {/* Color customization */}
    //     <div className="mb-4">
    //       <label className="block mb-2">Foreground Color</label>
    //       <input
    //         type="color"
    //         name="foreground"
    //         value={foregroundColor}
    //         onChange={handleColorChange}
    //         className="w-16 h-8 border border-gray-300 rounded"
    //       />
    //     </div>

    //     <div className="mb-4">
    //       <label className="block mb-2">Background Color</label>
    //       <input
    //         type="color"
    //         name="background"
    //         value={backgroundColor}
    //         onChange={handleColorChange}
    //         className="w-16 h-8 border border-gray-300 rounded"
    //       />
    //     </div>

    //     {/* Logo upload */}
    //     <div className="mb-4">
    //       <label className="block mb-2">Upload Logo (Optional)</label>
    //       <input
    //         type="file"
    //         onChange={handleLogoUpload}
    //         accept="image/*"
    //         className="w-full p-2 border border-gray-300 rounded"
    //       />
    //     </div>

    //     {/* Generate QR Code button */}
    //     <button
    //       onClick={generateQRCode}
    //       className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
    //     >
    //       Generate QR Code
    //     </button>

    //     {/* Render QR Code */}
    //     <div className="mt-6 text-center">
    //       <canvas ref={canvasRef} />
    //       <div className="mt-4">
    //         <button
    //           onClick={downloadQRCode}
    //           className="flex items-center justify-center py-2 px-4 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
    //         >
    //           <FaDownload className="mr-2" />
    //           Download QR Code
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default QRCodeGenerator;
