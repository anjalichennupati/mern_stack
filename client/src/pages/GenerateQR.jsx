// GenerateQR.jsx

import React, { useState } from 'react';
import axios from 'axios';
import genqr from '../assets/genqr.png';

export default function GenerateQR() {
    const [giTagID, setGiTagID] = useState('');
    const [qrCode, setQRCode] = useState('');
    const [error, setError] = useState('');

    const handleGenerateQR = async () => {
        if (!giTagID) {
            setError('GI Tag ID cannot be empty');
            setQRCode('');
            return;
        }

        try {
            const response = await axios.get(`/api/auth/generateQR/${giTagID}`);
            // Inside handleGenerateQR function in GenerateQR.jsx
            if (response.data.success) {
                if (response.data.qrCodeGenerated) {
                setError('QR code already generated for this GI Tag');
                setQRCode('');
                } else {
                setQRCode(response.data.qrCode);
                console.log('Retrieved Block Information:', response.data.qrCode);
                setError('');
                }
            } else {
                setQRCode('');
                setError(response.data.message);
            }
  
        } catch (error) {
            console.error('Error generating QR code:', error);
            setQRCode('');
            setError('An error occurred while generating the QR code.');
        }
    };

    return (
        // <div>
        //     <h1 className='text-3xl text-center font-semibold my-7'>Generate QR Code</h1>
        //     <label className='bg-slate-100 p-3 rounded-lg'>
        //         Enter GI Tag ID:
        //         <input
        //             type="text"
        //             value={giTagID}
        //             onChange={(e) => setGiTagID(e.target.value)}
        //             className='bg-slate-100 p-1 rounded-md'
        //         />
        //     </label>

        //     <button onClick={handleGenerateQR}>Generate QR Code</button>

        //     {qrCode && (
        //         <div>
        //             <h2>QR Code:</h2>
        //             <img src={qrCode} alt="QR Code" />
        //         </div>
        //     )}

        //     {error && <div style={{ color: 'red' }}>{error}</div>}
        // </div>
        <section className="bg-[#d9d9d9] min-h-screen flex items-center justify-center">
      <div className="container mx-auto my-2 p-8 bg-[#000000] rounded-xl shadow-md w-[60%]">
        <div className="flex justify-center w-full feedback-container relative z-[1] mt-[-15px] mb-[-15px]">
          <div className="flex flex-col px-5 py-5 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-2 feedback-card relative z-[1] gradient-effecttwo">
            <div className="mb-4">
              <img
                src={genqr}
                alt="Feedback 1"
                className="w-full rounded-[20px]"
              />
            </div>
            <div>
        

              <p className="mt-1 mb-4 font-poppins font-normal text-[18px] leading-[32.4px] text-white my-3">
                Admins Dive into the Digital Ledger, Revealing the Secrets Encoded in Every Block!
              </p>
              <label className='bg-[#b8bedd] p-3 rounded-full ml-1/2 border-black'>
                Enter GI Tag ID:
                 <input
                    type="text"
                    value={giTagID}
                    onChange={(e) => setGiTagID(e.target.value)}
                    className='bg-slate-100 p-1 rounded-full ml-2 '
                />
            </label>
              
            <button onClick={handleGenerateQR} className='bg-[#0b090a] mt-5 text-white p-1 rounded-full uppercase flex items-center justify-center hover:opacity-95 disabled:opacity-80 border border-white'>
                <span className="font-semibold text-md">Generate QR Code</span>
                <span className="ml-2 text-2xl font-bold">&#8594;</span>
              </button>            </div>

          </div>
          <div className="flex flex-col px-5 py-5 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-2 feedback-card relative z-[1] gradient-effecttwo">
          <p className="py-1 font-poppins font-bold text-[24px] leading-[32.4px] text-white my-2">
                " Generated QR Code: "
              </p>
              <h2 className='font-poppins text-[#6db3bc] font-bold'>QR Code:</h2>

            {/* <div className="mb-4">
              <img
                src={genqr}
                alt="Feedback 2"
                className="w-full rounded-[20px]"
              />
            </div> */}
         {qrCode && (
                <div>
                    <img src={qrCode} alt="QR Code" className='mt-3' />
                </div>
            )}
            <div>
              
              
            </div>
          </div>
        </div>
        
      </div>
    </section>
    );
}
