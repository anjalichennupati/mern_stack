import React from 'react';
import im1 from '../assets/im1.png';
import im2 from '../assets/im2.png';
import im3 from '../assets/im3.png';
import im4 from '../assets/im4.png';
import im5 from '../assets/im5.png';
import im6 from '../assets/im6.png';
import im7 from '../assets/im7.png';
import im8 from '../assets/im8.png';
import im9 from '../assets/im9.png';
import im10 from '../assets/im10.png';
import about from '../assets/about.png';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '11px', // Add centerPadding to set the space between slides
    customPaging: function (i) {
      return (
        <button className="slick-dot bg-black" style={{ backgroundColor: 'white', borderRadius: '100%', width: '20px', height: '20px' }}>
          {/* You can add additional styling to customize the dots */}
        </button>
      );
    },
  };

  return (
    <section className="bg-[#1b263b] h-[1780px] min-h-full flex">
      <div className='absolute w-[95%] m-auto mt-3 ml-8'>
        <div className="mt-10 flex"> {/* Adjusted margin-top value */}
          <img src={about} alt="" className='h-[600px] w-[100%] max-w-full rounded-lg mb-8 blur-sm'/>

          <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#7f4f24] text-6xl font-bold font font-poppins">
            ChainSync
          </div>
          <div className="absolute top-[26%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#590d22] text-4xl font-semibold font-poppins text-center">
            " Empowering Supply Chains with<br />Blockchain and GI Tagging. "
          </div>
          
        </div>
        <div className=' flex justify-between'>
          <div className='absolute top-[39%] left-[40%] text-[#e1e5f2] text-6xl font-bold font-poppins'> 
          ABOUT US </div>
        </div>

        <div className='flex mb-4 ml-10 mt-20'>
        <div className="flex flex-col px-5 py-5 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-2 feedback-card relative z-[1] gradient-effectone">
            
          <div>
              <p className="py-1 font-poppins font-bold text-[24px] leading-[32.4px] text-white my-2">
              Geographical Identification (GI) Tagging              </p>
              <p className="mb-4 font-poppins font-normal text-[18px] leading-[32.4px] text-white my-3">
              Enhance product integrity with our cutting-edge GI tagging, ensuring a digital fingerprint for each item. Geolocate and certify origin, creating an unforgeable link between quality, authenticity, and geographical heritage.              </p>
            </div>
          </div>
          <div className="flex flex-col px-5 py-5 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-2 feedback-card relative z-[1] gradient-effectone">
            
          <div>
              <p className="py-1 font-poppins font-bold text-[24px] leading-[32.4px] text-white my-2">
              Blockchain Integration:
              </p>
              <p className="mb-4 font-poppins font-normal text-[18px] leading-[32.4px] text-white my-3">
              Revolutionize trust and security in your operations by leveraging our blockchain solution. Seamlessly record, verify, and trace every transaction, establishing an immutable, transparent, and tamper-resistant digital ledger for your business.              </p>
            </div>
            
          </div>
          <div className="flex flex-col px-5 py-5 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-2 feedback-card relative z-[1] gradient-effectone">
            
            <div>
                <p className="py-1 font-poppins font-bold text-[24px] leading-[32.4px] text-white my-2">
                Supply Chain Management:
                </p>
                <p className="mb-4 font-poppins font-normal text-[18px] leading-[32.4px] text-white my-3">
                Unleash the power of efficiency and transparency with our supply chain management tools. From source to shelf, optimize workflows, reduce costs, and empower stakeholders with real-time insights, ensuring a resilient and responsive supply chain ecosystem.                </p>
              </div>
              
            </div>
          
          </div>

          <div className=' flex justify-between mb-6 ml-10 mt-20'>
          <div className='absolute top-[70%] left-[43%] text-[#e1e5f2] text-6xl font-bold font-poppins'> 
          PERKS </div>
        </div>
        {/* Move Slider component outside the above div */}
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="bg-[#e5e5e5] h-[430px] text-black rounded-xl font-poppins">
              <div className='h-56 bg-[#faedcd] flex justify-center items-center rounded-t-xl'>
                <img src={d.img} alt="" className="h-[198px] w-[87%] rounded-[15px]"/>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center">{d.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

const data = [
  {
    name: 'Immutable Provenance',
    img: im1,
    review: 'Geographical Identification Tagging on blockchain ensures an unchangeable record of product origins, fostering trust.',
  },
  {
    name: 'Anti-Fraud Arsenal',
    img: im2,
    review: 'Bolstering anti-counterfeiting measures, the fusion of GI tagging and blockchain verifies product authenticity.',
  },
  {
    name: 'Pellucid Supply Chains',
    img: im3,
    review: 'Unveiling the journey from source to shelf, this duo guarantees transparency in supply chains, empowering consumers.',
  },
  {
    name: 'Streamlined Compliance',
    img: im4,
    review: 'Simplifying compliance procedures, the synergy between geographical tagging and blockchain eases regulatory burdens.',
  },
  {
    name: 'Decentralized Ecosystem',
    img: im5,
    review: 'By marrying GI tagging with blockchains decentralized nature, a robust trust ecosystem is established.',
  },
  {
    name: 'Enhanced Security',
    img: im6,
    review: 'Blockchains cryptographic principles combined with GI tagging provide enhanced security and safeguarding.',
  },
  {
    name: 'Efficient Traceability',
    img: im7,
    review: 'The integration of blockchain and GI tagging enables precise traceability, allowing stakeholders to track with accuracy.',
  },
  {
    name: 'Real-time Monitoring',
    img: im8,
    review: 'Blockchain-powered GI tagging facilitates real-time monitoring, ensuring stakeholders have up-to-the-minute information about product movements and status.',
  },
  {
    name: 'Automated Checks',
    img: im9,
    review: 'Automated compliance checks, made possible by blockchain and GI tagging, streamline regulatory processes.',
  },
  {
    name: 'Immutable Audits',
    img: im10,
    review: 'Blockchains immutability ensures that records related to GI tagging are tamper-proof, providing a reliable source for audits.',
  },
];
