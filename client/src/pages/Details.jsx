import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import viewdata from '../assets/viewdata.png'
import insertdata from '../assets/insertdata.png'
import qrcode from '../assets/qrcode.png'

export default function Details() {
  return (
    <section className="bg-[#d9d9d9] min-h-screen flex items-center justify-center">
      <div className="container mx-auto my-2 p-8 bg-[#000000] rounded-lg shadow-md">
        <div className="flex justify-center w-full feedback-container relative z-[1] mt-[-15px] mb-[-15px]">
          <div className="flex flex-col px-5 py-5 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-2 feedback-card relative z-[1] gradient-effectnew">
            <div className="mb-4">
              <img
                src={viewdata}
                alt="Feedback 1"
                className="w-full rounded-[20px]"
              />
            </div>
            <div>
              <p className="py-1 font-poppins font-bold text-[24px] leading-[32.4px] text-white my-2">
                " Unlocking the Blockchain Vault. "
              </p>
              <p className="mb-4 font-poppins font-normal text-[18px] leading-[32.4px] text-white my-3">
                Admins Dive into the Digital Ledger, Revealing the Secrets Encoded in Every Block!
              </p>
            </div>
            <Link to='/view-data'>
              <button className='bg-[#0b090a] text-white p-2 rounded-full uppercase flex items-center justify-center hover:opacity-95 disabled:opacity-80 border border-white'>
                <span className="font-semibold text-lg">View Data</span>
                <span className="ml-2 text-2xl font-bold">&#8594;</span>
              </button>
            </Link>
          </div>

          <div className="flex flex-col px-5 py-5 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-2 feedback-card relative z-[1] gradient-effectnew">
            <div className="mb-4">
              <img
                src={insertdata}
                alt="Feedback 2"
                className="w-full rounded-[20px]"
              />
            </div>
            <div>
              <p className="py-1 font-poppins font-bold text-[24px] leading-[32.4px] text-white my-2">
                " Empowering the Secured Ledger. "
              </p>
              <p className="mb-4 font-poppins font-normal text-[18px] leading-[32.4px] text-white my-3">
                Empowering Admins to Safeguard Trust by Seamlessly Inserting Data into the Database!
              </p>
            </div>
            <Link to='/insert-data'>
              <button className='bg-[#0b090a] text-white p-2 rounded-full uppercase flex items-center justify-center hover:opacity-95 disabled:opacity-80 border border-white'>
                <span className="font-semibold text-lg">Insert Data</span>
                <span className="ml-2 text-2xl font-bold">&#8594;</span>
              </button>
            </Link>
          </div>

          <div className="flex flex-col px-5 py-5 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-2 feedback-card relative z-[1] gradient-effectnew">
            <div className="mb-4">
              <img
                src={qrcode}
                alt="Feedback 3"
                className="w-full rounded-[20px]"
              />
            </div>
            <div>
              <p className="py-1 font-poppins font-bold text-[24px] leading-[32.4px] text-white my-2">
                " Sanctioning Data Integrity. "
              </p>
              <p className="mb-4 font-poppins font-normal text-[18px] leading-[32.4px] text-white my-3">
                Admins, Unleash the Power of Trust by Generating QR Codes for Immutable Blockchain Data!
              </p>
            </div>
            <Link to='/generate-qr'>
              <button className='bg-[#0b090a] text-white p-2 rounded-full uppercase flex items-center justify-center hover:opacity-95 disabled:opacity-80 border border-white'>
                <span className="font-semibold text-lg">Generate QR Code</span>
                <span className="ml-2 text-2xl font-bold">&#8594;</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
